const fetchDrivers = async () => {
  const response = await fetch("http://localhost:8000/api/drivers");
  const data = await response.json();
  return data;
};

export default fetchDrivers;
