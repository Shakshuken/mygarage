import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Auth from "./pages/Auth/Auth";
import CarDetails from "./pages/CarDetails/CarDetails";
import Cars from "./pages/Cars/Cars";
import CreateCar from "./pages/CreateCar/CreateCar";
import CreateDriver from "./pages/CreateDriver/CreateDriver";
import DriverDetails from "./pages/DriverDetails/DriverDetails";
import Drivers from "./pages/Drivers/Drivers";
import Main from "./pages/Main/Main";
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EditCar from "./pages/EditCar/EditCar";
import EditDriver from "./pages/EditDriver/EditDriver";

const queryClient = new QueryClient();

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/cars' element={<Cars />} />
            <Route path='/drivers' element={<Drivers />} />
            <Route path='/login' element={<Auth />} />
            <Route path='/stats' element={<StatisticsPage />} />
            <Route path='/create-car' element={<CreateCar />} />
            <Route path='/create-driver' element={<CreateDriver />} />
            <Route path='/edit-car/:id' element={<EditCar />} />
            <Route path='/edit-driver/:id' element={<EditDriver />} />
            <Route path='/cars/:id' element={<CarDetails />} />
            <Route path='/drivers/:id' element={<DriverDetails />} />
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </AppLayout>
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
