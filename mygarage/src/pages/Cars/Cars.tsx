/* @jsxImportSource @emotion/react */

import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import { FC, useState } from "react";
import { ControlButtons } from "../../layouts/components";
import {
  ButtonBox,
  CarCardBox,
  CarGrid,
  CarImg,
  CardContentBox,
} from "./styles";

type CarCardProps = {
  id: number;
  name: string;
  description: string;
};

const CAR_DATA = [
  {
    id: 1,
    name: "Audi Q5 2014",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt velit dui, ut tincidunt tellus sagittis nec. Vivamus in consectetur nisi. Nullam venenatis arcu pellentesque urna volutpat viverra. Aliquam quis ex orci. Donec vitae odio pellentesque, aliquet nibh ut, egestas justo.",
  },
  {
    id: 2,
    name: "Chevrolet Aveo 2012",
    description: "description",
  },
  {
    id: 3,
    name: "Dee Pnigger",
    description: "Description bruh",
  },
];

const CarCard: FC<CarCardProps> = ({ name }) => {
  return (
    <CarCardBox>
      <CarImg src='/icons/2014_audi_q5_angularfront.jpg' alt='car' />
      <CardContentBox>
        <Typography variant='p' color='primary'>
          {name}
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
      </CardContentBox>
    </CarCardBox>
  );
};

const Cars = () => {
  const [data, setData] = useState(CAR_DATA);

  return (
    <>
      <ControlButtons />
      <CarGrid>
        {data.map((car: CarCardProps) => (
          <CarCard id={car.id} name={car.name} description={car.description} />
        ))}
      </CarGrid>
    </>
  );
};

export default Cars;
