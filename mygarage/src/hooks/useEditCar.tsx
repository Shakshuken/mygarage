import { useMutation, useQueryClient } from "react-query";

type Inputs = {
  name: string;
  description: string;
  img: FileList;
};

export function useEditCar() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (params: { carId: string; updatedData: Inputs }) => {
      const { carId, updatedData } = params;
      const formData = new FormData();
      formData.append("name", updatedData.name);
      formData.append("description", updatedData.description);
      formData.append("image", updatedData.img[0]);

      const response = await fetch(`http://localhost:8000/api/cars/${carId}`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("cars");
      },
    }
  );

  return {
    editCar: (carId: string, updatedData: Inputs) =>
      mutation.mutate({ carId, updatedData }),
    isEditing: mutation.isLoading,
  };
}
