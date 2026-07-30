import { createBrowserRouter, RouterProvider } from "react-router";
import Header from "./components/widgets/Header";
import Layout from "./layouts/Layout";
import { lazy, Suspense, useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { CartProvider } from "./context/context";

const HomePg = lazy(() => import("./pages/Home/Home"))
const SalesPg = lazy(() => import("./pages/Sales/Sales"))
const CartPg = lazy(() => import("./pages/Cart/Cart"))
const PlacingPg = lazy(() => import("./pages/PlacingOrder/PlacingOrder"))
const OplataPg = lazy(() => import("./pages/OplataZakaza/OplataZakaza"))
const BlogPg = lazy(() => import("./pages/Blog/Blog"))
const InfoBlogPg = lazy(() => import("./pages/Blog/InfoForBlog/InfoBlog"))
const ProfilePg = lazy(() => import("./pages/Profile/Profile"))
const CatalogPg = lazy(() => import("./pages/Catalog/Catalog"))
const ContactPg = lazy(() => import("./pages/Contact/Contact"))
const DostavkaPg = lazy(() => import("./pages/Dostavka/Dostavka"))


let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: (
          <HomePg/>
        )
      },
      {
        path: "sales",
        element: (
          <SalesPg/>
        )
      },
      {
        path: "cart",
        element: (
          <CartPg/>
        )
      },
      {
        path: "placing",
        element: (
          <PlacingPg/>
        )
      },
      {
        path: "placing/oplata",
        element: (
          <OplataPg/>
        )
      },
      {
        path: "blog",
        element: (
          <BlogPg/>
        )
      },
      {
        path: "blog/infoBlog",
        element: (
          <InfoBlogPg/>
        )
      },
      {
        path: "profile",
        element: (
          <ProfilePg/>
        )
      },
      {
        path: "catalog",
        element: (
          <CatalogPg/>
        )
      },
      {
        path: "contact",
        element: (
          <ContactPg/>
        )
      },
      {
        path: "dostavka",
        element: (
          <DostavkaPg/>
        )
      }
    ]
  }
])

export default function App(){

  return (
    <>
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </>
  )
}