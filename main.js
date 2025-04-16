let ism = prompt("Iltimos ismingizni kiriting");

if (ism === null || ism.trim() === "") {
    alert("Iltimos, ismingizni kiriting.");
    ism = prompt("Iltimos ismingizni qaytadan kiriting:");
}

let kattaKicik = +prompt(`Salom ${ism} ismingizni katta harf blan yozaymi yoki kicik \n 1) KATTA \n 2) kichik`);

const hs1 = document.createElement("h1");
document.body.appendChild(hs1);

if (kattaKicik == 1) {
    hs1.innerText = ism.toUpperCase();
} else if (kattaKicik == 2) {
    hs1.innerText = ism.toLowerCase();
} else if (isNaN(kattaKicik) || kattaKicik == "") {
    alert("Iltimos 1 yoki 2 ni kiriting");
    kattaKicik = +prompt(`Salom ${ism} ismingizni katta harf blan yozaymi yoki kicik \n 1) KATTA \n 2) kichik`);
    if (kattaKicik == 1) {
        hs1.innerText = ism.toUpperCase();
    } else if (kattaKicik == 2) {
        hs1.innerText = ism.toLowerCase();
    } else {
        alert("Noto'g'ri raqam kiritdingiz");
        hs1.innerText = ism;
    }
} else {
    alert("Noto'g'ri raqam kiritdingiz");
    hs1.innerText = ism;
}

const isConfirmed = confirm(`${ism} ismingiz nechta harfdan iboratligini bilishni istaysizmi?`);

const hs2 = document.createElement("h2");
document.body.appendChild(hs2);

if (isConfirmed) {
    hs2.innerText = `${ism} ismingiz ${ism.length} ta harfdan iborat.`;
} else {
    hs2.innerText = `${ism} gazini bosing😁`;
}
