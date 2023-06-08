import { useMutation, useQueryClient } from "react-query";

const useDeleteDriver = () => {
  const queryClient = useQueryClient();

  const deleteDriver = async (driverId: any) => {
    try {
      await fetch(`http://localhost:8000/api/drivers/${driverId}`, {
        method: "DELETE",
      });

      queryClient.invalidateQueries("drivers");
    } catch (error) {
      console.error("Error deleting driver:", error);
    }
  };

  const mutation = useMutation(deleteDriver);

  return {
    deleteDriver: mutation.mutate,
    isDeleting: mutation.isLoading,
  };
};

export default useDeleteDriver;
