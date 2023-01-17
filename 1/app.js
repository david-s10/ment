(function(){
    
   

    
        
        const outOne = document.querySelector('.out-one__wrapper');
        const outTwo = document.querySelector('.out-two__wrapper');
        const selectOne = document.querySelector('.select-one__wrapper'); 
        const selectTwo = document.querySelector('.select-two__wrapper'); 
        let step = 0;
        
        measurement.forEach((item) => {
            
            selectOne.innerHTML += `<option data-unit="${item.distance.id}" value="${item.distance.value}">${item.distance.unit}</option>`
            
        });

            

            function changeSelect(){
                
                selectTwo.innerHTML = ''
                const selectedOption = selectOne.options[selectOne.selectedIndex];
                step = selectedOption.dataset.unit
                
                measurement[step].convertTo.forEach(item => {
                    selectTwo.innerHTML += `<option value="${item.value}">${item.unit}</option>`
                    
                });
            }

            changeSelect();
            outOne.addEventListener('input', function(e){
            
            // outOne.value = selectOne.value / selectTwo.value
            outTwo.value = outOne.value * selectTwo.value
            
        })
            selectOne.addEventListener('change', changeSelect)
            

        


})()