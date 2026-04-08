import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Services from "./service/service";
import Aboutsection from "../src/green-section/page";
import FeaturedProjects from "../src/box/page";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Services />
    <Aboutsection />
    <FeaturedProjects/>
  </StrictMode>
);