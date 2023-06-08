import { useQuery } from "react-query";

const fetchCar = async (carId: any) => {
  const response = await fetch(`http://localhost:8000/api/cars/${carId}`);
  const data = await response.json();
  return data;
};

export default fetchCar;
