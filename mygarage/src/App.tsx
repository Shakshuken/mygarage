import { Navigate, Route, Routes } from "react-router-dom";
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
import { PropsWithChildren, ReactNode } from "react";

const queryClient = new QueryClient();

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!localStorage.sessionId) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route
              path='/cars'
              element={
                <ProtectedRoute>
                  <Cars />
                </ProtectedRoute>
              }
            />
            <Route
              path='/drivers'
              element={
                <ProtectedRoute>
                  <Drivers />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<Auth />} />
            <Route
              path='/stats'
              element={
                <ProtectedRoute>
                  <StatisticsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/create-car'
              element={
                <ProtectedRoute>
                  <CreateCar />
                </ProtectedRoute>
              }
            />
            <Route
              path='/create-driver'
              element={
                <ProtectedRoute>
                  <CreateDriver />
                </ProtectedRoute>
              }
            />
            <Route
              path='/edit-car/:id'
              element={
                <ProtectedRoute>
                  <EditCar />
                </ProtectedRoute>
              }
            />
            <Route
              path='/edit-driver/:id'
              element={
                <ProtectedRoute>
                  <EditDriver />
                </ProtectedRoute>
              }
            />
            <Route
              path='/cars/:id'
              element={
                <ProtectedRoute>
                  <CarDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path='/drivers/:id'
              element={
                <ProtectedRoute>
                  <DriverDetails />
                </ProtectedRoute>
              }
            />
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </AppLayout>
      </QueryClientProvider>
    </LocalizationProvider>
  );
}

export default App;
