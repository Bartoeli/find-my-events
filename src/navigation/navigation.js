import { Route, Routes } from "react-router-dom";
import { Events } from "../pages/Events/Events.jsx";

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Events />} />
      {/* <Route path="/new" element={<NewEvent />}></Route>
      <Route path="*" element={<Page404 />}></Route> */}
    </Routes>
  );
};
