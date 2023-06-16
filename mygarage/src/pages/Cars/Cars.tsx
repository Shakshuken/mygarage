/* @jsxImportSource @emotion/react */

import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { FC, useEffect, useState } from "react";
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
import fetchCars from "../../hooks/useGetCars";
import useDeleteCar from "../../hooks/useDeleteCar";
import { setCars, setError } from "../../store/carsSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../UI/LoadingSpinner";

type CarCardProps = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  onDelete?: () => void;
};

const CarCard: FC<CarCardProps> = ({ id, name, image_url, onDelete }) => {
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
          <Button color='danger' onClick={onDelete}>
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
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state: any) => state.cars);

  const { isLoading: queryIsLoading } = useQuery("cars", fetchCars, {
    onSuccess: (data) => {
      dispatch(setCars(data));
    },
    onError: (error) => {
      dispatch(setError(error));
    },
  });

  useEffect(() => {
    if (!queryIsLoading) {
      dispatch(setCars(data));
    }
  }, [dispatch, data, queryIsLoading]);

  const { deleteCar } = useDeleteCar();

  return (
    <>
      <ControlButtons />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <CarGrid>
          {data.map((car: CarCardProps) => (
            <CarCard
              id={car.id}
              name={car.name}
              description={car.description}
              image_url={car.image_url}
              onDelete={() => deleteCar(car.id)}
            />
          ))}
        </CarGrid>
      )}
    </>
  );
};

export default Cars;
