import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { FC, useState } from "react";
import { ControlButtons } from "../../layouts/components";
import {
  ButtonBox,
  DriverCardBox,
  DriverContentBox,
  DriverGrid,
  DriverImg,
} from "./styles";

const DriverCard = () => {
  return (
    <DriverCardBox>
      <DriverImg src='/icons/v3_0882882.jpg' alt='driver' />
      <DriverContentBox>
        <Typography variant='slim' color='primary'>
          Name: Marcus Marcusson
        </Typography>
        <Typography variant='slim' color='primary'>
          Phone: 2450452452
        </Typography>
        <Typography variant='slim' color='primary'>
          Email: marcus.marcusson@gmail.com
        </Typography>
        <ButtonBox>
          <Button color='default'>
            <Typography variant='slim' color='primary'>
              View Details
            </Typography>
          </Button>
          <Button color='danger'>
            <Typography variant='slim' color='primary'>
              Delete
            </Typography>
          </Button>
        </ButtonBox>
      </DriverContentBox>
    </DriverCardBox>
  );
};

const Drivers = () => {
  return (
    <>
      <ControlButtons />
      <DriverGrid>
        <DriverCard />
        <DriverCard />
        <DriverCard />
        <DriverCard />
      </DriverGrid>
    </>
  );
};

export default Drivers;
