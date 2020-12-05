let recomendator = document.getElementById('recomended');
let randomMassiv;

randomMassiv = products.filter(function(product) {
    return product.availability.includes("IN STOCK");
});

randomMassiv = randomMassiv.sort(function() {
    return 0.5 - Math.random();
});

let divRec = document.createElement('div');
divRec.setAttribute("id", "rec");
divRec.innerHTML = `<h2 class="name rech2">${randomMassiv[0].names}</h2><br>`;
let imgRec = document.createElement('img');
imgRec.setAttribute("src", `assets/catalog/${randomMassiv[0].photo1}.jpg`);
imgRec.setAttribute("class", "recImg");
divRec.appendChild(imgRec);
recP = document.createElement('p');
recP.innerHTML = `Price: ${randomMassiv[0].price}$`;
divRec.appendChild(recP);
recomendator.appendChild(divRec);