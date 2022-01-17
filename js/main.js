
let randomRooms = Math.floor(Math.random() * 10);
const guestsSumm = Math.floor(Math.random() * 10);
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
const types = ["palace", "flat", "house","bungalow"];
function randomTypes(array) {
  const number = randomInteger(0, array.length - 1);
  return array[number];
}

const featuresValue = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];
function getFeatures(features) {
  const indexFeatures = randomInteger(0, features.length);
  return features.splice(0, indexFeatures);

}
const checkinTime = ["12:00", "13:00", "14:00"];
const checkoutTime = ["12:00", "13:00", "14:00"];
function getTime(time) {
  const checksValue = randomInteger(0, time.length - 1);
  return time[checksValue];
}
const locationValue = {
  x : {
    min : 35.65000,
    max : 35.70000,
  },
  y : {
    min : 139.70000,
    max : 139.80000,
  },
}
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
const photosMassive = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
  function getPhotos(photos) {
    const indexPhotos = randomInteger(0, photos.length - 1);
    return photos.splice(0, indexPhotos);
  };

const offers = new Array(10).fill(null).map(item => ({
  author : {
    avatar: `img/avatars/user0${randomInteger(1, 8)}.png`,
  },
  offer : {
    title : "Отличная квартира",
    address : "35.65000, 139.70000",
    price : 5000,
    type : randomTypes(types),
    rooms : randomRooms,
    guests : guestsSumm,
    checkin : getTime(checkinTime),
    checkout : getTime(checkoutTime),
    features : getFeatures(featuresValue),
    description : "Описание помещения",
    photos : getPhotos(photosMassive),
  },
  location : {
    x : getRandomFloat(locationValue.x.min, locationValue.x.max),
    y : getRandomFloat(locationValue.y.min, locationValue.y.max),
  },
}));
console.log(offers);


