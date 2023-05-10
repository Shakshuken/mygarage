import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import { ButtonBox, MainBox, SubheaderBox, TextBox } from "./styles";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";

type Inputs = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  birth_date: string;
  issue_date: string;
  expiration_date: string;
  authority: string;
  license_num: string;
  category: string;
};

const CreateDriver = () => {
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
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log("wtf");
  };

  return (
    <>
      <ControlButtons />
      <MainBox>
        <Typography variant='h1' color='primary'>
          Create Driver
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
              <TextField type='file' id='img' />
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
              <TextField
                type='text'
                id='birth_date'
                {...register("birth_date")}
              />
            </FormLabel>
          </TextBox>
          <TextBox>
            <FormLabel htmlFor='issue_date'>
              Date of Issue
              <TextField
                type='text'
                id='issue_date'
                {...register("issue_date")}
              />
            </FormLabel>
            <FormLabel htmlFor='expiration_date'>
              Expiration Date
              <TextField
                type='text'
                id='expiration_date'
                {...register("expiration_date")}
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
                Create
              </Typography>
            </Button>
          </ButtonBox>
        </form>
      </MainBox>
    </>
  );
};

export default CreateDriver;
