// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement("div")
    header.classList.add("header")

    let span = document.createElement("span")
    span.classList.add("date")
    header.appendChild(span)

    let h1 = document.createElement("h1")
    h1.textContent = "Lambda Times"
    header.appendChild(h1)

    let span2 = document.createElement("span")
    span2.classList.add("temp")
    span2.textContent = "98"
    header.appendChild(span2)

    return header
}

const headerContainer = document.querySelector(".header-container")
let newHeader = Header()
headerContainer.appendChild(newHeader)
