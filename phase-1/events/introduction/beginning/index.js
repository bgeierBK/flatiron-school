/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated March 13, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" "mouseover" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// ~ the "click" event

document.getElementById("today").addEventListener("click", event => {
    
console.log("you done clicked!")
})




// ~ the "submit" event

document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    console.log("the form was submitted!");
    console.log(document.querySelector("form").date.value)
})

// ~ challenges
// 1. Add some non-click, non-submit event listener to the page. It can trigger whatever you wish!

document.getElementById("tomorrow").addEventListener("mouseenter", event => {
    document.getElementById("tomorrow").innerHTML="wha-wha-what!?"
    })

document.getElementById("tomorrow").addEventListener("mouseout", event => {
    document.getElementById("tomorrow").innerHTML="Tomorrow"
    })