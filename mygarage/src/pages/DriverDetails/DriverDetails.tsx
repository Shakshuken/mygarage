/* @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Typography from "../../UI/Typography/index";
import {
  DriverContainer,
  DriverImg,
  GridContainer,
  TableElement,
  TableGrid,
} from "./styles";
import { TextBox } from "../CarDetails/styles";
import Button from "../../UI/Button";
import ControlButtons from "../../layouts/components/ControlButtons/ControlButtons";
import useDriver from "../../hooks/useDriver";
import { Link, useParams } from "react-router-dom";
import fetchDriver from "../../hooks/useDriver";
import { useQuery } from "react-query";

const DriverDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery(["drivers", id], () =>
    fetchDriver(id)
  );

  if (isLoading) return <p>Loading..</p>;

  return (
    <div>
      <ControlButtons />

      <DriverContainer>
        <DriverImg src={"http://localhost:8000" + data.data.image_url} alt='' />

        <div>
          <Typography variant='h1' color='primary'>
            {data.data.first_name} {data.data.last_name}
          </Typography>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Status:
            </Typography>
            <Typography variant='p' color='success'>
              On the way
            </Typography>
          </TextBox>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Car:
            </Typography>
            <Typography variant='p' color='primary'>
              Audi Q5 2014
            </Typography>
          </TextBox>
          <Typography variant='h2' color='primary'>
            Driver License
          </Typography>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Date of birth:
            </Typography>
            <Typography variant='p' color='primary'>
              {data.data.birth_date}
            </Typography>
          </TextBox>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Date of issue:
            </Typography>
            <Typography variant='p' color='primary'>
              {data.data.issue_date}
            </Typography>
          </TextBox>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Expiration date:
            </Typography>
            <Typography variant='p' color='primary'>
              {data.data.expiration_date}
            </Typography>
          </TextBox>
          <TextBox>
            <Typography variant='p' color='secondary'>
              The issuing authority:
            </Typography>
            <Typography variant='p' color='primary'>
              {data.data.authority}
            </Typography>
          </TextBox>
          <TextBox>
            <Typography variant='p' color='secondary'>
              License number:
            </Typography>
            <Typography variant='p' color='primary'>
              {data.data.license_num}
            </Typography>
          </TextBox>
          <TextBox>
            <Typography variant='p' color='secondary'>
              Category:
            </Typography>
            <Typography variant='p' color='primary'>
              {data.data.category}
            </Typography>
          </TextBox>
        </div>
      </DriverContainer>
      <Link
        css={css`
          text-decoration: none;
        `}
        to={`/edit-driver/${id}`}
      >
        <Button color='default'>
          <Typography variant='slim' color='primary'>
            Edit Details
          </Typography>
        </Button>
      </Link>

      <DriverTable />
    </div>
  );
};

const TABLE_DATA = [
  {
    id: 1,
    car: "Audi Q5 2014",
    StartDate: "14:00 13.04.2023",
    EndDate: "14:00 13.04.2023",
  },
  {
    id: 2,
    car: "Audi Q5 2014",
    StartDate: "14:00 13.04.2023",
    EndDate: "14:00 13.04.2023",
  },
  {
    id: 3,
    car: "Audi Q5 2014",
    StartDate: "14:00 13.04.2023",
    EndDate: "14:00 13.04.2023",
  },
  {
    id: 4,
    car: "Audi Q5 2014",
    StartDate: "14:00 13.04.2023",
    EndDate: "14:00 13.04.2023",
  },
  {
    id: 5,
    car: "Audi Q5 2014",
    StartDate: "14:00 13.04.2023",
    EndDate: "14:00 13.04.2023",
  },
  {
    id: 6,
    car: "Audi Q5 2014",
    StartDate: "14:00 13.04.2023",
    EndDate: "14:00 13.04.2023",
  },
];

const DriverTable = () => {
  return (
    <GridContainer>
      <Typography variant='h1' color='primary'>
        Driver stats
      </Typography>
      <div>
        <TableGrid>
          <TableElement>
            <Typography variant='h2' color='secondary'>
              Trip ID
            </Typography>
          </TableElement>
          <TableElement>
            <Typography variant='h2' color='secondary'>
              Car
            </Typography>
          </TableElement>
          <TableElement>
            <Typography variant='h2' color='secondary'>
              Start Date
            </Typography>
          </TableElement>
          <TableElement>
            <Typography variant='h2' color='secondary'>
              End Date
            </Typography>
          </TableElement>
        </TableGrid>
        <TableGrid>
          {TABLE_DATA.map((data) => {
            return (
              <>
                <TableElement>
                  <Typography variant='p' color='primary'>
                    {data.id}
                  </Typography>
                </TableElement>

                <TableElement>
                  <Typography variant='p' color='primary'>
                    {data.car}
                  </Typography>
                </TableElement>

                <TableElement>
                  <Typography variant='p' color='primary'>
                    {data.StartDate}
                  </Typography>
                </TableElement>

                <TableElement>
                  <Typography variant='p' color='primary'>
                    {data.EndDate}
                  </Typography>
                </TableElement>
              </>
            );
          })}
        </TableGrid>
        ;
      </div>
    </GridContainer>
  );
};

export default DriverDetails;
