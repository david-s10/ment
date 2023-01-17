import distance from './object.json' assert {type: 'json'}

// імпорт :\

(function(){

    // отримую константи

    const converter = document.querySelector('.q1__select'); // селект 1 
    const converter2 = document.querySelector('.q1__select-2'); // селект 2 
    const inputValue = document.querySelector('.input__value'); // інпут
    const btnRes = document.querySelector('.result'); // кнопка
    const result = document.querySelector('.knowRes'); // результат

    // виводжу масив з Джейсона 1

    for (let index = 0; index < distance.length; index++) {
        
        const namesValue = distance[index].value; // отримую валує
        const names = distance[index]; 
        let convOpt = document.createElement('option'); // створюю елемент який потрапить в селект
        converter.appendChild(convOpt); // тепер точно потрапить в селект
        convOpt.classList.add('opt'); // присвоюю йому класс
        convOpt.value = namesValue // даю валує  
        convOpt.innerHTML = names.unit; // тепер можна побачити цей оптіон але тільки у лайві О_о
        
    }

    // виводжу масив з Джейсона 2
    
    distance.forEach(names2 => { // теж саме але тількі форІч
    let convOpt = document.createElement('option');
    converter2.appendChild(convOpt);
    convOpt.value = names2.value
    convOpt.classList.add('opt');
    convOpt.innerHTML = names2.unit;
    });

    // формула вимірювання

    function getRes(){
        if(converter.value == 'mm' && converter2.value == 'mm'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'm' && converter2.value == 'm'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'cm' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'km' && converter2.value == 'km'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'in' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 1;
        }
        if(converter.value == 'ft' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 1;
        }

        // конвертація самого на себе

        if(converter.value == 'mm' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value / 100;
        }
        if(converter.value == 'mm' && converter2.value == 'm'){
            result.innerHTML = inputValue.value / 1000;
        }
        if(converter.value == 'mm' && converter2.value == 'km'){
            result.innerHTML = inputValue.value / 1000000;
        }
        if(converter.value == 'mm' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 0.039;
        }
        if(converter.value == 'mm' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 0.0032;
        }

        // -------------

        if(converter.value == 'm' && converter2.value == 'mm'){
            result.innerHTML = inputValue.value * 1000;
        }
        if(converter.value == 'm' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 100;
        }
        if(converter.value == 'm' && converter2.value == 'km'){
            result.innerHTML = inputValue.value * 0.001;
        }
        if(converter.value == 'm' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 39.37;
        }
        if(converter.value == 'm' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 3.28;
        }

        // -----------

        if(converter.value == 'cm' && converter2.value == 'mm'){
            result.innerHTML = inputValue.value * 100;
        }
        if(converter.value == 'cm' && converter2.value == 'm'){
            result.innerHTML = inputValue.value / 100;
        }
        if(converter.value == 'cm' && converter2.value == 'km'){
            result.innerHTML = inputValue.value / 100000;
        }
        if(converter.value == 'cm' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 0.393;
        }
        if(converter.value == 'cm' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 0.032;
        }

        // ----------

        if(converter.value == 'km' && converter2.value == 'mm'){
            result.innerHTML = inputValue.value * 1000000;
        }
        if(converter.value == 'km' && converter2.value == 'm'){
            result.innerHTML = inputValue.value * 1000;
        }
        if(converter.value == 'km' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 100000;
        }
        if(converter.value == 'km' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 39370.1;
        }
        
        if(converter.value == 'km' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 3280.84;
        }

        // ----------

        if(converter.value == 'in' && converter2.value == 'mm'){
            result.innerHTML = inputValue.value * 25.4;
        }
        if(converter.value == 'in' && converter2.value == 'm'){
            result.innerHTML = inputValue.value * 0.0254;
        }
        if(converter.value == 'in' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 2.54;
        }
        if(converter.value == 'in' && converter2.value == 'km'){
            result.innerHTML = inputValue.value * 0.393;
        }
        
        if(converter.value == 'in' && converter2.value == 'ft'){
            result.innerHTML = inputValue.value * 0.083;
        }
        
        // ---------

        if(converter.value == 'ft' && converter2.value == 'mm'){
            result.innerHTML = inputValue.value * 304.8;
        }
        if(converter.value == 'ft' && converter2.value == 'm'){
            result.innerHTML = inputValue.value * 0.304;
        }
        if(converter.value == 'ft' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 30.48;
        }
        if(converter.value == 'ft' && converter2.value == 'cm'){
            result.innerHTML = inputValue.value * 0.032;
        }
        if(converter.value == 'ft' && converter2.value == 'in'){
            result.innerHTML = inputValue.value * 12;
        }
           
    }

    // ----- кнопка щоб отримати результат 

    btnRes.addEventListener('click', getRes);
    

})();

