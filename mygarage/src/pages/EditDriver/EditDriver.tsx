import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";
import CustomDatePicker from "../../UI/DatePicker";
import { ButtonBox, MainBox, SubheaderBox, TextBox } from "./styles";

import { useEditDriver } from "../../hooks/useEditDriver";
import { useParams } from "react-router-dom";

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

const EditDriver = () => {
  const { id } = useParams();
  const { editDriver, isEditing } = useEditDriver();

  const methods = useForm<Inputs>({
    defaultValues: {
      first_name: "",
      last_name: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    if (id) {
      editDriver(id, data);
    }

    console.log(data);
  };

  return (
    <>
      <ControlButtons />
      <MainBox>
        <Typography variant='h1' color='primary'>
          Edit Driver
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextBox>
            <FormLabel htmlFor='first_name'>
              First Name
              <TextField
                type='text'
                id='first_name'
                {...register("first_name")}
              />
            </FormLabel>
            <FormLabel htmlFor='last_name'>
              Last Name
              <TextField
                type='text'
                id='last_name'
                {...register("last_name")}
              />
            </FormLabel>
          </TextBox>
          <TextBox>
            <FormLabel htmlFor='phone_number'>
              Phone Number
              <TextField
                type='text'
                id='phone_number'
                {...register("phone_number")}
              />
            </FormLabel>
            <FormLabel htmlFor='email'>
              Email
              <TextField type='text' id='email' {...register("email")} />
            </FormLabel>
          </TextBox>
          <TextBox>
            <FormLabel htmlFor='img'>
              Image
              <TextField type='file' id='img' {...register("img")} />
            </FormLabel>
          </TextBox>
          <SubheaderBox>
            <Typography variant='h3' color='primary'>
              Driver License
            </Typography>
          </SubheaderBox>
          <TextBox>
            <FormLabel htmlFor='birth_date'>
              Date of Birth
              <Controller
                control={control}
                name='birth_date'
                render={({ field: { ref, ...field }, fieldState }) => (
                  <CustomDatePicker {...field} inputRef={ref} />
                )}
              />
            </FormLabel>
          </TextBox>
          <TextBox>
            <FormLabel htmlFor='issue_date'>
              Date of Issue
              <Controller
                control={control}
                name='issue_date'
                render={({ field: { ref, ...field }, fieldState }) => (
                  <CustomDatePicker {...field} inputRef={ref} />
                )}
              />
            </FormLabel>
            <FormLabel htmlFor='expiration_date'>
              Expiration Date
              <Controller
                control={control}
                name='expiration_date'
                render={({ field: { ref, ...field }, fieldState }) => (
                  <CustomDatePicker {...field} inputRef={ref} />
                )}
              />
            </FormLabel>
          </TextBox>
          <TextBox>
            <FormLabel htmlFor='authority'>
              The Issuing Authority
              <TextField
                type='text'
                id='authority'
                {...register("authority")}
              />
            </FormLabel>
          </TextBox>
          <TextBox>
            <FormLabel htmlFor='license_num'>
              License Number
              <TextField
                type='text'
                id='license_num'
                {...register("license_num")}
              />
            </FormLabel>
            <FormLabel htmlFor='category'>
              Category
              <TextField type='text' id='category' {...register("category")} />
            </FormLabel>
          </TextBox>
          <ButtonBox>
            <Button color='default'>
              <Typography variant='slim' color='primary'>
                {isEditing ? "Editing..." : "Edit"}
              </Typography>
            </Button>
          </ButtonBox>
        </form>
      </MainBox>
    </>
  );
};

export default EditDriver;
