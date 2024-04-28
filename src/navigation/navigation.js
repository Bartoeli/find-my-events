import { Route, Routes } from "react-router-dom";
import Events from "../pages/Events/Events";
import Error from "../pages/Error/Error";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Events />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
};
