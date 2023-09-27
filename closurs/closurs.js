function demo(){
    b = 899
    function x(){
        a = 9
        function y(){
            console.log(a,b)
            data = document.querySelector(".callclosure")
            l1 = document.createElement("li");
            l1.textContent = a
            l2 = document.createElement("li")
            l2.textContent = b
            data.appendChild(l1)
            data.appendChild(l2)
        }
        a= 100
        return y;
    }
    return x()
}

function callclosure(){
    z = demo()
    z()
}
