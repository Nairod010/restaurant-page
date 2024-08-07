import { landingPage } from "./load-page";
import { menuPage } from "./menu-page";
import { aboutPage } from "./about-page";
import "./style.css"

landingPage();

const menuButton = document.getElementById("menu");
const homeButton = document.getElementById("home");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", landingPage);
menuButton.addEventListener("click", menuPage);
aboutButton.addEventListener("click", aboutPage);
