function MyObject(names, type, gender, availability, movie, price, photo1, photo2) {
    this.names = names;
    this.type = type;
    this.gender = gender;
    this.availability = availability;
    this.movie = movie;
    this.price = price;
    this.photo1 = photo1;
    this.photo2 = photo2;
};

let leatherJacket = new MyObject("Panin's Jacket", "jacket", "male", "IN STOCK", "Zhmurki", 120, "leatherJacket1", "leatherJacket2"),
    pinkJacket = new MyObject("Sergey Mikhalych's jacket", "jacket", "male", "IN STOCK", "Zhmurki", 200, "pinkJacket1", "pinkJacket2"),
    armoredFolder = new MyObject("Armored Folder", "other", "unisex", "SOLD OUT", "Zhmurki", 40, "armoredFolder1", "armoredFolder2"),
    trousersKillBill = new MyObject("Kill Bill Trousers", "trousers", "female", "IN STOCK", "Kill Bill", 80, "trousersKillBill1", "trousersKillBill2"),
    jacketKillBill = new MyObject("Kill Bill Jacket", "jacket", "female", "SOLD OUT", "Kill Bill", 35, "jacketKillBill1", "jacketKillBill2"),
    swordKillBill = new MyObject("Kill Bill Sword", "accessories", "unisex", "IN STOCK", "Kill Bill", 25, "swordKillBill1", "swordKillBill2"),
    sweaterBrat = new MyObject("Bodrov's Sweater", "sweater", "male", "IN STOCK", "Brat", 55, "sweaterBrat1", "sweaterBrat2"),
    playerBrat = new MyObject("Bodrov's Player", "accessories", "unisex", "IN STOCK", "Brat", 120, "playerBrat1", "playerBrat2"),
    denimJacketBrat = new MyObject("Seller's Denim Jacket", "Jacket", "unisex", "SOLD OUT", "Brat", 45, "denimJacketBrat1", "denimJacketBrat2"),
    soapFightClub = new MyObject("Soap by Fight Club", "other", "unisex", "IN STOCK", "Fight Club", 10, "soapFightClub1", "soapFightClub2"),
    sunglassesFightClub = new MyObject("Fight Club Sunglasses", "accessories", "unisex", "IN STOCK", "Fight Club", 100, "sunglassesFightClub1", "sunglassesFightClub2"),
    jacketFightClub = new MyObject("Fight Club Red Jacket", "jacket", "male", "IN STOCK", "Fight Club", 300, "jacketFightClub1", "jacketFightClub2"),
    shoesHollywood = new MyObject("Bratt Pitt's Shoes", "shoes", "male", "SOLD OUT", "Once Upon a Time in Hollywood", 75, "shoesHollywood1", "shoesHollywood2"),
    brownJacketHollywood = new MyObject("Leo's Brown Jacket", "jacket", "male", "IN STOCK", "Once Upon a Time in Hollywood", 210, "brownJacketHollywood1", "brownJacketHollywood2");
// let topHollywood = new MyObject("Top Hippie Girl", "other", "unisex", "IN STOCK", "Once Upon a Time in Hollywood", 20, "topHollywood1", "topHollywood2");

let counter;
let total;

let products = [brownJacketHollywood, leatherJacket, pinkJacket, armoredFolder, trousersKillBill, jacketKillBill, swordKillBill, sweaterBrat, playerBrat, denimJacketBrat, soapFightClub, sunglassesFightClub, jacketFightClub, shoesHollywood];
let containerForProducts = document.getElementById("products");

for (let i = 0; i < products.length; i++) {
    let divItem = document.createElement('DIV');
    divItem.setAttribute("class", "item num");
    divItem.setAttribute("data-num", `${[i]}`);
    containerForProducts.appendChild(divItem);
    let divPhoto = document.createElement("DIV");
    divPhoto.setAttribute("class", "divPhoto");
    divItem.appendChild(divPhoto);
    let img1 = document.createElement("IMG");
    img1.setAttribute("src", `assets/catalog/${products[i].photo1}.jpg`);
    img1.setAttribute("class", "img1");
    divPhoto.appendChild(img1);
    let img2 = document.createElement("IMG");
    img2.setAttribute("src", `assets/catalog/${products[i].photo2}.jpg`);
    img2.setAttribute("class", "img2");
    divPhoto.appendChild(img2);
    let name = document.createElement('h2');
    name.setAttribute("class", "name");
    name.innerHTML = `${products[i].names}`;
    divItem.appendChild(name);
    let price = document.createElement('p');
    price.setAttribute("class", "right price");
    price.innerHTML = `Price: <span class="priceProduct">${products[i].price}</span>$`;
    divItem.appendChild(price);
    price.style.float = "right";
    let divAvailability = document.createElement("DIV");
    divAvailability.setAttribute("class", "right divAvailability");
    divAvailability.innerHTML = `${products[i].availability}`;
    divItem.appendChild(divAvailability);
    if (products[i].availability == "SOLD OUT")
        divAvailability.style.color = "red";
    let buttonForAdd = document.createElement("input");
    buttonForAdd.setAttribute("type", "button");
    buttonForAdd.setAttribute("class", "buttons right divButton");
    buttonForAdd.setAttribute("value", "Add to cart");
    buttonForAdd.setAttribute("data-id", `${[i]}`);
    if (products[i].availability == "SOLD OUT") {
        buttonForAdd.setAttribute("value", "Notify");
        buttonForAdd.setAttribute("onclick", "notify()");
        buttonForAdd.setAttribute("class", "right divButton");
    }
    divItem.appendChild(buttonForAdd);
}

let myButton = document.getElementsByClassName('buttons');
let ButtonLength = document.getElementsByClassName('buttons').length;
for (let i = 0; i < ButtonLength; i++) {
    myButton[i].addEventListener('click', adderToCart);
}
let itemCount = document.getElementById('itemCount'),
    localItemCount = localStorage.getItem('counter'),
    totalPrice = document.getElementById("totalPrice"),
    localPrice = localStorage.getItem('total');

function emptyCountChecker() {
    if (localStorage.length == 0) {
        itemCount.innerHTML = 0;
        totalPrice.innerHTML = 0;
    } else {
        itemCount.innerHTML = localStorage.getItem('counter');
        totalPrice.innerHTML = localStorage.getItem('total');
    }
}
emptyCountChecker();

let buttonCart = document.getElementById('imgCart');
buttonCart.addEventListener('mouseover', openCart);

function notify() {
    let email = prompt("Please, enter your email. We will tell about arrival.");
}

function getCartData() {
    return JSON.parse(localStorage.getItem('cart'));
}

function setCartData(o) {
    localStorage.setItem('cart', JSON.stringify(o));
    return false;
}

function setCountProductsAndPrice(name, countNum) {
    localStorage.setItem(name, countNum);
}

function adderToCart() {
    this.disabled = true;

    if (itemCount.innerHTML == 0) {
        counter = 0;
        setCountProductsAndPrice('counter', counter);
    }
    counter = Number(localStorage.getItem('counter')) + 1;
    setCountProductsAndPrice('counter', counter);
    itemCount.innerHTML = counter;

    let cartData = getCartData() || {},
        parentBox = this.parentNode,
        itemId = this.getAttribute('data-id'),
        itemTitle = parentBox.querySelector('.name').innerHTML,
        itemPrice = parentBox.querySelector('.priceProduct').innerHTML;

    if (totalPrice.innerHTML == 0) {
        total = 0;
        total += Number(itemPrice);
        setCountProductsAndPrice('total', total);
    } else {
        total = Number(localStorage.getItem('total')) + Number(itemPrice);
        setCountProductsAndPrice('total', total);
    }
    totalPrice.innerHTML = total;

    if (cartData.hasOwnProperty(itemId)) {
        cartData[itemId][0] += 1;
    } else {
        cartData[itemId] = [1, itemTitle];
    }
    if (!setCartData(cartData)) {
        this.disabled = false;
    }
    return false;
}

let cartCont = document.getElementById("itemInCart");

function openCart(e) {
    var cartData = getCartData(),
        totalItems = '';
    if (cartData !== null) {
        totalItems = '<table class="shopping_list">';
        for (var items in cartData) {
            totalItems += '<tr>';
            for (var i = 0; i < cartData[items].length; i++) {
                totalItems += '<td>' + cartData[items][i] + '</td>';
                if (!i % 2)
                    totalItems += '<td>' + "x" + '</td>';
            }
            totalItems += '</tr>';
        }
        totalItems += '</table>';
        cartCont.innerHTML = totalItems;
    } else {
        cartCont.innerHTML = 'No items in the cart!';
    }
    return false;
}

function clearStorage() {
    if (itemCount.innerHTML == 0) {
        alert("Your cart is empty:(");
    } else {
        let conf = confirm("Are sure? We hope you buy something in our shop:(");
        if (conf) {
            localStorage.clear();
            emptyCountChecker();
        }
    }
}
// pagination

let count = products.length;
let cnt = 6;
let cnt_page = Math.ceil(count / cnt);
let paginator = document.querySelector(".paginator");
let page = "";

page += "<span class='pagination' id='left'><</span>"
for (let i = 0; i < cnt_page; i++) {
    page += `<span data-page="${i*cnt}" data-number='${i+1}' class="pagination" id="page${i+1}">${i+1}</span>`;
}
page += "<span class='pagination' id='right'>></span>"
paginator.innerHTML = page;

let div_num = document.querySelectorAll(".num");
for (let i = 0; i < div_num.length; i++) {
    if (i < cnt) {
        div_num[i].style.display = "block";
    }
}

let main_page = document.getElementById("page1");
main_page.classList.add("paginator_active");

let paginationss = document.querySelectorAll(".pagination");
for (let i = 0; i < paginationss.length; i++) {
    paginationss[i].addEventListener('click', pagination);
}

function pagination() {
    let e = event;
    let target = e.target;
    let id = target.id;
    let numberForSwitch = main_page.dataset.number;

    if (target.tagName.toLowerCase() != "span") return;

    if (id == "left") {
        if (main_page.dataset.number == 1) return;
        else {
            styledForPagination(`page${Number(numberForSwitch)-1}`);

            let data_page = main_page.dataset.page;
            switcher(data_page);
        }
    } else if (id == "right") {
        if (main_page.dataset.number == cnt_page) return;
        else {
            styledForPagination(`page${Number(numberForSwitch)+1}`);

            let data_page = main_page.dataset.page;
            switcher(data_page);
        }
    } else {
        styledForPagination(id);

        let data_page = +target.dataset.page;
        switcher(data_page);
    }
}

function styledForPagination(elem) {
    main_page.classList.remove("paginator_active");
    main_page = document.getElementById(elem);
    main_page.classList.add("paginator_active");
}

function switcher(data) {
    let j = 0;
    for (let i = 0; i < div_num.length; i++) {
        let data_num = div_num[i].dataset.num;
        if (data_num <= data || data_num >= data)
            div_num[i].style.display = "none";
    }
    for (let i = data; i < div_num.length; i++) {
        if (j >= cnt) break;
        div_num[i].style.display = "block";
        j++;
    }
}