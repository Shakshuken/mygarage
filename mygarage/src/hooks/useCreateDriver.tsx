import { useMutation } from "react-query";

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

export function useCreateDriver() {
  return useMutation(async (driverData: Inputs) => {
    const formData = new FormData();
    formData.append("first_name", driverData.first_name);
    formData.append("last_name", driverData.last_name);
    formData.append("phone_number", driverData.phone_number);
    formData.append("email", driverData.email);
    formData.append(
      "birth_date",
      new Date(driverData.birth_date).toISOString()
    );
    formData.append(
      "issue_date",
      new Date(driverData.issue_date).toISOString()
    );
    formData.append(
      "expiration_date",
      new Date(driverData.expiration_date).toISOString()
    );
    formData.append("authority", driverData.authority);
    formData.append("license_num", driverData.license_num);
    formData.append("category", driverData.category);

    formData.append("image", driverData.img[0]);
    const response = await fetch("http://localhost:8000/api/drivers", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  });
}
