import Link from "next/link";
import { deleteUser } from "@/app/_lib/actions/userActions";
import DeleteUserButton from "@/app/_components/DeleteUserButton";

export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? process.env.NEXT_PUBLIC_BASE_URL 
      : 'http://localhost:3000';
    
    const res = await fetch(`${baseUrl}/api/users`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      return [];
    }
    
    const data = await res.json();
    return data.users.map((user) => ({ id: user._id }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
  };
}

async function getUser(id) {
  try {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? process.env.NEXT_PUBLIC_BASE_URL 
      : 'http://localhost:3000';
    
    const res = await fetch(`${baseUrl}/api/users/${id}`, {
      cache: 'no-store',
    });
    
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    
    const data = await res.json();
    return data.user;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
}

async function handleDeleteUser(userId) {
  "use server";
  const result = await deleteUser(userId);
  return result;
}

export default async function UserDetailPage({ params }) {
  const { id } = params;
  const user = await getUser(id);

  if (!user) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">User Not Found</h1>
          <p className="text-gray-600 mb-4">The user you're looking for doesn't exist.</p>
          <Link 
            href="/users" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-black to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
            </svg>
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/users" 
            className="inline-flex items-center px-4 py-2 text-green-600 hover:text-green-800 font-medium rounded-lg hover:bg-green-50 transition-all duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Users
          </Link>
          <div className="flex gap-3">
            <Link 
              href={`/users/${user._id}/edit`}
              className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-black to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit User
            </Link>
            <form action={handleDeleteUser.bind(null, user._id)}>
              <DeleteUserButton
                userId={user._id}
                onDelete={handleDeleteUser}
              >
                Delete User
              </DeleteUserButton>
            </form>
          </div>
        </div>

        <div className="flex items-center mb-6">
          {user.image ? (
            <img 
              src={user.image} 
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover mr-6"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mr-6">
              <span className="text-gray-500 font-bold text-3xl">
                {user.name.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
            <p className="text-gray-600 text-lg">@{user.username}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium w-32 text-gray-600">Email:</span>
            <span>{user.email}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium w-32 text-gray-600">Phone:</span>
            <span>{user.phone}</span>
          </div>
          
          {user.website && (
            <div className="flex items-center">
              <span className="font-medium w-32 text-gray-600">Website:</span>
              <a 
                href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600"
              >
                {user.website}
              </a>
            </div>
          )}
          
          {user.company?.name && (
            <div className="flex items-center">
              <span className="font-medium w-32 text-gray-600">Company:</span>
              <span>{user.company.name}</span>
            </div>
          )}

          {user.company?.catchPhrase && (
            <div className="flex items-center">
              <span className="font-medium w-32 text-gray-600">Catch Phrase:</span>
              <span className="italic">"{user.company.catchPhrase}"</span>
            </div>
          )}
          
          {(user.address?.street || user.address?.city) && (
            <div className="mt-6 pt-6 border-t">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Address</h2>
              <div className="space-y-2">
                {user.address.street && <p>{user.address.street}</p>}
                {user.address.suite && <p>{user.address.suite}</p>}
                {user.address.city && (
                  <p>{user.address.city}{user.address.zipcode && `, ${user.address.zipcode}`}</p>
                )}
              </div>
            </div>
          )}

          <div className="mt-6 pt-6 border-t text-sm text-gray-500">
            <p>Created: {new Date(user.createdAt).toLocaleDateString()}</p>
            <p>Updated: {new Date(user.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
