import { useMutation, useQueryClient } from "react-query";

type Inputs = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  birth_date: Date;
  issue_date: Date;
  expiration_date: Date;
  authority: string;
  license_num: string;
  category: string;
  img: FileList;
};

export function useEditDriver() {
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (params: { driverId: string; updatedData: Inputs }) => {
      const { driverId, updatedData } = params;
      const formData = new FormData();
      formData.append("first_name", updatedData.first_name);
      formData.append("last_name", updatedData.last_name);
      formData.append("phone_number", updatedData.phone_number);
      formData.append("email", updatedData.email);
      formData.append(
        "birth_date",
        new Date(updatedData.birth_date).toISOString()
      );
      formData.append(
        "issue_date",
        new Date(updatedData.issue_date).toISOString()
      );
      formData.append(
        "expiration_date",
        new Date(updatedData.expiration_date).toISOString()
      );
      formData.append("authority", updatedData.authority);
      formData.append("license_num", updatedData.license_num);
      formData.append("category", updatedData.category);

      formData.append("image", updatedData.img[0]);

      const response = await fetch(
        `http://localhost:8000/api/drivers/${driverId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("drivers");
      },
    }
  );

  return {
    editDriver: (driverId: string, updatedData: Inputs) =>
      mutation.mutate({ driverId, updatedData }),
    isEditing: mutation.isLoading,
  };
}
