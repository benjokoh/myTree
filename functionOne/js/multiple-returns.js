function isfieldEmty(){
  const field = document.querySelector("#info")
  if (!field.value){
    return true;
  }else{
    return false;
  }
}

const fieldTest = isfieldEmty();

if (fieldTest){
  alert("Please provide your information.")
}