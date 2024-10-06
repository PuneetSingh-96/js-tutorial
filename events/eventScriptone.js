//type :keyboard ,mouse 
//timestamp
//defualtPrevented
//target
//toElement
//srcElement
//currentTarget
//clientX
//clientY
//screenX
//screenY
//altkey,ctrlkey,shiftkey,keycode

// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

//attachEvent()
//jQuery - on

// document.getElementById('images').addEventListener('click',function(e){
//     // alert("owl clicked again")
//     console.log("clicked inside the ul");
// },false)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("clicked by owl")
//     e.stopPropagation() //no other or above propagation are allowed

//  },false)

// document.getElementById('images').addEventListener('click',function(e){
//     // alert("owl clicked again")
//     console.log("clicked inside the ul");

// },true)

// document.getElementById('owl').addEventListener('click',function(e){
//     console.log("clicked by owl")
// },true)

// document.getElementById('google').addEventListener('click',function(e){
//     console.log("clicked in google link");
//     e.preventDefault();
//     e.stopPropagation()
// },false)

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        //removeImg.parentNode.removeChid(removeImg);
        let removeImg = e.target.parentNode;
        removeImg.remove();

    }
},false)







