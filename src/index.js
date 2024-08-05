import Component from "./load-page";

const header = new Component("h1","id")

const headerElement = header.generateElement("header", "Wellcome to Meloons!")

const div = document.querySelector("#content")

div.appendChild(headerElement)
