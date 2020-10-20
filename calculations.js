function calculate(){
        let a = document.getElementById("numOne").value;
        let b = document.getElementById("numTwo").value;
        a = parseInt(a);
        b = parseInt(b);
        if (isNaN(a + b)){
            document.getElementById("total").innerHTML = "Invalid Input"
        } else {
            document.getElementById("total").innerHTML = (a + b);
        }
    }


