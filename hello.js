var o = document.getElementsByClassName("uiTextareaAutogrow _552m");

// set the chat textbox
var chatTextBox = o[0];

// set the message value
chatTextBox.value = "Hello";

// create a keydown event    
var e = new Event("keydown");

// it has to simulate the Enter press (key code is 13)
e.keyCode = 13;

// trigger it
chatTextBox.dispatchEvent(e);