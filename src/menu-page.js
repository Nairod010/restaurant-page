function menuPage() {

    const div = document.querySelector("#content");
    div.textContent = ""

    const itemsNumber = 9
    for (let i = 1; i <= itemsNumber; i++) {
        const items = document.createElement("div")
        items.classList.add(`menu-item`)
        items.classList.add(`item-${i}`)

        const header = document.createElement("h3")
        header.classList.add("item-header")
        header.textContent = `Item ${i}`

        const description = document.createElement("p")
        description.classList.add("item-description")
        description.textContent = `Item ${i} description `

        const price = document.createElement("p")
        price.classList.add(`item-price`)
        price.textContent = `Price: 0.00$`

        items.appendChild(header)
        items.appendChild(description)
        items.appendChild(price)

        div.appendChild(items)
    }
}

export {
    menuPage
}
