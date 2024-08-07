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

        const description = document.createElement("p")
        description.classList.add("item-description")

        const price = document.createElement("p")
        price.classList.add(`item-price`)
        
        if(i === 1){
            header.textContent = `Meloons Mega Wings`
            description.textContent = `A generous portion of our signature jumbo chicken wings, perfectly crispy and tossed in your choice of sauce, from classic buffalo to honey barbecue. Served with celery sticks and blue cheese dressing.`
            price.textContent = `Price: 15.99$`
        }else if(i === 2){
            header.textContent = "Beach Babe Burgers" 
            description.textContent = "A half-pound beef patty grilled to perfection, topped with crispy bacon, melted cheddar cheese, lettuce, tomato, and our special Meloons sauce, all sandwiched between a toasted brioche bun. Served with a side of seasoned fries."
            price.textContent = "Price: 14.49$"
        }else if(i === 3){
            header.textContent = "Sizzlin' Shrimp Skewers" 
            description.textContent = "Marinated shrimp skewers grilled to a succulent finish, served with a side of garlic butter dipping sauce and a fresh garden salad."
            price.textContent = "Price: 16.99$"
        }else if(i === 4){
            header.textContent = "Sunset Quesadillas" 
            description.textContent = "Large flour tortillas filled with a blend of cheeses, grilled chicken or beef, sautéed peppers, and onions. Served with sour cream, guacamole, and salsa on the side."
            price.textContent = "Price: 12.99$"
        }else if(i === 5){
            header.textContent = "Seaside Caesar Salad" 
            description.textContent = "Crisp romaine lettuce, Parmesan cheese, and garlic croutons tossed in our creamy Caesar dressing. Add grilled chicken, shrimp, or salmon for an additional charge"
            price.textContent = "Price: 10.99$"
        }else if(i === 6){
            header.textContent = "Tropical Tacos" 
            description.textContent = "Soft corn tortillas filled with your choice of grilled fish, shrimp, or chicken, topped with a zesty slaw, avocado slices, and a drizzle of cilantro-lime sauce. Served with a side of black beans and rice."
            price.textContent = "Price: 13.99$"
        }else if(i === 7){
            header.textContent = "Island Nachos" 
            description.textContent = "A heaping plate of crispy tortilla chips loaded with melted cheese, jalapeños, black olives, tomatoes, green onions, and your choice of seasoned beef or chicken. Served with sour cream, guacamole, and salsa."
            price.textContent = "Price: 11.99$"
        }else if(i === 8){
            header.textContent = "Meloons Loaded Fries" 
            description.textContent = "A mountain of crispy fries smothered in melted cheese, bacon bits, green onions, and a drizzle of ranch dressing. Perfect for sharing!"
            price.textContent = "Price: 9.99$"
        }else if(i === 9){
            header.textContent = "Pineapple Paradise Cheesecake" 
            description.textContent = "A creamy New York-style cheesecake topped with a sweet pineapple glaze and whipped cream. A tropical twist on a classic dessert."
            price.textContent = "Price: 7.49$"
        }

        items.appendChild(header)
        items.appendChild(description)
        items.appendChild(price)

        div.appendChild(items)
    }
}

export {
    menuPage
}
