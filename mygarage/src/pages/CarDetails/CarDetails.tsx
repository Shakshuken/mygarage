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
import { useQuery } from "react-query";
import fetchCar from "../../hooks/useCar";
import { Link, useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(["drivers", id], () =>
    fetchCar(id)
  );

  if (isLoading) return <p>Loading..</p>;

  return (
    <>
      <ControlButtons />
      <MainBox>
        <CarImg src={"http://localhost:8000" + data.data.image_url} alt='car' />
        <MainTextBox>
          <Typography variant='h1' color='primary'>
            {data.data.name}
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
              {data.data.description}
            </Typography>
          </DescriptionBox>
          <ButtonBox>
            <Link
              css={css`
                text-decoration: none;
              `}
              to={`/edit-car/${id}`}
            >
              <Button color='default'>
                <Typography variant='slim' color='primary'>
                  Edit Details
                </Typography>
              </Button>
            </Link>
          </ButtonBox>
        </MainTextBox>
      </MainBox>
    </>
  );
};

export default CarDetails;
