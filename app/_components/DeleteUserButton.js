'use client';

export default function DeleteUserButton({ userId, onDelete, className, children = "Delete" }) {
  const handleClick = async (e) => {
    e.preventDefault();
    if (confirm('Are you sure you want to delete this user?')) {
      await onDelete(userId);
    }
  };

  const baseClasses = "inline-flex items-center justify-center px-4 py-2  font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95";
  const deleteClasses = "bg-gradient-to-r from-black to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500";
  
  return (
    <button 
      type="submit"
      className={className || `${baseClasses} ${deleteClasses}`}
      onClick={handleClick}
    >
  
      {children}
    </button>
  );
} 