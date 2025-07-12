import { uploadImage, deleteImage } from "@/app/_lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return Response.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString('base64')}`;

    const result = await uploadImage(base64);

    return Response.json({
      message: "Image uploaded successfully",
      imageUrl: result.secure_url,
      publicId: result.public_id
    }, { status: 200 });

  } catch (error) {
    console.error("Error uploading image:", error);
    return Response.json(
      { error: "Failed to upload image", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { publicId } = await request.json();

    if (!publicId) {
      return Response.json(
        { error: "Public ID is required" },
        { status: 400 }
      );
    }

    const result = await deleteImage(publicId);

    return Response.json({
      message: "Image deleted successfully",
      result
    }, { status: 200 });

  } catch (error) {
    console.error("Error deleting image:", error);
    return Response.json(
      { error: "Failed to delete image", details: error.message },
      { status: 500 }
    );
  }
} 