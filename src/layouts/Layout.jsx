import { Outlet } from "react-router";
import Header from "../components/widgets/Header";
import HeaderForMobile from "../components/widgets/HeaderForMobile"
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import Footer from "../components/widgets/Footer"
import BuyToastCard from "../components/ui/Card/BuyToastCard";

export default function Layout(){

    return (
        <>
            <Header />
            <HeaderForMobile />
            <Suspense fallback={
                <div className="pt-70 pb-30 lg:pb-35 lg:pt-100 w-full flex justify-center items-center">
                    <CircularProgress/>
                </div>}>
                <Outlet />
            </Suspense>
            <Footer/>
            <BuyToastCard/>
        </>
    )
}