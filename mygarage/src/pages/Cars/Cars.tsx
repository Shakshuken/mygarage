/* @jsxImportSource @emotion/react */

import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { FC, useState } from "react";
import {
  ButtonBox,
  CarCardBox,
  CarGrid,
  CarImg,
  CardContentBox,
} from "./styles";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import fetchCars from "../../hooks/useGetCar";

type CarCardProps = {
  id: number;
  name: string;
  description: string;
  image_url: string;
};

const CarCard: FC<CarCardProps> = ({ id, name, image_url }) => {
  console.log(image_url);
  return (
    <CarCardBox>
      <CarImg src={"http://localhost:8000" + image_url} alt='car' />
      <CardContentBox>
        <Typography variant='p' color='primary'>
          {name}
        </Typography>
        <ButtonBox>
          <Link
            css={css`
              color: #f5f5f5;
              text-decoration: none;
            `}
            to={`/cars/${id}`}
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
      </CardContentBox>
    </CarCardBox>
  );
};

const Cars = () => {
  const { data, isLoading, error } = useQuery("cars", fetchCars);
  console.log(data);
  if (isLoading) return <p>Loading..</p>;

  return (
    <>
      <ControlButtons />
      <CarGrid>
        {data.map((car: CarCardProps) => (
          <CarCard
            id={car.id}
            name={car.name}
            description={car.description}
            image_url={car.image_url}
          />
        ))}
      </CarGrid>
    </>
  );
};

export default Cars;
