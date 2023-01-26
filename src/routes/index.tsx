import { Routes, Route } from "react-router-dom";
import { HomePage, ReservationsPage } from "src/pages";
import AboutPage from '../pages/AboutPage';
import Menu from '../pages/Menu';
import Login from '../pages/Login';

const RootRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/order-online" element={<Menu />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RootRoute;
