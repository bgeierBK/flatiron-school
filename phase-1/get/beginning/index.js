/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/

// fetch
// Create = POST
// Read = GET
// Update = PATCH
// Delete = DELETE

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.

fetch("https://cat-fact.herokuapp.com/facts/random")
// fetch is a promise, so we use .then() to handle successful state
// convert JSON resonse into usable JS
.then(response => response.json())
.then(fact => {
    document.querySelector("#cat").textContent = fact.text;
})
//use .catch() for unsuccessful state
.catch(error => console.log(error));
// A synchronous request to https://anapioficeandfire.com/api/books.

fetch("https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(books => {
// use for each to pull from API; use the data from the array to get the corret element
    books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book.name;
    document.querySelector("#got").append(li);
});

   
})


// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"

async function getPokemon(name){
 const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
 const pokemon = await response.json();
 document.querySelector("#pokemon").textContent = pokemon.name;
}

// ~ Challenge: Make a GET request to an API of your choice!

getPokemon("charizard")