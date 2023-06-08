import { useMutation, useQueryClient } from "react-query";

const useDeleteCar = () => {
  const queryClient = useQueryClient();

  const deleteCar = async (carId: any) => {
    try {
      await fetch(`http://localhost:8000/api/cars/${carId}`, {
        method: "DELETE",
      });

      queryClient.invalidateQueries("cars"); // Оновити кеш запиту "cars"
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  const mutation = useMutation(deleteCar);

  return {
    deleteCar: mutation.mutate,
    isDeleting: mutation.isLoading,
  };
};

export default useDeleteCar;
