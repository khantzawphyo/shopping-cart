let shop = document.getElementById("shop");


let shopItemsData = [
    {
        id: '8F3G2H',
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"
    },
    {
        id: "5J9K6L",
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-2.jpg"
    },
    {
        id: "2D7F4G",
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-3.jpg"
    },
    {
        id: "1H5J3K",
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-4.jpg"
    }
];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((item) => {
            let { id, name, price, desc, img } = item;
            return `
                <div id=product-id-${id} class="item">
                    <img width="220" src=${img} alt="">
                    <div class="details">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price-quantity">
                            <h2>$ ${price} </h2>
                            <div class="buttons">
                                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                                <div id=${id} class="quantity">0</div>
                                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("")
    );
};

generateShop();

let increment = (id) => {
    console.log(id);
};

let decrement = (id) => {
    console.log(id);
};

let update = () => { };