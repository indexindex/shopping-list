// DRY method - Do not Repeat Yourself

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li  = document.getElementsByTagName("LI");
var close = document.getElementsByClassName("close");

function inputLength() {
    return input.value.length;
}

function createListElement() {
       // create li item when button is clicked or Enter key pressed
       var li = document.createElement("li");
       // create a text node for li item
       // input.value takes whatever you typed in the input and displays it as a new li item
       li.appendChild(document.createTextNode(input.value));
       // adds text node created to the bottom of list items
       // keeps adding if button is clicked or Enter key pressed
       ul.appendChild(li);
       // after adding li item clear the input field
       input.value = "";
       // otherwise clicking button/pressing Enter key will do nothing

    // Create a "close" button and append it to each list item
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // Click on a close button to hide the current list item
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
}

function addListAfterClick() {
        // if you have typed something in input then do the following
        if (inputLength() > 0) {
            createListElement();
        }
}

function addListAfterKeypress(event) {
        // if you have typed something in input then do the following, also by pressing Enter key
        if (inputLength() > 0 && event.keyCode === 13) {
            createListElement();
        }
}

function lineThrough(checked) {
    if (checked.target.tagName === "LI") {
        checked.target.classList.toggle("done");
    } else {
        return false
    }
}

// Create a "close" button and append it to each list item
    var i;
    for (i = 0; i < li.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li[i].appendChild(span);
};

// Click on a close button to hide the current list item
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
};

// listens for mouse click on button press
button.addEventListener("click", addListAfterClick);

// listens for keypress
input.addEventListener("keypress", addListAfterKeypress);

// Add a line-through when clicking on a list item
ul.addEventListener("click", lineThrough);