function submitbtn() {
  
  const result = document.querySelector("#result");

  var birth = document.getElementById("birth")
    .value;

  var present = document.getElementById(
    "presentYear").value;
    
   result.innerHTML = present - birth;
}
