import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "@/pages/HomePage";
import Detail from "@/pages/Detail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="country/:name" element={<Detail />} />
    </Route>
  )
);
