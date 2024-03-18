/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasuljson

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.


prepare date for a get request
often use a form
don't want to just send the data right away, need to wait for the user to submit a form and tell them what to add
often won't just be sending one value -- usually a larget object, constructed from multiple inputs

make a post requeset

method - POST/GET/PATCH/DELETE

headers - metadata of fetch api

        "ContentType": "application/json" -- type of content we're POSTing
        "Accept": "application/json" -- type of content we hope to recieve

                why JSON? (javascript object notation) makes locally readable data

body -- what you're going to post



*/

document.querySelector("form").addEventListener("submit", event =>{
    event.preventDefault();
    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: document.querySelector("form").name.value,
            types: [document.querySelector("form").type1.value, document.querySelector("form").type2.value,]

        })


    })
    .then(response => response.json())
    .then(pokemon =>{
        const li = document.createElement("li");
        li.textContent = pokemon.name;
        document.querySelector("#list").append(li);
    });
})


// Let's try making a GET request to display existing data on the page.

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.


// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.nt
// 3. Try writing PATCH and DELETE requests!


fetch("http://localhost:3000/pokemon")
.then(response => response.json())
.then(pokemon =>{
    pokemon.forEach(monster =>{
        const li = document.createElement("li");
        li.textContent = monster.name;
        document.querySelector("#list").append(li);
    }
        )
}
    )



