/* @jsxImportSource @emotion/react */

import Typography from "../../UI/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import Textarea from "../../UI/Textarea";
import { Button, ButtonBox, MainBox } from "./styles";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";
import { useEditCar } from "../../hooks/useEditCar";
import { useParams } from "react-router-dom";

type Inputs = { id: string; name: string; description: string; img: FileList };

const EditCar = () => {
  const { id } = useParams();
  const { editCar, isEditing } = useEditCar();

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
    if (id) {
      editCar(id, data);
    }

    console.log(data);
  };

  return (
    <>
      <ControlButtons />
      <MainBox>
        <Typography variant='h1' color='primary'>
          Edit Car
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor='name'>
            Name
            <TextField type='text' id='name' {...register("name")} />
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
            <Button type='submit' disabled={isEditing}>
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

export default EditCar;
