        import {  randomRooms, guestsSumm,  types, featuresValue, checkinTime, checkoutTime, locationValue, photosMassive, offers } from "/js/data.js";
        export { randomInteger, randomTypes, getFeatures, getTime, getRandomFloat, getPhotos};

        console.log(randomRooms, guestsSumm);

        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        };
            function randomTypes(array) {
                const number = randomInteger(0, array.length - 1);
                return array[number];
            };

            function getFeatures(features) {
                const indexFeatures = randomInteger(0, features.length);
                return features.splice(0, indexFeatures);
            };

            function getTime(time) {
                const checksValue = randomInteger(0, time.length - 1);
                return time[checksValue];
            };

            function getRandomFloat(min, max) {
                return Math.random() * (max - min) + min;
            };

            function getPhotos(photos) {
                const indexPhotos = randomInteger(0, photos.length);
                return photos.splice(0, indexPhotos);
            };


            console.log(offers);
