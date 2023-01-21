const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

const length = images.length;
let sliderNumber = 1;

for (let i=0; i<length; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
};

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "brown";

const resetBg = ()=>{
    buttons.forEach((button)=>{
        button.style.backgroundColor = "transparent";
    })
}

buttons.forEach((button,i) =>{
    button.addEventListener("click",()=>{
        resetBg()
        // button.style.backgroundColor = "brown";
        
    sliderNumber=i+1;

    slider.style.transform = `translateX(-${i*500}px)`;
    button.style.backgroundColor = "brown";
    })
   
})



right.addEventListener("click", () => {
    if (sliderNumber <length) {
        slider.style.transform = `translateX(-${sliderNumber*500}px)`;
        sliderNumber++;
    }else{
        slider.style.transform = `translateX(0px)`;
        sliderNumber=1;
    }
    resetBg()
    buttons[sliderNumber-1].style.backgroundColor = "brown";
});

left.addEventListener("click", () => {
    if (sliderNumber == 1) {
        slider.style.transform = `translateX(-${(length-1)*500}px)`;
        sliderNumber = length;
    }else{
        slider.style.transform = `translateX(-${(sliderNumber-2)*500}px)`;
        sliderNumber--;
    }
    resetBg()
    buttons[sliderNumber-1].style.backgroundColor = "brown";
})

