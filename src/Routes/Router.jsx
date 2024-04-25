import AdminOrders from "@/Dashboard/all-orders";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/LoginPage";
import AdminEvents from "@/Dashboard/all-events";
import PaymentDashboards from "@/Dashboard/payments-dashboard";
import WelcomePage from "../pages/WelcomePage";

export default function Router() {
  return (
    <Routes>
      <Route element={<WelcomePage />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<AdminOrders />} path="/admin/orders" />
      <Route element={<AdminEvents />} path="/admin/events" />
      <Route element={<PaymentDashboards />} path="/admin/payments" />
    </Routes>
  );
}
