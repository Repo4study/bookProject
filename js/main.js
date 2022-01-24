  import {   randomInteger, randomTypes, getRandomFloat, getFeatures, getTime, getPhotos,    } from "/js/util.js";
    import {offers} from "/js/data.js";

  let p = document.querySelector('#card');
let newNode = p.content.cloneNode(true);

let map = document.querySelector('#map-canvas');

 map.appendChild(newNode);

let popUp = map.querySelector('.popup');/*------------popup in map-canvas*/
let popupTitle = map.querySelector('.popup__title');

popupTitle.innerHTML = offers[1].offer.title;
console.log(popupTitle);

let popupTextAddress = map.querySelector('.popup__text--address');
popupTextAddress.innerHTML = offers[1].offer.address;

let popupPrice = map.querySelector('.popup__text--price');
popupPrice.innerHTML = offers[1].offer.price + `${"/₽ за ночь"}`;
console.log(popupPrice);

let popupType = map.querySelector('.popup__type');/*------------??? сопоставить с подписями?*/
popupType.innerHTML = offers[1].offer.type;

let area = map.querySelector('.popup__text--capacity');
area.innerHTML = offers[1].offer.rooms + `${'комнаты для'}` + offers[1].offer.guests + `${'гостей'}`; /*------------??? 0 гостей или 0 комнат*/

let checks = map.querySelector('.popup__text--time');
 checks.innerHTML = `${'Заезд после'}`+ offers[1].offer.checkin + `${','}` + `${'выезд до'}` + offers[1].offer.checkout; 

let houseFeatures = map.querySelector('.popup__features'); 
houseFeatures.innerHTML = offers[1].offer.features;
 console.log(houseFeatures);

 let popupDescription = map.querySelector('.popup__description');
 popupDescription.innerHTML = offers[1].offer.description;

 let popupPhotosBlock = map.querySelector('.popup__photos');
 let popupPhoto = map.querySelector('.popup__photo');
 popupPhoto.src = offers[1].offer.photos;
 




















