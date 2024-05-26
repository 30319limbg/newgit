// let images = [
//     "imgsliderEffect01-min.jpg",
//     "imgsliderEffect02-min.jpg"
// ];

// function imageSlider(parent, images){
//     let currentlndex = O;
//     let Slider = {
//         parent : parent,
//         images : parent.querySelector(".slider_img"),
//         thumnail : parent.querySelector(".slider_thumnail"),
//         PreviousBtn : parent.querySelector(".slider_btn . previous"),
//         NextBtn : parent.querySelector(".slider_btn .next")

//     }
//     Slider.images.innerHTML = images.map((image, index)=>{
//         return `<img src="${image}" alt="이미지${index}">`
//     }).join("");

//     let imageNode = Slider.images.querySelectorAll("img");
//     imageNode[currentlndex].classList.add("active");

//     Slider.thumnail.innerHTML = Slider.images.innerHTML;

//     let thumnailNode = Slider.thumnail.querySelectorAll("img");
//     thumnailNode[currentlndex].classList.add("active");

//     thumnailNode.forEach((el,i) => {
//         el.addEventListener("click", function(){
//             Slider.thumnail.querySelector("img.active").classList.remove("active");
//             el.classList.add("active");

//             imageNode[currentlndex].classList.remove("active");
//             currentlndex = i;
//             imageNode[currentlndex].classList.add("active")

//         });
//     });

//     Slider.PreviousBtn.addEventListener("click",function(){
//         imageNode[currentlndex].classList.remove("active");
//         currentlndex--;

//         if(currentlndex < O) currentlndex = images.length - 1;
//         imageNode[currentlndex].classList.add("active");

//     });

//     Slider.NextBtn.addEventListener("click",function(){
//         imageNode[currentlndex].classList.remove("active");
        
//         currentlndex = (currentlndex + 1) % images.length;
//         imageNode[currentlndex].classList.add("active");

//         Slider.thumnail.querySelector("img.active").classList.remove("active");
//         thumnailNode[currentlndex].classList.add("active");
//     });
// }
// imageSlider(document.querySelector(".slider_wrap"),images);


