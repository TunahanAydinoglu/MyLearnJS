const cardBody = document.querySelectorAll(".card-body")[1];

const title = document.querySelector("#tasks-title");

// //Click Event
// title.addEventListener("click",run);

// //DoubleClick
// title.addEventListener("dblclick",run);

// //Mouse Down
// title.addEventListener("mousedown",run);

// //Mouse Up
// title.addEventListener("mouseup",run);

// //mouse Over
// title.addEventListener("mouseover",run);

// // mouse out
// title.addEventListener("mouseout",run);

//Mouse enter & Mouse Leave
cardBody.addEventListener("mouseenter",run)
cardBody.addEventListener("mouseleave",run)

    function run(e){
        console.log(e.type);
    }