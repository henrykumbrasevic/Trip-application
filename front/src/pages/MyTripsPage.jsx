import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { URL } from "../helpers/localhostURL";
import StatementCard from "../components/StatementCard";

function MyTripsPage() {

  const { user } = useAuth();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`${URL}/api/trips/my`, {
          auth: {
            username: user.username,
            password: user.password,
          },
        });
        console.log("Fetched trips:", response.data);
        console.log(trips);

        setTrips(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTripDetails();
  }, []);

  if (loading) 
    return <p className="pt-5 text-[1.5rem] text-center">Loading trip details...</p>;
  if (error) 
    return <p className="pt-5 text-[1.5rem] text-center">You need to be logged in order to see your booked trips.</p>;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        {!error && trips.map((entry) => <StatementCard entry={entry} key={entry.id} />)}
        {error && <div>error</div>}
        {loading && <div>loading ...</div>}
      </div>
    </>
  );
}

export default MyTripsPage;