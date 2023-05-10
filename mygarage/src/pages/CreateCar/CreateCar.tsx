/* @jsxImportSource @emotion/react */

import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import Textarea from "../../UI/Textarea";
import { ButtonBox, MainBox } from "./styles";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";

type Inputs = { name: string; description: string };

const CreateCar = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      name: "",
      description: "",
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
          Create Car
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor='name'>
            Name
            <TextField type='text' id='username' {...register("name")} />
          </FormLabel>
          <FormLabel htmlFor='description'>
            Description
            <Textarea
              minRows={3}
              maxRows={8}
              id='description'
              {...register("description")}
            />
          </FormLabel>
          <FormLabel htmlFor='img'>
            Image
            <TextField type='file' id='img' />
          </FormLabel>
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

export default CreateCar;
