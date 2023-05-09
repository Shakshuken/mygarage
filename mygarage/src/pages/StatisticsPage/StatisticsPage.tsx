import Typography from "../../UI/Typography";
import { ControlButtons } from "../../layouts/components";
import {
  DriversGridContainer,
  FlexContainer,
  FlexTable,
  GridContainer,
  TableElement,
} from "./styles";

const CARS_DATA = [
  { id: 1, car: "Mazda 3 2009", trips: 2 },
  { id: 2, car: "Mazda 3 2009", trips: 7 },
  { id: 3, car: "Mazda 3 2009", trips: 99 },
];

const DRIVERS_DATA = [
  { id: 1, driver: "Bill Clinton", trips: 999, favCar: "Chevrolet Aveo 2012" },
  { id: 2, driver: "Bill Clinton", trips: 999, favCar: "Chevrolet Aveo 2012" },
  { id: 3, driver: "Bill Clinton", trips: 999, favCar: "Chevrolet Aveo 2012" },
  { id: 4, driver: "Bill Clinton", trips: 999, favCar: "Chevrolet Aveo 2012" },
];

const StatisticsPage = () => {
  return (
    <div>
      <ControlButtons />
      <FlexContainer>
        <FlexTable>
          <Typography variant="h1" color="primary">
            Cars
          </Typography>
          <div>
            <GridContainer>
              <TableElement>
                <Typography variant="h2" color="secondary">
                  ID
                </Typography>
              </TableElement>
              <TableElement>
                <Typography variant="h2" color="secondary">
                  Car
                </Typography>
              </TableElement>
              <TableElement>
                <Typography variant="h2" color="secondary">
                  Trips
                </Typography>
              </TableElement>
            </GridContainer>
            <CarsTable />
          </div>
        </FlexTable>
        <FlexTable>
          <Typography variant="h1" color="primary">
            DriversTable
          </Typography>
          <div>
            <DriversGridContainer>
              <TableElement>
                <Typography variant="h2" color="secondary">
                  ID
                </Typography>
              </TableElement>
              <TableElement>
                <Typography variant="h2" color="secondary">
                  Driver
                </Typography>
              </TableElement>
              <TableElement>
                <Typography variant="h2" color="secondary">
                  Trips
                </Typography>
              </TableElement>
              <TableElement>
                <Typography variant="h2" color="secondary">
                  Favourite Car
                </Typography>
              </TableElement>
            </DriversGridContainer>
            <DriversTable />
          </div>
        </FlexTable>
      </FlexContainer>
    </div>
  );
};

const CarsTable = () => {
  return (
    <GridContainer>
      {CARS_DATA.map((data) => {
        return (
          <>
            <TableElement>
              <Typography variant="p" color="primary">
                {data.id}
              </Typography>
            </TableElement>

            <TableElement>
              <Typography variant="p" color="primary">
                {data.car}
              </Typography>
            </TableElement>

            <TableElement>
              <Typography variant="p" color="primary">
                {data.trips}
              </Typography>
            </TableElement>
          </>
        );
      })}
    </GridContainer>
  );
};

const DriversTable = () => {
  return (
    <DriversGridContainer>
      {DRIVERS_DATA.map((data) => {
        return (
          <>
            <TableElement>
              <Typography variant="p" color="primary">
                {data.id}
              </Typography>
            </TableElement>

            <TableElement>
              <Typography variant="p" color="primary">
                {data.driver}
              </Typography>
            </TableElement>

            <TableElement>
              <Typography variant="p" color="primary">
                {data.trips}
              </Typography>
            </TableElement>

            <TableElement>
              <Typography variant="p" color="primary">
                {data.favCar}
              </Typography>
            </TableElement>
          </>
        );
      })}
    </DriversGridContainer>
  );
};

export default StatisticsPage;
