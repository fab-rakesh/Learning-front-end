let myHtml = document.querySelector('html');
let myCounter = true;
myHtml.onclick = e => {
    let clickedElement = e.target;
    let clickedElementName = e.target.tagName;
    if (clickedElementName == "LI") {
        // change list item
        let newListItem = prompt("Change List item.");
        clickedElement.innerHTML = newListItem;
        // clickedElement.createTextNode(newListItem);
    } else {
        // add list item
        let listItem = prompt("Enter list item.");

        if (listItem) {
            let myUl = document.querySelector("ul");

            if(myCounter) {
                myUl.style.margin = "5px";
                myUl.style.paddingTop = "5px";
                myUl.style.paddingBottom = "5px";
                myUl.style.backgroundColor = "red";
                myUl.style.border = "1px solid black";
                myCounter = false;
            }

            
            let myli = document.createElement("li");
            myli.appendChild(document.createTextNode(listItem));
            myUl.appendChild(myli) ;
        }
    }
};