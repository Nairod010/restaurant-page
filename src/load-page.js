import Component from "./component";
import Meloons from "./meloon.png";

function LandingPage() {
    const header = new Component("h1", "id");
    const headerElement = header.generateElement("header", "Wellcome to Meloons!");
    const div = document.querySelector("#content");

    

    const headLine = new Component("p", "id")
    const headLineElement = headLine.generateElement(
        "headline",
        "Meloons stands out for its unique blend of delicious, hearty food, a fun and lively atmosphere, and friendly service. Our menu features a variety of mouth-watering dishes perfect for any appetite, and our vibrant, welcoming environment ensures every visit is a memorable experience. Whether you're here for the game, a meal with friends, or just to unwind, Meloons is the ultimate destination for great food and good times."
    )

    const logoImage = new Image()
    logoImage.src = Meloons
    logoImage.setAttribute("id", "logo")

    div.appendChild(headerElement);
    div.appendChild(logoImage);
    div.appendChild(headLineElement);
};

export {
    LandingPage
}
