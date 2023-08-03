fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);
    // Start here :)
    // const item = document.querySelector('.item');
    // const newItem = item.cloneNode(true);

    // const qwe = document.querySelector('.list');
    // console.log(qwe);

    // for (let i = 0; i < 4; i++) {
    //   document.querySelector('.list').appendChild(newItem);
    // }

    // for (let i = 0; i < data.products.length; i++) {
  
    //   console.log(data.products[i].price);
    // }

    data.products[3].price;

    


    // for (let i = 0; i < 5; i++) {
    // let onePrice = document.createElement('div');
    // onePrice.className = 'qwe'
    // onePrice.innerHTML = data.products[i].price;

    // document.querySelector('.container').prepend(onePrice);
    // }
     

      for (let i = 0; i < data.products.length; i++) {
        const element = document.querySelector('.container');
      element.insertAdjacentHTML (
      'beforeend',
      `<div class='item'>
        <div class='img'><img class='imge' src="${data.products[i].images[0]}" alt="no"></div>
        <h2 class='item-title'>${data.products[i].title}</h2>
        <p class='item-description'>${data.products[i].description}</p>
        <p class='item-price'>${data.products[i].price}</p>
        <p class="item-rating">${data.products[i].rating}</p>
        <button>Clik</button>
      </div>`
    );
      }

   
  });
