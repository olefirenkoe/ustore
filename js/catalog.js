function MyObject(names, type, gender, availability, movie, price, photo1, photo2) {
    this.names = names;
    this.type = type;
    this.gender = gender;
    this.availability = availability;
    this.movie = movie;
    this.price = price;
    this.photo1 = photo1;
    this.photo2 = photo2;
    // this.number = 0;
};

let leatherJacket = new MyObject("Panin's Jacket", "jacket", "male", "IN STOCK", "Zhmurki", 120, "leatherJacket1", "leatherJacket2");
let pinkJacket = new MyObject("Sergey Mikhalych's jacket", "jacket", "male", "IN STOCK", "Zhmurki", 200, "pinkJacket1", "pinkJacket2");
let armoredFolder = new MyObject("Armored Folder", "other", "unisex", "SOLD OUT", "Zhmurki", 40, "armoredFolder1", "armoredFolder2");
let trousersKillBill = new MyObject("Kill Bill Trousers", "trousers", "female", "IN STOCK", "Kill Bill", 80, "trousersKillBill1", "trousersKillBill2");
let jacketKillBill = new MyObject("Kill Bill Jacket", "jacket", "female", "SOLD OUT", "Kill Bill", 35, "jacketKillBill1", "jacketKillBill2");
let swordKillBill = new MyObject("Kill Bill Sword", "accessories", "unisex", "IN STOCK", "Kill Bill", 25, "swordKillBill1", "swordKillBill2");
let sweaterBrat = new MyObject("Bodrov's Sweater", "sweater", "male", "IN STOCK", "Brat", 55, "sweaterBrat1", "sweaterBrat2");
let playerBrat = new MyObject("Bodrov's Player", "accessories", "unisex", "IN STOCK", "Brat", 120, "playerBrat1", "playerBrat2");
let denimJacketBrat = new MyObject("Seller's Denim Jacket", "Jacket", "unisex", "SOLD OUT", "Brat", 45, "denimJacketBrat1", "denimJacketBrat2");
let soapFightClub = new MyObject("Soap by Fight Club", "other", "unisex", "IN STOCK", "Fight Club", 10, "soapFightClub1", "soapFightClub2");
let sunglassesFightClub = new MyObject("Fight Club Sunglasses", "accessories", "unisex", "IN STOCK", "Fight Club", 100, "sunglassesFightClub1", "sunglassesFightClub2");
let jacketFightClub = new MyObject("Fight Club Red Jacket", "jacket", "male", "IN STOCK", "Fight Club", 300, "jacketFightClub1", "jacketFightClub2");
let shoesHollywood = new MyObject("Bratt Pitt's Shoes", "shoes", "male", "SOLD OUT", "Once Upon a Time in Hollywood", 75, "shoesHollywood1", "shoesHollywood2");
let brownJacketHollywood = new MyObject("Leo's Brown Jacket", "jacket", "male", "IN STOCK", "Once Upon a Time in Hollywood", 210, "brownJacketHollywood1", "brownJacketHollywood2");
// let topHollywood = new MyObject("Top Hippie Girl", "other", "unisex", "SOLD OUT", "Once Upon a Time in Hollywood", 20, "topHollywood1", "topHollywood2");


let counter = 0;
let total = 0;
let number = 0;


let products = [brownJacketHollywood, leatherJacket, pinkJacket, armoredFolder, trousersKillBill, jacketKillBill, swordKillBill, sweaterBrat, playerBrat, denimJacketBrat, soapFightClub, sunglassesFightClub, jacketFightClub, shoesHollywood];

let containerForProducts = document.getElementById("products");

for (let i = 0; i < products.length; i++) {
    let divItem = document.createElement("DIV");
    divItem.setAttribute("class", "item");
    containerForProducts.appendChild(divItem);
    let divPhoto = document.createElement("DIV");
    divPhoto.setAttribute("class", "divPhoto")
    divItem.appendChild(divPhoto);
    let img1 = document.createElement("IMG");
    img1.setAttribute("src", `assets/catalog/${products[i].photo1}.jpg`);
    img1.setAttribute("class", "img1")
    divPhoto.appendChild(img1);
    let img2 = document.createElement("IMG");
    img2.setAttribute("src", `assets/catalog/${products[i].photo2}.jpg`);
    img2.setAttribute("class", "img2")
    divPhoto.appendChild(img2);
    let divPrice = document.createElement("DIV");
    divPrice.setAttribute("class", "right price");
    divPrice.innerHTML = `<b>Price:</b> ${products[i].price}$`;
    divItem.appendChild(divPrice);
    let divName = document.createElement("DIV");
    divName.setAttribute("class", "name");
    divName.innerHTML = `${products[i].names}`;
    divItem.appendChild(divName);
    let divAvailability = document.createElement("DIV");
    divAvailability.setAttribute("class", "right divAvailability");
    divAvailability.innerHTML = `${products[i].availability}`;
    divItem.appendChild(divAvailability);
    if (products[i].availability == "SOLD OUT")
        divAvailability.style.color = "red";
    let divButton = document.createElement("DIV");
    divButton.setAttribute("class", "right divButton");
    divButton.innerHTML = `<input type="button" value="Add to cart" data-name="${products[i].names}" onclick="adderToCart(${products[i].price})">`;
    if (products[i].availability == "SOLD OUT")
        divButton.innerHTML = `<input type="button" value="Notify" onclick="notify()">`;
    divItem.appendChild(divButton);
};


function notify() {
    let email = prompt("Please, enter your email. We will tell about arrival.");
}

function adderToCart(price, ) {

    let noItems = document.getElementById("noItems");
    if (noItems) {
        noItems.remove();
    }

    let target = event.target;
    let nameProduct = target.getAttribute('data-name');
    let totalSpan = document.createElement("div");
    let totalPrice = document.getElementById("totalPrice");
    let divTotal = document.getElementById('itemInCart');

    // number += 1;
    target.setAttribute("data-element", `${number++}`)
    total += price;
    totalPrice.innerHTML = total;
    totalSpan.setAttribute("class", `${nameProduct}`);
    totalSpan.innerHTML = `${number} x ${nameProduct}`;
    divTotal.appendChild(totalSpan);


    counter += 1;
    itemCount = document.getElementById("itemCount");
    itemCount.innerHTML = `${counter}`;
}