import React from "react";
import Link from "next/link";
import { deleteUser } from "@/app/_lib/actions/userActions";
import DeleteUserButton from "@/app/_components/DeleteUserButton";

export const metadata = {
  title: "Users page",
  description: "users page desc",
};

async function getUsers() {
  try {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? process.env.NEXT_PUBLIC_BASE_URL 
      : 'http://localhost:3000';
    
    const res = await fetch(`${baseUrl}/api/users`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const data = await res.json();
    return data.users || [];
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

async function handleDeleteUser(userId) {
  "use server";
  const result = await deleteUser(userId);
  return result;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center">User Directory</h1>
        <Link 
          href="/users/new" 
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New User
        </Link>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No users found</p>
          <Link 
            href="/users/new" 
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-black to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            
            Add the first user
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user) => (
            <div key={user._id} className="bg-white shadow-md rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                {user.image ? (
                  <img 
                    src={user.image} 
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-bold text-xl">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">
                    {user.name}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    @{user.username}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium">Phone:</span> {user.phone}
                </p>
                {user.company?.name && (
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Company:</span> {user.company.name}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <Link 
                  href={`/users/${user._id}`}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-black to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </Link>
                <Link 
                  href={`/users/${user._id}/edit`}
                  className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-black to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </Link>
                <form action={handleDeleteUser.bind(null, user._id)}>
                  <DeleteUserButton
                    userId={user._id}
                    onDelete={handleDeleteUser}
                    
                    className="px-3 py-2 bg-gradient-to-r from-black  to-red-600 hover:from-red-600 hover:to-red-700 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 inline-flex items-center justify-center"
                 
                 >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                 </DeleteUserButton>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
