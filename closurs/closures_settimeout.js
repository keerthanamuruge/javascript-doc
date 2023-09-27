function var_settimeout(){
    for (var i=1;i<5;i++){
        setTimeout(function(){
            console.log(i);
            data = document.querySelector(".var_settimeout")
            l1 = document.createElement("li")
            l1.textContent = i
            data.appendChild(l1)
        }, i*3000);
    }
    
    console.log("keerthu")
    data = document.querySelector(".var_settimeout")
    l1 = document.createElement("li")
    l1.textContent = "keerthu"
    data.appendChild(l1)
}

function var_settimeout_prop(){
    for (var i=1;i<5;i++){
        function close(x){
            setTimeout(function(){
                console.log(x);
                data = document.querySelector(".var_settimeout_prop")
                l1 = document.createElement("li")
                l1.textContent = x
                data.appendChild(l1)
            }, i*3000);
        }
        close(i)
        
    }
    console.log("keerthu")
    data = document.querySelector(".var_settimeout_prop")
    l1 = document.createElement("li")
    l1.textContent = "keerthu"
    data.appendChild(l1)
}

function let_settimeout(){
    for (let i=1;i<5;i++){
        setTimeout(function(){
            console.log(i);
            data = document.querySelector(".let_settimeout")
            l1 = document.createElement("li")
            l1.textContent = i
            data.appendChild(l1)
        }, i*3000);
    }
    
    console.log("keerthu")
    data = document.querySelector(".let_settimeout")
    l1 = document.createElement("li")
    l1.textContent = "keerthu"
    data.appendChild(l1)
}