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

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/drivers' element={<Drivers />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/stats' element={<StatisticsPage />} />
        <Route path='/create-car' element={<CreateCar />} />
        <Route path='/create-driver' element={<CreateDriver />} />
        <Route path='/cars/:id' element={<CarDetails />} />
        <Route path='/drivers/:id' element={<DriverDetails />} />
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </AppLayout>
  );
}

export default App;
