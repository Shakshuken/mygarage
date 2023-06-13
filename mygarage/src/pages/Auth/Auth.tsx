/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import { GlassBox, LoginBtn, LoginLabel } from "./styles";
import useLogin from "../../hooks/useLogin";

type Inputs = { email: string; password: string };

const Auth = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    login(data);
  };

  return (
    <GlassBox>
      <LoginLabel>Login</LoginLabel>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor='email'>
          Username
          <TextField type='text' id='email' {...register("email")} />
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
