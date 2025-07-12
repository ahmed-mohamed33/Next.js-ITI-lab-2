export const metadata = {
  title: "Home Page",
  description: "Home page desc",
};

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent">
        Welcome to Hamo
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        A modern web application , featuring user management
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold ">Users</h2>

        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold ">About</h2>

        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold ">Contact</h2>

        </div>
      </div>
    </div>
  );
}
