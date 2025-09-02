import axios from "axios";
import { useEffect, useState } from "react";
import { Base_Url } from "../../Utils/Constants";
import ConnectionsCard from "./ConnectionsCard";

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(Base_Url + "/user/connections", {
        withCredentials: true,
      });
      setConnections(res?.data?.data); 
    } catch (error) {
      console.log("Something Went Wrong", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-600 animate-gradient-x gap-8 p-4 min-h-screen">
      <div className="flex justify-center mt-24 mb-8 font-extrabold text-3xl">
        Connections
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {loading ? (
          <div className=" text-xl">Loading...</div>
        ) : connections.length > 0 ? (
          connections.map((item) => (
            <ConnectionsCard key={item._id} data={item} />
          ))
        ) : (
          <div className=" text-xl">No connections found.</div>
        )}
      </div>
    </div>
  );
};

export default Connections;
