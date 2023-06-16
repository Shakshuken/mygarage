import React from "react";
import { css } from "@emotion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormLabel from "../../UI/FormLabel";
import TextField from "../../UI/TextField";
import { GlassBox, LoginBtn, LoginLabel } from "./styles";
import useLogin from "../../hooks/useLogin";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import { redirect, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../UI/LoadingSpinner";

type Inputs = {
  email: string;
  password: string;
};

const Auth = () => {
  const methods = useForm<Inputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const { login, isLoading, error } = useLogin();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const isAuthenticated: boolean = await login(data);
    if (isAuthenticated) {
      dispatch(loginSuccess());
      navigate("/");
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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
      )}
    </>
  );
};

export default Auth;
