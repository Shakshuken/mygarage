const fetchCars = async () => {
  const response = await fetch("http://localhost:8000/api/cars");
  const data = await response.json();
  return data;
};

export default fetchCars;
