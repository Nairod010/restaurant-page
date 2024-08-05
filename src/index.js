import { landingPage } from "./load-page";
import { menuPage } from "./menu-page";
import "./style.css"

landingPage();

const menuButton = document.getElementById("menu")
const homeButton = document.getElementById("home")

homeButton.addEventListener("click", landingPage)
menuButton.addEventListener("click", menuPage)

