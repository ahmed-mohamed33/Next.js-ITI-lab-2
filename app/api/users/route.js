import { dbConnection } from "@/app/_lib/dbConnection";
import User from "@/app/_lib/schema/users";

export async function GET() {
  try {
    await dbConnection();
    const users = await User.find({}).sort({ createdAt: -1 });
    return Response.json({ users, count: users.length }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return Response.json(
      { error: "Failed to fetch users", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnection();
    const body = await request.json();

    const requiredFields = ["name", "username", "email", "phone"];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return Response.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    const userData = {
      name: body.name,
      username: body.username,
      email: body.email,
      phone: body.phone,
      website: body.website || "",
      company: {
        name: body.company?.name || "",
        catchPhrase: body.company?.catchPhrase || "",
        bs: body.company?.bs || "",
      },
      address: {
        street: body.address?.street || "",
        suite: body.address?.suite || "",
        city: body.address?.city || "",
        zipcode: body.address?.zipcode || "",
        geo: {
          lat: body.address?.geo?.lat || "",
          lng: body.address?.geo?.lng || "",
        },
      },
      image: body.image || null,
      imagePublicId: body.imagePublicId || null,
    };

    const newUser = await User.create(userData);
    return Response.json({ user: newUser, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return Response.json(
        { error: `${field} already exists` },
        { status: 409 }
      );
    }
    
    return Response.json(
      { error: "Failed to create user", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await dbConnection();
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return Response.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(id, updateData, { 
      new: true,
      runValidators: true 
    });

    if (!updatedUser) {
      return Response.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return Response.json({ user: updatedUser, message: "User updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return Response.json(
        { error: `${field} already exists` },
        { status: 409 }
      );
    }
    
    return Response.json(
      { error: "Failed to update user", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await dbConnection();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return Response.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return Response.json({ message: "User deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting user:", error);
    return Response.json(
      { error: "Failed to delete user", details: error.message },
      { status: 500 }
    );
  }
} 