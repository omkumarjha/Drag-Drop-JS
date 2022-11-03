let imageBox = document.querySelector("#imageBox")
let boxes = document.getElementsByClassName("box")

// Jaise hi draggable image ko uttayenge to drag start wala event triggored ho jayega.
imageBox.addEventListener("dragstart",()=>{
    console.log("Drag start has been trigored..")
})

// Jaise hi draggable image ko chodenge to drag end wala event triggored ho jayega.
imageBox.addEventListener("dragend",()=>{
    console.log("Drag end has been trigored..")
})

