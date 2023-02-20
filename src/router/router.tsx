import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "@/layout/Layout";
import HomePage from "@/pages/HomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);
