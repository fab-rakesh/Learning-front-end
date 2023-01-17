/**
 * Change Image
 */
    let myImg = document.querySelector('img'); // select img element reference

    // add onclick event handler
    myImg.onclick = () => {
        let mySrc = myImg.getAttribute('src'); // get image source

        // if source is origional image then change to new image, else change to original image
        if (mySrc === 'images/undertaker-young.jpg') {
            myImg.setAttribute('src', 'images/kane.png');
        } else {
            myImg.setAttribute('src', 'images/undertaker-young.jpg');
        }
    };

/**
 * Change Name
 */

let myButton = document.querySelector('button'); 
let myHeading = document.querySelector('h1');

// add onclick event to button
myButton.onclick = () => {
    // prompt for username
    let myUsername = prompt('Enter your name.');

    // update the h1 with new username
    if (myUsername)
        myHeading.textContent = "Hi, I'm " + myUsername;
}