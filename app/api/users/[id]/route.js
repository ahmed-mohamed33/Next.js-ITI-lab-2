import { dbConnection } from "@/app/_lib/dbConnection";
import User from "@/app/_lib/schema/users";

export async function GET(request, { params }) {
  try {
    await dbConnection();
    const { id } = params;

    if (!id) {
      return Response.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const user = await User.findById(id);

    if (!user) {
      return Response.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    return Response.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return Response.json(
      { error: "Failed to fetch user", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    await dbConnection();
    const { id } = params;
    const body = await request.json();

    if (!id) {
      return Response.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const updatedUser = await User.findByIdAndUpdate(id, body, { 
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

export async function DELETE(request, { params }) {
  try {
    await dbConnection();
    const { id } = params;

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