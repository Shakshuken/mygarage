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

const DriverDetails = () => {
  return (
    <div>
      <ControlButtons />

      <DriverContainer>
        <DriverImg src='/icons/v3_0882882.jpg' alt='' />

        <div>
          <Typography variant='h1' color='primary'>
            Marcus Marcusson
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
              01.01.1987
            </Typography>
          </TextBox>

          <TextBox>
            <Typography variant='p' color='secondary'>
              Date of issue:
            </Typography>
            <Typography variant='p' color='primary'>
              01.01.2010
            </Typography>
          </TextBox>

          <TextBox>
            <Typography variant='p' color='secondary'>
              Expiration date:
            </Typography>
            <Typography variant='p' color='primary'>
              01.01.2030
            </Typography>
          </TextBox>

          <TextBox>
            <Typography variant='p' color='secondary'>
              The issuing authority:
            </Typography>
            <Typography variant='p' color='primary'>
              Centre of SAI
            </Typography>
          </TextBox>

          <TextBox>
            <Typography variant='p' color='secondary'>
              License number:
            </Typography>
            <Typography variant='p' color='primary'>
              BAH 340143
            </Typography>
          </TextBox>

          <TextBox>
            <Typography variant='p' color='secondary'>
              Category:
            </Typography>
            <Typography variant='p' color='primary'>
              B
            </Typography>
          </TextBox>
        </div>
      </DriverContainer>
      <Button color='default'>
        <Typography variant='slim' color='primary'>
          Edit Details
        </Typography>
      </Button>

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

{
  /* <TableGrid>
    {TABLE_DATA.map((data)=>{
      data.
    })}
  </TableGrid>; */
}
