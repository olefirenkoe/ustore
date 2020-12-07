let divPhoto = document.getElementById('photo');
let heroMassiv = ["killbill", "brat", "fightClub", "onceUpon", "zhmurki", "pulp"];
let banner;
let i = 0;

function makeBannerAgain(a) {
    i = a;
    banner = setInterval(function() {
        divPhoto.innerHTML = `<img class="img" src="assets/images/${heroMassiv[i]}.jpg" alt="Персонаж Фильма">`;
        if (i == 5) {
            i = -1;
        }
        i++;
    }, 2500);

}

makeBannerAgain(0);