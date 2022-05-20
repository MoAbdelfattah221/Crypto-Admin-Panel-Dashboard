

// toggle sideBar function
let detailsOBj = {
    parentEle : document.querySelector(".side"),
    openBtn : document.querySelector(".open"),
    closeBtn : document.querySelector(".close"),
}
function toggleElement(detailsOBj) {
    detailsOBj.openBtn.addEventListener("click",() => {
        detailsOBj.parentEle.classList.add("active");
    });

    detailsOBj.closeBtn.addEventListener("click",() => {
        detailsOBj.parentEle.classList.remove("active");
    });
}
toggleElement(detailsOBj);



let walletContainer = document.querySelector(".wallet-container");
walletContainer.addEventListener("click",() => {
    let walletList = document.querySelector(".accordion-list");
    if(walletList.clientHeight == 0){
        walletList.style.cssText = `height : ${walletList.scrollHeight}px`;
    }else {
        walletList.style.cssText = `height : 0px`;
    }

});


