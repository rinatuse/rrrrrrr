//слайдер для кроссовок 
function initializeSliderButtons(prevButtons, nextButtons, sliderLists) {
    nextButtons.forEach((nextButton, index) => {
        const sliderList = sliderLists[index];
        nextButton.addEventListener('click', () => {
            sliderList.appendChild(sliderList.firstElementChild.cloneNode(true));
            sliderList.removeChild(sliderList.firstElementChild);
        });
    });
    
    prevButtons.forEach((prevButton, index) => {
        const sliderList = sliderLists[index];
        prevButton.addEventListener('click', () => {
            sliderList.insertBefore(sliderList.lastElementChild.cloneNode(true), sliderList.firstElementChild);
            sliderList.removeChild(sliderList.lastElementChild);
        });
    }) ;
}

const prevButtons = document.querySelectorAll('.prev-button');
const nextButtons = document.querySelectorAll('.next-button');
const sliderLists = document.querySelectorAll('.slider__list');

initializeSliderButtons(prevButtons, nextButtons, sliderLists);



// избранное 

// JavaScript (script.js)
// document.addEventListener('DOMContentLoaded', function() {
//     const favoritesList = document.querySelector('.favorites__list');

//     // Слушатель событий для клика по элементам с классом slider__star
//     document.querySelectorAll('.slider__star').forEach(star => {
//         star.addEventListener('click', addToFavorites);
//     });

//     function addToFavorites(event) {
//         const product = event.target.closest('.slider__item').querySelector('.slider__name').textContent;
      
//         // Проверяем, добавлен ли товар уже в избранное
//         if (!favoritesList.querySelector(`li[data-product="${product}"]`)) {
//             const listItem = document.createElement('li');
//             listItem.textContent = product;
//             listItem.setAttribute('data-product', product);
//             favoritesList.appendChild(listItem);
//         } else {
//             alert('Этот товар уже добавлен в избранное!');
//         }
//     }
// });


// ОБУВЬ

const productsDataShoes = [
    {
        name: "AIR FORCE 1 ULTRA",
        imageSrc: "/assets/images/products/Air-Force-1-Ultra.png",
        price: "от 6 789 Р"
    },
    {
        name: "NIKE COURT ZOOM CAGE 2",
        imageSrc: "/assets/images/products/Nike-Court-Zoom-Cage-2.png",
        price: "от 4 699 Р"
    },
    {
        name: "MEN'S SOCCER SHOES",
        imageSrc: "/assets/images/products/Men's-soccer-shoes.png",
        price: "от 2 699 Р"
    },
    {
        name: "AIR FORCE 1 ULTRA FLYKNIT",
        imageSrc: "/assets/images/products/Air-force-1-ultra-flyknit.png",
        price: "от 3 129 Р"
    },
    {
        name: "WOMAN LET'S GO WHITE",
        imageSrc: "/assets/images/products/Woman-let's-go-white.png",
        price: "от 5 778 Р"
    },
    {
        name: "AIR FORCE 1 ULTRA RED",
        imageSrc: "/assets/images/products/Air-force-1-ultra-red.png",
        price: "от 9 699 Р"
    }
];

// ОДЕЖДА

const productsDataСlothes = [
    {
        name: "NIKE COURT ZOOM CAGE 2",
        imageSrc: "/assets/images/products/nike-court-zoom-cage-3.png",
        price: "от 4 699 Р"
    },
    {
        name: "AIR FORCE 1 ULTRA FLYKNIT",
        imageSrc: "/assets/images/products/men's-soccer-shoes-1.png",
        price: "от 3 129 Р"
    },
    {
        name: "AIR FORCE 1 ULTRA",
        imageSrc: "/assets/images/products/air-force-1-ultra-flyknit-1.png",
        price: "от 6 789 Р"
    },
    {
        name: "MEN'S SOCCER SHOES",
        imageSrc: "/assets/images/products/air-force-1-ultra-4.png",
        price: "от 2 699 Р"
    },
    {
        name: "WOMAN LET'S GO WHITE",
        imageSrc: "/assets/images/products/nike-court-zoom-cage-3.png",
        price: "от 5 778 Р"
    },
    {
        name: "AIR FORCE 1 ULTRA RED",
        imageSrc: "/assets/images/products/men's-soccer-shoes-1.png",
        price: "от 9 699 Р"
    }
];

//Вещи 

const productsDataGoods = [
    {
        name: "AIR FORCE 1 ULTRA",
        imageSrc: "/assets/images/products/nike-court-zoom-cage3.png",
        price: "от 6 789 Р"
    },
    {
        name: "NIKE COURT ZOOM CAGE 2",
        imageSrc: "/assets/images/products/men's-soccer-3.png",
        price: "от 4 699 Р"
    },
    {
        name: "MEN'S SOCCER SHOES",
        imageSrc: "/assets/images/products/air-force-1-ultra-flyknit-3.png",
        price: "от 2 699 Р"
    },
    {
        name: "AIR FORCE 1 ULTRA FLYKNIT",
        imageSrc: "/assets/images/products/air-force-1-ultra-3.png",
        price: "от 3 129 Р"
    },
    {
        name: "WOMAN LET'S GO WHITE",
        imageSrc: "/assets/images/products/nike-court-zoom-cage3.png",
        price: "от 5 778 Р"
    },
    {
        name: "AIR FORCE 1 ULTRA RED",
        imageSrc: "/assets/images/products/men's-soccer-3.png",
        price: "от 9 699 Р"
    }
];

const productListShoes = document.querySelector('.slider__list.shoes');
const productListClothes = document.querySelector('.slider__list.clothes');
const productListGoods = document.querySelector('.slider__list.goods');



productsDataShoes.forEach(productData => {
    const listItem = createListItem(productData);
    productListShoes.appendChild(listItem);
});

productsDataСlothes.forEach(productData => {
    const listItem = createListItem(productData);
    productListClothes.appendChild(listItem);
});

productsDataGoods.forEach(productData => {
    const listItem = createListItem(productData);
    productListGoods.appendChild(listItem);
});

function createListItem(productData) {
    const listItem = document.createElement('li');
    listItem.classList.add('slider__item');

    const img = document.createElement('img');
    img.src = productData.imageSrc;
    img.alt = productData.name;
    img.classList.add('slider__img');

    const productName = document.createElement('h2');
    productName.textContent = productData.name;
    productName.classList.add('slider__name');

    const price = document.createElement('span');
    price.textContent = productData.price;
    price.classList.add('slider__price');

    listItem.appendChild(img);
    listItem.appendChild(productName);
    listItem.appendChild(price);

    return listItem;
}

