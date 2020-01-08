var array: string [] = ["Acrylfarbe bestellen"];
var counter: string = "" + array.length + " in total";
document.querySelector("#counter").innerHTML = "" + counter;

function deleteItems(): void {
    var parent = this.parentNode;
    parent.parentNode.remove();
    //Counter//
    array.pop();
    var counter: string = "" + array.length + " in total";
    document.querySelector("#counter").innerHTML = "" + counter;
    console.log("item removed");
    console.log(array.length);
    console.log(this.parentNode.parentNode);
 
}

window.addEventListener("load", function(): void {
document.querySelector(".fa-trash").addEventListener("click", deleteItems);

function addItem (text): void {

    var list: HTMLElement = document.getElementById("list");

    //Create a new List Element//
    var item: HTMLLIElement = document.createElement ("li");
    item.innerText = text;
    
    //Create a new Div Box//
    var buttons: HTMLDivElement = document.createElement("div");
    buttons.classList.add("buttons");
    
    //Create an Array//
    var value = document.getElementById("item").value;
    array.push(value);
    console.log(array);

    //Counter//
    var counter: string = "" + array.length + " in total";
    document.querySelector("#counter").innerHTML = "" + counter;

    //Add Delete Button to new Item//
    var remove: HTMLButtonElement = document.createElement("button");
    remove.classList.add("fa", "fa-trash");
    
    //Add Check Icon to new Item//
    var label: HTMLLabelElement = document.createElement("label");
    label.classList.add("container");
    var check: HTMLElement = document.createElement("input");
    check.classList.add("done");
    check.setAttribute("type", "checkbox"); 
    
    //Append new Elements//
    buttons.appendChild(remove);
    buttons.appendChild(label);
    label.appendChild(check);
    item.appendChild(buttons);

    //New Event Listener//
    remove.addEventListener("click", deleteItems);
    
    //Add new list Item above the existing ones//
    list.insertBefore(item, list.childNodes[0]);
}

document.getElementById("add").addEventListener("click", function (): void {
    var value = document.getElementById("item").value;
    if (value) addItem(value);
    document.getElementById("item").value = "";
}); } );