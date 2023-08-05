fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.products);
    // Start here :)

    for (let i = 0; i < data.products.length; i++) {
      const element = document.querySelector('.wrapper');
      element.insertAdjacentHTML(
        'beforeend',
        `<div class='item'>
        <div class='img'><img class='img-full' src="${data.products[i].images[0]}" alt="no"></div>
        <h2 class='item-title'>${data.products[i].title}</h2>
        <p class='item-description'>${data.products[i].description}</p>
        <p class='item-price'>Price: ${data.products[i].price} $</p>
        <p class='item-rating'>Rating: ${data.products[i].rating}</p>
        <button class='item-button'>Add to cart</button>
      </div>`,
      );
    }
  });