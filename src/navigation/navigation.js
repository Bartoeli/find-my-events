import { Route, Routes } from "react-router-dom";
import Events from "../pages/Events/Events";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Events />}></Route>
      {/* <Route path="*" element={<Page404 />}></Route> */}
    </Routes>
  );
};
