const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const productsContainers = [...document.querySelectorAll('#slider')];
const nxtBtnn = [...document.querySelectorAll('.hero-nxt')];
const preBtnn = [...document.querySelectorAll('.hero-pre')];

productsContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})