/* @jsxImportSource @emotion/react */

import Typography from "../../UI/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import Textarea from "../../UI/Textarea";
import { Button, ButtonBox, MainBox } from "./styles";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";
import { useCreateCar } from "../../hooks/useCreateCar";

type Inputs = { name: string; description: string; img: FileList };

const CreateCar = () => {
  const createUser = useCreateCar();

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

    createUser.mutate(data);
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
            <TextField type='file' id='img' {...register("img")} />
          </FormLabel>
          <ButtonBox>
            <Button type='submit'>
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
