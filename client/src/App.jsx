import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage";
import AppointmentPage from "./pages/AppointmentPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
    </>
  );
}

export default App;
