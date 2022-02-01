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

let someFeatures = offers[1].offer.features;

let featuresWrapper = document.querySelector(".popup__features");
let newFeatures = someFeatures.map(constFeatures => {
  return`<li class="popup__feature popup__feature--${constFeatures}">${constFeatures}</li>`
   }).join('');
   featuresWrapper.innerHTML = newFeatures;
   console.log(featuresWrapper);

 let popupDescription = map.querySelector('.popup__description');
 popupDescription.innerHTML = offers[1].offer.description;

 let popupPhotosBlock = map.querySelector('.popup__photos');
 let popupPhoto = map.querySelector('.popup__photo');
 popupPhoto.src = offers[1].offer.photos;

 let photoObj = offers[1].offer.photos;

 let popPhotos = document.querySelector(".popup__photos");
    let newPhotos = photoObj.map(photo => {
    return`<img src='${photo} ' class="popup__photo" width="45" height="40" alt="Фотография жилья">`
     }).join('');
 
   popPhotos.innerHTML  = newPhotos;
   console.log(popPhotos);
 
 

 let popupAvatar = map.querySelector('.popup__avatar');
 popupAvatar.innerHTML = offers[1].author.avatar;
 console.log(popupAvatar);


 const type = document.querySelector('#type')

 const price= document.querySelector('#price')
 
 
 
 function validation(evt){
 console.log(evt.target.value)
   if (type.value === 'flat' &&  evt.target.value <= 1000) {
     evt.target.setCustomValidity('1000');
   }
   else if (type.value === 'house' && evt.target.value  <= 2000){
     evt.target.setCustomValidity('The price cannot be less 2000 ');
   }
   else if (type.value === 'palace' && evt.target.value  <= 5000){
     evt.target.setCustomValidity('The price cannot be less 5000');
     console.log(price);
   }
   else if (type.value === 'bungalow' && evt.target.value  <= 7000){
    evt.target.setCustomValidity('The price cannot be less 7000');
  }
   else {
     evt.target.setCustomValidity('');
     alert('Correct!');
   }
   price.reportValidity();
 
 }
 price.addEventListener('change',validation);


 const timeIn = document.getElementById("timein");
const timeOut = document.getElementById("timeout");

timeIn.addEventListener("change", time);
console.log(timeOut.options)

    function time (evt){
    const selectedValue= evt.target.value;
    console.log(+selectedValue)
     if(selectedValue == '12:00'){
timeOut.options[1].selected = true
     } else if (selectedValue == '13:00'){
      timeOut.options[2].selected = true
           } 
           else if (selectedValue == '14:00'){
            timeOut.options[0].selected = true
                 } 
  
}



















