/* @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { FC, useState } from "react";
import {
  ButtonBox,
  CarImg,
  DescriptionBox,
  MainBox,
  MainTextBox,
  TextBox,
  TextDivider,
} from "./styles";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";

const CarDetails = () => {
  return (
    <>
      <ControlButtons />
      <MainBox>
        <CarImg src='/icons/2014_audi_q5_angularfront.jpg' alt='car' />
        <MainTextBox>
          <Typography variant='h1' color='primary'>
            Audi Q5 2014
          </Typography>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Status:
            </Typography>
            <TextDivider>
              <Typography variant='p' color='success'>
                On the way
              </Typography>
            </TextDivider>
          </TextBox>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Driver:
            </Typography>
            <TextDivider>
              <Typography variant='p' color='primary'>
                Marcus Marcusson
              </Typography>
            </TextDivider>
          </TextBox>
          <DescriptionBox>
            <Typography variant='p' color='secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tincidunt velit dui, ut tincidunt tellus sagittis nec. Vivamus in
              consectetur nisi. Nullam venenatis arcu pellentesque urna volutpat
              viverra. Aliquam quis ex orci. Donec vitae odio pellentesque,
              aliquet nibh ut, egestas justo.
            </Typography>
          </DescriptionBox>
          <ButtonBox>
            <Button color='default'>
              <Typography variant='slim' color='primary'>
                Edit Details
              </Typography>
            </Button>
          </ButtonBox>
        </MainTextBox>
      </MainBox>
    </>
  );
};

export default CarDetails;
