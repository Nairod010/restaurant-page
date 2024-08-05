export default class Component{
    constructor(type,attribute){
        this.type = type,
        this.attribute = attribute
    }

    generateElement(atrName, content){
        const element = document.createElement(this.type)
        element.setAttribute(this.attribute, atrName)
        element.textContent = content

        return element
    }
}
