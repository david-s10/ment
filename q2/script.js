import data from './sort.json' assert {type: 'json'}

(function(){
    const list = data.data
    const table = document.querySelector('._table')

    function sortByEmail(){
        list.sort((a, b) => a.user > b.user ? 1 : -1);

        table.innerHTML = `

            <tr>
                <th>user</th>
                <th>rating</th>
                <th>disabled</th>
            </tr>
        `
        
        list.filter(item => {
            if(document.querySelector('.check').checked && item.disabled == true){
                return false
            }
            table.innerHTML += `
            <tr>
                <td>${item.user}</td>
                <td>${item.rating}</td>
                <td>${item.disabled}</td>
            </tr>
        `;

        })
           
    }

    function sortByRaring(){
        list.sort((a, b) => a.rating > b.rating ? 1 : -1);
        table.innerHTML = `
        
                <tr>
                    <th>user</th>
                    <th>rating</th>
                    <th>disabled</th>
                </tr>
             `
             list.filter(item => {
                if(document.querySelector('.check').checked && item.disabled == true){
                    return false
                }
                table.innerHTML += `
                <tr>
                    <td>${item.user}</td>
                    <td>${item.rating}</td>
                    <td>${item.disabled}</td>
                </tr>
            `;
    
            })
    }

    document.querySelector('.mail-s').addEventListener('click', sortByEmail)
    document.querySelector('.rating-s').addEventListener('click', sortByRaring)
})();

