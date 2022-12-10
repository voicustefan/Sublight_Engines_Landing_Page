function contact(){
    let name = document.forms["contactForm"]["name"].value;
    if (name == ""){
        alert("Name must be filled out");
        return false;
    }
}

// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }
