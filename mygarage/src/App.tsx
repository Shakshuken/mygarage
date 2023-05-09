import AppLayout from "./layouts/AppLayout";
import Auth from "./pages/Auth/Auth";
import CarDetails from "./pages/CarDetails/CarDetails";
import Cars from "./pages/Cars/Cars";
import CreateCar from "./pages/CreateCar/CreateCar";
import CreateDriver from "./pages/CreateDriver/CreateDriver";
import DriverDetails from "./pages/DriverDetails/DriverDetails";
import Drivers from "./pages/Drivers/Drivers";
import Main from "./pages/Main/Main";

function App() {
  return (
    <AppLayout>
      <CreateDriver />
    </AppLayout>
  );
}

export default App;
