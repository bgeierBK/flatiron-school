/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.


// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation

// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.

// ~ Create + Append a node
// -> createElement(), append()

// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.


function displayList(name, array){
    let header = document.createElement("h1");
    header.textContent = name;
    document.querySelector("#dates").append(header);

  
    for (let i= 0; i <array.length; i++){
        let list = document.createElement("li");
        list.textContent = array[i];
        document.querySelector("#dates").append(list);
    }

    
}

displayList("Capitals", ["Ovechkin", "Wilson", "Oshie", "Carlson"])

const div1 = document.querySelector("strong");
const div2 = document.createElement("div2");
div2.innerHTML= "Spencer Carberry";
div1.parentNode.replaceChild(div2, div1)
