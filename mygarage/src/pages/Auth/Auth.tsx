/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import { GlassBox, LoginBtn, LoginLabel } from "./styles";

type Inputs = { username: string; password: string };

const Auth = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      username: "",
      password: "",
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
    <GlassBox>
      <LoginLabel>Login</LoginLabel>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor='username'>
          Username
          <TextField type='text' id='username' {...register("username")} />
        </FormLabel>
        <FormLabel htmlFor='password'>
          Password
          <TextField type='text' id='password' {...register("password")} />
        </FormLabel>
        <LoginBtn type='submit'>Login</LoginBtn>
      </form>
    </GlassBox>
  );
};

export default Auth;
