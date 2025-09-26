function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-sm mx-auto my-20 sm:p-4 md:p-8 lg:p-12 sm:max-w-xs md:max-w-sm lg:max-w-xl">
      <img className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-36 lg:h-36" src="https://via.placeholder.com/150" alt="User" />
      <h1 className="text-xl text-blue-800 my-4 md:text-xl">John Doe</h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base lg:text-lg">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
