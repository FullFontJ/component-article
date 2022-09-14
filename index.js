const share = document.getElementById("share");
const tooltip = document.getElementById("share-tooltip");

share.addEventListener("click", (e) => {
    if(tooltip.classList.contains("tooltip-activate")){
        tooltip.classList.remove("tooltip-activate")
    }else{
        tooltip.classList.add("tooltip-activate")
    }
    
});