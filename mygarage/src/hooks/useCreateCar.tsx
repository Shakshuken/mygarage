import { useMutation } from "react-query";

type Inputs = { name: string; description: string; img: FileList };

export function useCreateCar() {
  return useMutation(async (carData: Inputs) => {
    const formData = new FormData();
    formData.append("name", carData.name);
    formData.append("description", carData.description);
    formData.append("image", carData.img[0]);
    const response = await fetch("http://localhost:8000/api/cars", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  });
}
