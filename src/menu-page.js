function menuPage(){

    const div = document.querySelector("#content");
    div.textContent = ""

    const itemsNumber = 9
    for(let i = 1; i < itemsNumber; i++){
        const items = document.createElement("div")
        items.classList.add("menu-item")
        div.appendChild(items)
    }    


}

export {
    menuPage
}
