"use server";

import { dbConnection } from "@/app/_lib/dbConnection";
import User from "@/app/_lib/schema/users";
import { uploadImage, deleteImage } from "@/app/_lib/cloudinary";
import { revalidatePath } from "next/cache";

export async function createUser(formData) {
  try {
    await dbConnection();
    
    const userData = {
      name: formData.get('name'),
      username: formData.get('username'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      website: formData.get('website') || '',
      company: {
        name: formData.get('companyName') || '',
        catchPhrase: formData.get('companyCatchPhrase') || '',
        bs: formData.get('companyBs') || '',
      },
      address: {
        street: formData.get('addressStreet') || '',
        suite: formData.get('addressSuite') || '',
        city: formData.get('addressCity') || '',
        zipcode: formData.get('addressZipcode') || '',
        geo: {
          lat: formData.get('addressLat') || '',
          lng: formData.get('addressLng') || '',
        },
      },
    };


    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = `data:${imageFile.type};base64,${buffer.toString('base64')}`;
      
      const uploadResult = await uploadImage(base64);
      userData.image = uploadResult.secure_url;
      userData.imagePublicId = uploadResult.public_id;
    }

    const requiredFields = ['name', 'username', 'email', 'phone'];
    for (const field of requiredFields) {
      if (!userData[field]) {
        throw new Error(`${field} is required`);
      }
    }

    const newUser = await User.create(userData);
    
    revalidatePath('/users');
    
    return { success: true, user: newUser };
  } catch (error) {
    console.error('Error creating user:', error);
    return { success: false, error: error.message };
  }
}

export async function updateUser(userId, formData) {
  try {
    await dbConnection();
    
    const updateData = {
      name: formData.get('name'),
      username: formData.get('username'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      website: formData.get('website') || '',
      company: {
        name: formData.get('companyName') || '',
        catchPhrase: formData.get('companyCatchPhrase') || '',
        bs: formData.get('companyBs') || '',
      },
      address: {
        street: formData.get('addressStreet') || '',
        suite: formData.get('addressSuite') || '',
        city: formData.get('addressCity') || '',
        zipcode: formData.get('addressZipcode') || '',
        geo: {
          lat: formData.get('addressLat') || '',
          lng: formData.get('addressLng') || '',
        },
      },
    };


    const imageFile = formData.get('image');
    if (imageFile && imageFile.size > 0) {
      const currentUser = await User.findById(userId);
      if (currentUser && currentUser.imagePublicId) {
        await deleteImage(currentUser.imagePublicId);
      }
      
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = `data:${imageFile.type};base64,${buffer.toString('base64')}`;
      
      const uploadResult = await uploadImage(base64);
      updateData.image = uploadResult.secure_url;
      updateData.imagePublicId = uploadResult.public_id;
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { 
      new: true,
      runValidators: true 
    });

    if (!updatedUser) {
      throw new Error('User not found');
    }

    revalidatePath('/users');
    revalidatePath(`/users/${userId}`);
    
    return { success: true, user: updatedUser };
  } catch (error) {
    console.error('Error updating user:', error);
    return { success: false, error: error.message };
  }
}

export async function deleteUser(userId) {
  try {
    await dbConnection();
    
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    if (user.imagePublicId) {
      await deleteImage(user.imagePublicId);
    }

    await User.findByIdAndDelete(userId);
    
    revalidatePath('/users');
    
    return { success: true };
  } catch (error) {
    console.error('Error deleting user:', error);
    return { success: false, error: error.message };
  }
} 