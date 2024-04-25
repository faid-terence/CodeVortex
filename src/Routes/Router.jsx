import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
    </Routes>
  );
}
