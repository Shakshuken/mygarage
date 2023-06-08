import { useQuery } from "react-query";

const fetchDriver = async (driverId: any) => {
  const response = await fetch(`http://localhost:8000/api/drivers/${driverId}`);
  const data = await response.json();
  return data;
};

export default fetchDriver;
