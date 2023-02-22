import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "@/pages/HomePage";
import DetailPage from "@/pages/DetailPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="country/:name" element={<DetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
