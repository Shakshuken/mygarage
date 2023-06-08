/* @jsxImportSource @emotion/react */

import { useQuery } from "react-query";

import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { FC, useEffect } from "react";
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
import fetchDrivers from "../../hooks/useGetDrivers";
import useDeleteDriver from "../../hooks/useDeleteDriver";
import { useDispatch, useSelector } from "react-redux";
import { setDrivers, setError } from "../../store/driversSlice";

type DriverCardProps = {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  image_url: string;
  onDelete?: () => void;
};

const DriverCard: FC<DriverCardProps> = ({
  id,
  first_name,
  last_name,
  phone_number,
  email,
  image_url,
  onDelete,
}) => {
  return (
    <DriverCardBox>
      <DriverImg src={"http://localhost:8000" + image_url} alt='driver' />
      <DriverContentBox>
        <Typography variant='slim' color='primary'>
          Name: {first_name} {last_name}
        </Typography>
        <Typography variant='slim' color='primary'>
          Phone: {phone_number}
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
          <Button color='danger' onClick={onDelete}>
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
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state: any) => state.drivers);

  const { isLoading: queryIsLoading } = useQuery("drivers", fetchDrivers, {
    onSuccess: (data) => {
      dispatch(setDrivers(data));
    },
    onError: (error) => {
      dispatch(setError(error));
    },
  });

  useEffect(() => {
    if (!queryIsLoading) {
      dispatch(setDrivers(data));
    }
  }, [dispatch, data, queryIsLoading]);

  const { deleteDriver } = useDeleteDriver();

  if (isLoading) return <p>Loading..</p>;

  return (
    <>
      <ControlButtons />
      <DriverGrid>
        {Array.isArray(data) &&
          data.map((driver: DriverCardProps) => (
            <DriverCard
              key={driver.id}
              id={driver.id}
              first_name={driver.first_name}
              last_name={driver.last_name}
              phone_number={driver.phone_number}
              email={driver.email}
              image_url={driver.image_url}
              onDelete={() => deleteDriver(driver.id)}
            />
          ))}
      </DriverGrid>
    </>
  );
};

export default Drivers;
