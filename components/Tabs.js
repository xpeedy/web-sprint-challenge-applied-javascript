import axios from "axios"
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topics = document.querySelector(".topics")

axios
.get("https://lambda-times-api.herokuapp.com/topics")
.then((result) => {
    let resData = result.data.topics
    // console.log(resData)
    resData.forEach(topic => {
        // console.log(topic)
        topics.appendChild(newTab(topic))
    });
     
})


    // const resultData = result.data
    // resultData.map()
    // console.log(resultData)
    // resultData.forEach(element => {
    //     topics.appendChild(newTab(resultData))
    // });





function newTab(obj){
    const div = document.createElement("div")
    div.classList.add("tab")
    div.textContent = `${obj}`
    return div;
}