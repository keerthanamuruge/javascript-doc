function x(){
    let count = 0
    document.getElementById("hello").addEventListener("click", function xyz(){
        console.log("button clicked", ++count)
    })
}
x()
