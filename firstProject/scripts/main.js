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
 * 
 *  1. On page load, Check if name is in local storage, if not, Show default name

    2. if yes, show stored name

    3. user can add a new name using change name button, store new name in the storage then display it
 */

let myButton = document.querySelector('button'); 
let myHeading = document.querySelector('h1');

    // if there's username in localStorage, display it
    let myLocalName = localStorage.getItem('name');
    if (myLocalName) {
        myHeading.textContent = "Hi, I'm " + myLocalName;
    }
    

    // add onclick event to button
    myButton.onclick = () => {
        // prompt for username
        let myUsername = prompt('Enter your name.');

        // store name in localStorage & update the h1 with new username
        if (myUsername) {
            localStorage.setItem('name', myUsername);
            myHeading.textContent = "Hi, I'm " + myUsername;
        }     
    }