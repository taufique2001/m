let nav=document.querySelector(".nav");
let btn=document.querySelector(".fa-paintbrush");
let body=document.querySelector("body");

let mode="light";

// btn.addEventListener("click",() => {
//     if(mode==="light") {
//         mode="dark";
//         body.style.background="linear-gradient(to right,#9796f0,#fbc7d4)";
//     } else if(mode==="dark") {
//         mode="dawn";
//         body.style.background="linear-gradient(to right,#659999,#f4791f)";
//     }else if(mode==="dawn"){
//         mode="morning";
//         body.style.background="linear-gradient(to right,#009FFF,#ec2F4B)";
//     }else{
//         mode="light";
//         body.style.background="linear-gradient(to right,#BBD2C5,#536976,#292E49)";
//     }
// }); 

btn.addEventListener("click",(changeColor));

function changeColor() {
    if(mode==="light") {
        mode="dark";
        body.style.background="linear-gradient(to right,#BBD2C5,#536976,#292E49)";
    } else if(mode==="dark") {
        mode="dawn";
        body.style.background="linear-gradient(to right,#659999,#f4791f)";
    }else if(mode==="dawn"){
        mode="morning";
        body.style.background="linear-gradient(to right,#009FFF,#ec2F4B)";
    }else{
        mode="light";
        body.style.background="linear-gradient(to right,#9796f0,#fbc7d4)";
    }
}
gsap.from("#school",{
    x:-200,
    duration:2,
 //    rotate:360 
 })
 gsap.from("#inter",{
    y:200,
    duration:2,
 //    rotate:360 
 })

gsap.from("#college",{
   x:200,
   duration:2,
//    rotate:360 
})

gsap.from("#tic",{
    x:-200,
    duration:2,
    rotate:360 
 })
 gsap.from("#paper",{
    y:-300,
    duration:2,
    rotate:360 
 })

gsap.from("#currency",{
   x:200,
   duration:2,
   rotate:360 
})

