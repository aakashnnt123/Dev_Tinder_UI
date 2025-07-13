import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const user = useSelector((store) => store.user);

  if (!user) return null;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 animate-gradient-x gap-8 p-4 ">

      <div className="w-full lg:w-1/3  lg:mt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-lg p-6 text-white mt-24">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={user.photoUrl || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-purple-500 object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-center mt-4">
          {user.firstName} {user.lastName}
        </h2>

        {/* Age & Gender */}
        <p className="text-center text-gray-400 mt-1">
          {user.age} years old • {user.gender}
        </p>

      
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold mb-1">About</h3>
          <p className="text-gray-300 text-sm">
            {user.about || "No bio provided."}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {(user.Skills || []).map((skill, index) => (
              <span
                key={index}
                className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
      <div className="w-full lg:w-1/2">
        <EditProfile />
      </div>
    </div>
  );
};

export default Profile;
