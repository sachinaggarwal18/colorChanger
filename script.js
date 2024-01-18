const buttons = document.querySelectorAll ('.button')
const body = document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if(e.target === orange){
            body.style.backgroundColor = "orange";
        }

        if(e.target === violet){
                body.style.backgroundColor = "violet";
        }
         if(e.target === lightskyblue){
                body.style.backgroundColor = "lightskyblue"
        }
            
        if(e.target === green){
                body.style.backgroundColor = "green"
        }

    })
});