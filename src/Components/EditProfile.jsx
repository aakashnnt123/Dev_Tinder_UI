import React, { useState, useEffect } from "react";
import axios from "axios";
import { Base_Url } from "../../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Utils/UserSlice";

const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstname(user.firstName || "");
      setLastName(user.lastName || "");
      setPhotoUrl(user.photoUrl || "");
      setAge(user.age || "");
      setGender(user.gender || "");
      setAbout(user.about || "");
      setSkills(user.Skills || []);
    }
    console.log("run");
  }, [user]);

  const saveProfile = async () => {
    setError("");

    if (skills.length > 5) {
      setError("You can add up to 5 skills only.");
      return;
    }

    try {
      const res = await axios.patch(
        `${Base_Url}/profile/edit`,
        {
          firstName,
          lastName,
          age,
          gender: gender,
          photoUrl,
          about,
          Skills: skills,
        },
        { withCredentials: true }
      );
      console.log("res", res);
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      setError(error.response?.data || "Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center mt-20 px-4  bg-[length:300%_300%]">
      <div className="bg-base-300 w-full max-w-2xl rounded-xl shadow-xl p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black my-4">
        <h2 className="text-2xl font-bold text-white text-center mb-4">
          Edit Profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* First Name */}
          <label className="form-control">
            <span className="label-text text-white">First Name</span>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              className="input input-bordered w-full text-black bg-white"
            />
          </label>

          {/* Last Name */}
          <label className="form-control">
            <span className="label-text text-white">Last Name</span>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input input-bordered w-full text-black bg-white"
            />
          </label>

          {/* Age */}
          <label className="form-control">
            <span className="label-text text-white">Age</span>
            <input
              type="number"
              min={18}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input input-bordered w-full text-black bg-white"
            />
          </label>

          {/* Gender */}
          <label className="form-control ">
            <span className="label-text text-white">Gender</span>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="select select-bordered text-black bg-white w-full"
            >
              <option disabled value="">
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>

          {/* Photo URL */}
          <label className="form-control sm:col-span-2">
            <span className="label-text text-white">Photo URL</span>
            <input
              type="text"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="input input-bordered w-full text-black bg-white"
              placeholder="https://example.com/photo.jpg"
            />
          </label>

          {/* Skills */}
          <label className="form-control sm:col-span-2">
            <span className="label-text text-white">
              Skills (comma separated)
            </span>
            <input
              type="text"
              value={skills.join(",")}
              onChange={(e) =>
                setSkills(
                  e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .slice(0, 5)
                )
              }
              className="input input-bordered w-full text-black bg-white"
              placeholder="e.g., React, Node.js"
            />
            <small className="text-gray-400">Max 5 skills allowed</small>
          </label>

          {/* About */}
          <label className="form-control sm:col-span-2">
            <span className="label-text text-white">About</span>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="textarea textarea-bordered w-full text-black bg-white"
              rows={3}
              placeholder="Say something about yourself"
            ></textarea>
          </label>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {/* Save Button */}
        <div className="card-actions justify-center mt-4">
          <button
            className="px-8 bg-[#662d91] hover:bg-[#512273] hover:scale-105 text-white py-2 rounded-md shadow-md transition-all duration-200"
            onClick={saveProfile}
          >
            Save Profile
          </button>
        </div>
      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="toast toast-top toast-center pt-20 z-50">
          <div className="alert alert-success shadow-lg">
            <span>Profile saved successfully</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
