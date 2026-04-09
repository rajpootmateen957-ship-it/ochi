import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Services from "./service/service";
import Aboutsection from "../src/green-section/page";
import FeaturedProjects from "../src/box/page";
import ClientsReviews from "../src/reveiw/page";
import Reviews from "../src/read/page";
import BadgeCards from "../src/ochi/page";
import ReadyToStart from "../src/eye/page";
import  Footer from "../src/footer/footer";
import EyeSection from "./green/page";
import "./index.css";
import { i } from "framer-motion/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Services />
    <Aboutsection />
    <EyeSection/>
     
    <FeaturedProjects/>
    <ClientsReviews/>
    <Reviews/>
    
    <BadgeCards/>
    <ReadyToStart/>
    <Footer/>
  </StrictMode>
);