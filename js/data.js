        import {  randomInteger, randomTypes, getRandomFloat, getFeatures, getTime, getPhotos    } from "/js/util.js";
        export {types, featuresValue, checkinTime, checkoutTime, locationValue, photosMassive, offers, guestsSumm, randomRooms };
        const types = ["palace", "flat", "house","bungalow"];

        let randomRooms = Math.floor(Math.random() * 10);
        const guestsSumm = Math.floor(Math.random() * 10);

        const featuresValue = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];

        const checkinTime = ["12:00", "13:00", "14:00"];
        const checkoutTime = ["12:00", "13:00", "14:00"];

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
        const photosMassive = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];

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