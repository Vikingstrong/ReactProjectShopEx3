import AttractiveProducts from "./components/AttractiveProducts";
import CostumeSales from "./components/CostumeSales";
import FirstProductsContainer from "./components/FirstProductsContainer";
import Hero from "./components/Hero";
import InfoCompany from "./components/InfoCompany";
import NewProducts from "./components/NewProductes";
import PopularCategories from "./components/PopularCategories";
import PopularProducts from "./components/PopularProducts";

export default function Home() {

  return (
    <main>
      <Hero />
      <FirstProductsContainer/>
      <PopularCategories/>
      <NewProducts/>
      <CostumeSales/>
      <AttractiveProducts/>
      <PopularProducts/>
      <InfoCompany/>
    </main>
  );
}