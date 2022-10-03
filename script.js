const dynamicIsland =document.querySelector(".dynamic-island")

animationList=["long","normal", "divide", "fusion", "bigger","reset"];
let index = 0;

dynamicIsland.addEventListener("click",()=>{
    setTimeout(() => {
        if (index <= animationList.length - 1) {
            dynamicIsland.classList.add(animationList[index]);
            index++;
        } else {
            index = 0;
            dynamicIsland.classList.remove("long","normal", "divide", "fusion", "bigger","reset")
            dynamicIsland.classList.add(animationList[index]);
        }
    },100);
})