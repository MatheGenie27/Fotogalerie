let images = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "14.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "13.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "9.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
];

let previewImages = [
  "0p.jpg",
  "1p.jpg",
  "2p.jpg",
  "3p.jpg",
  "4p.jpg",
  "5p.jpg",
  "14p.jpg",
  "6p.jpg",
  "7p.jpg",
  "8p.jpg",
  "13p.jpg",
  "10p.jpg",
  "11p.jpg",
  "12p.jpg",
  "9p.jpg",
  "14p.jpg",
  "15p.jpg",
  "16p.jpg",
  "17p.jpg",
  "18p.jpg",
  "19p.jpg",
  "20p.jpg",
  "21p.jpg",
  "22p.jpg",
  "23p.jpg",
  "24p.jpg",
];

let actualImage;

function load() {
  container = document.getElementById("imgContainer");
  console.log(container);

  for (let i = 0; i < images.length; i++) {
    console.log(images[i]);

    container.innerHTML += `
            <div onclick="openImage(${i})" id ="img${i}" class="imgBox"><img src="./ressources/pimg/${previewImages[i]}"> </div>
        `;
  }
}

function openImage(i) {
  console.log(`Öffne Bild Nr ${i}`);
  show("popup");
  img = document.getElementById("middle");
  img.innerHTML += `
        <img class="imgBig" src="./ressources/img/${images[i]}">
    `;
  actualImage = i;
  console.log(popup);
}

function closeImage() {
  hide("popup");

  img = document.getElementById("middle");
  img.innerHTML = "";
}

function hide(id) {
  let element = document.getElementById(id);

  element.classList.remove("animationEinblenden");
  element.classList.add("animationAusblenden");
  setTimeout(noDisplay, 495);

  function noDisplay() {
    element.classList.add("noDisplay");
  }
}

function show(id) {
  let element = document.getElementById(id);

  element.classList.remove("noDisplay");
  element.classList.remove("animationAusblenden");
  element.classList.add("animationEinblenden");
}

function nextImage() {
  console.log("nächstesBild");

  i = actualImage;
  if (i == images.length - 1) {
    i = 0;
  } else {
    i++;
  }
  img = document.getElementById("middle");
  img.innerHTML = "";
  img.innerHTML += `
        <img class="imgBig" src="./ressources/img/${images[i]}">
    `;
  actualImage = i;
}

function previousImage() {
  console.log("vorheriges Bild");
  i = actualImage;
  if (i == 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  img = document.getElementById("middle");
  img.innerHTML = "";
  img.innerHTML += `
        <img class="imgBig" src="./ressources/img/${images[i]}">
    `;
  actualImage = i;
}
