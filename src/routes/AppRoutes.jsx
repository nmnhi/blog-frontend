import { Route, Routes } from "react-router-dom";
import { BlogDetailPage, HomePage, LoginPage, RegisterPage } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
