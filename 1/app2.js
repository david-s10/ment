(() =>{
    
    let selectOne = document.querySelector('.select-one__wrapper')
    let selectTwo = document.querySelector('.select-two__wrapper')
    let outOne = document.querySelector('.out-one__wrapper');
    let outTwo = document.querySelector('.out-two__wrapper');


    for(let i = 0; i < measurement.length; i++){

        selectOne.innerHTML += `<option>${measurement[i].distance.unit}</option>`
        selectTwo.innerHTML += `<option data-v="${measurement[0].convertTo[i].value}">${measurement[0].convertTo[i].unit}</option>`
        console.log(measurement[0].convertTo[i].unit)


    }

    outOne.addEventListener('input', function(){

        outTwo.value = outOne.value * selectTwo.dataset.v

    });

    function changeId(){

        selectTwo.innerHTML = ``
        let selectId = selectOne.options.selectedIndex
        
        for(let i = 0; i < measurement.length; i++){
            
            selectTwo.innerHTML += `<option data-v="${measurement[selectId].convertTo[i].value}">${measurement[selectId].convertTo[i].unit}</option>`

        }
        console.log(measurement.length)
        changeData()

    }

    
    
    function changeData(){
        const selectedOption = selectTwo.options[selectTwo.selectedIndex];
        selectTwo.dataset.v = selectedOption.dataset.v
        
    }
    

    changeData()
    selectOne.addEventListener('change', changeId);
    selectTwo.addEventListener('change', changeData)

    


})();