function goToTheCoffeeShop(drink, pastry){
    //alert(`Your ${drink}and ${pastry}are on the way,please....!`);

    //  Select the <main> HTML element
 const main = document.querySelector("main");
 main.innerHTML = `<h2>
                      <p>
                          Your ${drink} and ${pastry} are the way.Please be patient with us, thank you.!!</p></h2>`;
}

goToTheCoffeeShop("Expresso","cussaint");

