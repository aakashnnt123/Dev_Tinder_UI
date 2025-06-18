const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, about, Skills } = user;

  return (
    <div className=" mt-5 flex w-[600px] h-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Left: Image */}
      <div className="flex items-center justify-center w-1/3 p-4">
        <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={photoUrl}
            alt={`${firstName} ${lastName}`}
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Right: Info */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            {firstName + " " + lastName}
          </h1>

          <div className="mt-3">
            <h2 className="text-md font-medium text-gray-400">About</h2>
            <p className="text-sm mt-1 text-gray-200 line-clamp-3">{about}</p>
          </div>

          <div className="mt-3">
            <h2 className="text-md font-medium text-gray-400">Skills</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              {Skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button className="w-28 bg-[#E31837] hover:bg-[#c0132f] hover:scale-105 text-white py-2 rounded-md shadow-md transition-all duration-200">
            Ignore
          </button>
          <button className="w-28 bg-[#662d91] hover:bg-[#512273] hover:scale-105 text-white py-2 rounded-md shadow-md transition-all duration-200">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
