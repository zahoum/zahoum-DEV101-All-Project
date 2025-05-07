            //we ned to de 2 function

            let title = document.getElementById('title');
            let price = document.getElementById('price');
            let taxes = document.getElementById('taxes');
            let ads = document.getElementById('ads');
            let discount = document.getElementById('discount');
            let total = document.getElementById('total');
            let count = document.getElementById('count');
            let category = document.getElementById('category');
            let submit = document.getElementById('submit');
            
            let mood = 'create';
            let temp;
            
            //FIRST is to get total
            function getTotal()
            {
                // console.log('done') CHECK IF Onkyup 5DAma hitach ila srebna f clavier tay5rej 5a9em l INput
                if(price.value != ''){
                    let result = (+price.value +  +taxes.value +  +ads.value) -  +discount.value;// hna drna + bach nredo input li tatkoun string l int and float pour nhsbouhoum f total tu est comprais
                    total.innerHTML = result;
                    total.style.background = '#fff9';
                }
                else{
                    total.innerHTML=''
                    total.style.background = '#74342f';
                }
                
            }
    
    
    //SECAND is to create PRODUCT and count
    let dataPro;
    if(localStorage.product != null){
        dataPro = JSON.parse(localStorage.product)
    }else{
        dataPro = [];
    }
    
    
    submit.onclick = function () {
        // Check inputs
            let newPro = {
                title: title.value.trim(),
                price: price.value.trim(),
                taxes: taxes.value.trim(),
                ads: ads.value.trim(),
                discount: discount.value.trim(),
                total: total.innerHTML,
                count: count.value.trim(),
                category: category.value.trim(),
            };
    
            if (mood === 'create') {
                if (
                    title.value.trim() !== '' &&
                    price.value.trim() !== '' &&
                    category.value.trim() !== '' &&
                    +count.value >= 1
                ) {
                if (newPro.count > 1) {
                    for (let i = 0; i < newPro.count; i++) {
                        dataPro.push(newPro);
                    }
                } else {
                    dataPro.push(newPro);
                }
            } else {
                alert("⛔ Please fill in the required fields correctly:\n- Title, Price, and Category are required\n- Count must be at least 1");
            }
            }
             else {
                if (
                    title.value.trim() !==dataPro[temp].title ||
                    price.value.trim() !== dataPro[temp].price ||
                    category.value.trim() !== dataPro[temp].category &&
                    +count.value >= 1
                ) {
                dataPro[temp] = newPro;
                mood = 'create';
                submit.innerHTML = 'Create';
                count.style.display = 'block';
            }else {
                    alert("YOU NEED TO CHANGE SOMTHING 😊 ");
                }
            }
    
    
            localStorage.setItem('product', JSON.stringify(dataPro));
            clearData();
            showData();
    
    };
    
    
    
    
    //save local storage:
       
    //clear inputs
    function clearData(){
        title.value='';
        price.value='';
        taxes.value='';
        ads.value='';
        discount.value='';
        total.innerHTML='';
        count.value='';
        category.value='';
    
        // reset borders to default
        resetInputBorders();
    
    }
    
    
    
    
    // read
    
    function showData(){
        getTotal()
        let table= ''
        for (let i = 0 ; i < dataPro.length ;i++){
            table += `
            <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button Onclick="updateData(${i})" id="update">update</button></td>
                <td><button id="delete" onclick="deleteData(${i})"> delete</button></td>
        
             </tr>  
            `
            
    
            
        }
    
        document.getElementById('tbody').innerHTML = table;
        let btnDelete = document.getElementById('deleteAll');
        if (dataPro.length > 0){
                btnDelete.innerHTML=`
    
                <button onclick="deleteAll()">Delete All(${dataPro.length})</button>
                
                `
            }else{
                btnDelete.innerHTML = '';
            }
    }
    showData()
    
    
    
    //delete
        function deleteData(i){
                dataPro.splice(i,1);
                localStorage.product = JSON.stringify(dataPro)
                showData()
        }
        function deleteAll(){
                localStorage.clear()
                dataPro.splice(0)
                showData()
        }
        
           
    
    
    //update
    
    function updateData(i){
     
            title.value = dataPro[i].title;
            price.value = dataPro[i].price;
            taxes.value = dataPro[i].taxes;
            ads.value = dataPro[i].ads;
            discount.value = dataPro[i].discount;
            getTotal();
            count.style.display = 'none';
            category.value = dataPro[i].category;
            submit.innerHTML = 'Update';
            mood = 'Update';
            temp = i ;
            scroll({
                top:0,
                behavior:'smooth'
                
            })
    
    }
    
    
    //serch
    
    
    function getSearchMood(id)
    
    {
        
        if(id == 'searchTitle') {
            searchMood = 'title';
            search.placeholder = ' Serch By Title ';
        }else {
            searchMood = 'category';
            search.placeholder = ' Serch By Category ';
        }
        search.focus();
            // console.log(searchMood);
    
    }
        function searchData(value){
            let table = '';
            for (let i = 0; i < dataPro.length; i++) {
                if (searchMood == 'title') {
                    if (dataPro[i].title.toLowerCase().includes(value.toLowerCase())) {
                        table += `
                            <tr>
                                <td>${i}</td>
                                <td>${dataPro[i].title}</td>
                                <td>${dataPro[i].price}</td>
                                <td>${dataPro[i].taxes}</td>
                                <td>${dataPro[i].ads}</td>
                                <td>${dataPro[i].discount}</td>
                                <td>${dataPro[i].total}</td>
                                <td>${dataPro[i].category}</td>
                                <td><button onclick="updateData(${i})" id="update">update</button></td>
                                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                            </tr>
                        `;
                    }
                } else {
                    if (dataPro[i].category.toLowerCase().includes(value.toLowerCase())) {
                        table += `
                            <tr>
                                <td>${i}</td>
                                <td>${dataPro[i].title}</td>
                                <td>${dataPro[i].price}</td>
                                <td>${dataPro[i].taxes}</td>
                                <td>${dataPro[i].ads}</td>
                                <td>${dataPro[i].discount}</td>
                                <td>${dataPro[i].total}</td>
                                <td>${dataPro[i].category}</td>
                                <td><button onclick="updateData(${i})" id="update">update</button></td>
                                <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                            </tr>
                        `;
                    }
                }
            }
            document.getElementById('tbody').innerHTML = table;
        }
        
    
    
    //clean data  
    function validateInput(input) {
        if (
            input.value.trim() === '' ||
            (input.id === 'count' && +input.value < 1)
        ) {
            input.style.border = '2px solid red';
            return false;
        } else {
            input.style.border = '1px solid #ccc';
            return true;
        }
    }
    
    
    function resetInputBorders() {// les bordur yrj3o mn loun lhmer selectioner l lwn l2asli dyalhoum
        let inputs = [title, price, taxes, ads, discount, count, category];
        inputs.forEach(input => {
            input.style.border = 'none';
        });
    }