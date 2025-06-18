import { useDispatch, useSelector } from "react-redux";
import { Base_Url } from "../../Utils/Constants";
import { addFeed } from "../../Utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store) => store.feed);

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(Base_Url + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (error) {
      console.error("Something Went Wrong:", error);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

 return (
  <>
    {feed && (
      <div className="h-[90vh] flex justify-center items-center overflow-hidden bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 animate-gradient-x bg-[length:300%_300%]">
        <UserCard user = {feed[0]}/>
      </div>
    )}
  </>
);

};

export default Feed;
