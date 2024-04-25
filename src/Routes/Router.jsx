import AdminOrders from "@/Dashboard/all-orders";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage";

export default function Router() {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<AdminOrders />} path="/admin/orders" />
    </Routes>
  );
}
