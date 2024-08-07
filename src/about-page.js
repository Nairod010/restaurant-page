function aboutPage(){
    const div = document.querySelector("#content");    
    
    const aboutHeader = document.createElement("h2")
    const aboutUs = document.createElement("p")
    const aboutContact = document.createElement("p")

    aboutUs.classList.add("about-text")
    aboutUs.textContent = "At Meloons, it's not just about the food – it's about the experience. Our friendly staff, beach-themed décor, and upbeat atmosphere make Meloons the perfect spot for any occasion. Whether you're celebrating a special event, enjoying a casual meal with friends, or just looking for a place to kick back and relax, you'll feel right at home at Meloons."
    
    aboutHeader.classList.add("about-header")
    aboutHeader.textContent = "About Meloons"

    aboutContact.classList.add("about-contact")
    aboutContact.textContent = ""

    div.textContent = "Have questions or need more information? Feel free to reach out to us at realmail@fake.com. We'd love to hear from you!";

    div.appendChild(aboutHeader)
    div.appendChild(aboutUs)
    div.appendChild(aboutContact)
}

export {
    aboutPage
}
