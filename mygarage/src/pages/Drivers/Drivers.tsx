/* @jsxImportSource @emotion/react */

import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { FC, useState } from "react";
import {
  ButtonBox,
  DriverCardBox,
  DriverContentBox,
  DriverGrid,
  DriverImg,
} from "./styles";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";

const DRIVER_DATA = [
  {
    id: 1,
    name: "Marcus Marcusson",
    phone: "2450452452",
    email: "marcus.marcusson@gmail.com",
  },
  {
    id: 2,
    name: "Zaza",
    phone: "3413515135",
    email: "za.za@gmail.com",
  },
  {
    id: 3,
    name: "The Rock",
    phone: "133",
    email: "rock@gmail.com",
  },
];

type DriverCardProps = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

const DriverCard: FC<DriverCardProps> = ({ id, name, phone, email }) => {
  return (
    <DriverCardBox>
      <DriverImg src='/icons/v3_0882882.jpg' alt='driver' />
      <DriverContentBox>
        <Typography variant='slim' color='primary'>
          Name: {name}
        </Typography>
        <Typography variant='slim' color='primary'>
          Phone: {phone}
        </Typography>
        <Typography variant='slim' color='primary'>
          Email: {email}
        </Typography>
        <ButtonBox>
          <Link
            css={css`
              color: #f5f5f5;
              text-decoration: none;
            `}
            to={`/drivers/${id}`}
          >
            <Button color='default'>
              <Typography variant='slim' color='primary'>
                View Details
              </Typography>
            </Button>
          </Link>
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
        {DRIVER_DATA.map((driver: DriverCardProps) => (
          <DriverCard
            id={driver.id}
            name={driver.name}
            phone={driver.phone}
            email={driver.email}
          />
        ))}
      </DriverGrid>
    </>
  );
};

export default Drivers;
