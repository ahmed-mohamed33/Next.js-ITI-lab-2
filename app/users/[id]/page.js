export const dynamic = "error"; 

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users.map((user) => ({ id: user.id.toString() }));
}

export function generateMetadata({ params }) {
  return {
    title: `User ${params.id}`,
  };
}

export default async function page({ params }) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {

    cache: "force-cache", // SSG
  });
  const data = await res.json();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{data.name}</h1>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-medium w-32 text-gray-600">Username:</span>
            <span>{data.username}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium w-32 text-gray-600">Email:</span>
            <span>{data.email}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium w-32 text-gray-600">Phone:</span>
            <span>{data.phone}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium w-32 text-gray-600">Website:</span>
            <span>{data.website}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium w-32 text-gray-600">Company:</span>
            <span>{data.company.name}</span>
          </div>
          
          <div className="mt-6 pt-6 border-t">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Address</h2>
            <div className="space-y-2">
              <p>{data.address.street}</p>
              <p>{data.address.suite}</p>
              <p>{data.address.city}, {data.address.zipcode}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
