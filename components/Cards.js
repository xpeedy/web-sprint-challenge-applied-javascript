import axios from "axios";

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios
.get("https://lambda-times-api.herokuapp.com/articles")
.then((result) => {
    const resData = result.data.articles;
    console.log(resData)
    // const artArray = resData.map()
    // console.log(artArray)
    let array = Array.from(resData)
    console.log(array)
    resData.forEach(element => {
        
    });
    // console.log(`${resData[1]}`)
    // for(let i in resData.i){
    //     console.log(i)
    // }
    let newCard = cardMaker(resData)
    cardsContainer.appendChild(newCard)
    
}) 

function cardMaker(article){//obj
   const card = document.createElement("div")
   card.classList.add("card")

   const headline = document.createElement("div")
   headline.classList.add("headline")
   headline.textContent = article.headline
   card.appendChild(headline)

   const author = document.createElement("div")
   author.classList.add("author")
   card.appendChild(author)

   const imgContainer = document.createElement("div")
   imgContainer.classList.add("img-container")
   author.appendChild(imgContainer)

   const img = document.createElement("img")
   img.src = article.authorPhoto
   imgContainer.appendChild(img)

   const span = document.createElement("span")
   span.textContent = article.authorName
   author.appendChild(span)


    return card;
}

let cardsContainer = document.querySelector(".cards-container")
// let newCard = cardMaker(resData)
// cardsContainer.appendChild()