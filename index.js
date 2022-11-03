let imageBox = document.querySelector("#imageBox")
let boxes = document.getElementsByClassName("box")

// Jaise hi draggable image ko uttayenge to drag start wala event triggored ho jayega.
imageBox.addEventListener("dragstart",(event)=>{
    event.target.className += " borderImage"
    // setTimeOut 0 matlab jab sab kuch hojaye to ye class add kardena
    setTimeout(()=>{
        event.target.className = "hide"
    },0)
    event.target.parentElement.style.backgroundColor = "white"
})

// Jaise hi draggable image ko chodenge to drag end wala event triggored ho jayega. chahe hum draggable image ko element pe chore ya fir uske bahar ye still trigger ho jayega.
imageBox.addEventListener("dragend",(event)=>{
    event.target.className = "imageBox" // Matlab jaise hi hum draggable image ko chodenge to uska border gayab ho jaana chahiye.
})

for(let box of boxes){
    
    // dragover event tab trigger hota hai jab hum draggable image ko kisi element pe leke jaate hai.
    box.addEventListener("dragover",(event)=>{
        // By default hum draggable image ko kisi doose element pe drop nhi karsakte , isliye uske default behaviour ko todne ke liye yeh statement ka use kiya gaya hai.
        event.preventDefault()
    })

    // Yeh event tab trigger hota hai jab hum draggable image ko kisi element pe laake chorte hai.
    box.addEventListener("drop",(event)=>{
        event.target.append(imageBox)
        event.target.style.backgroundColor = "#cbcbcb"
    })


}