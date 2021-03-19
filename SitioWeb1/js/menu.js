let btnmenu = document.getElementById('btnmenu'); 
let menu = document.getElementById('menu'); 

btnmenu.addEventListener('click', function(){
   'use strict';
    menu.classList.toggle('mostrar');
    
});

/*function validar(){
    var nombre, apellido,direccion,telefono,email,expresion;
    
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    direccion = document.getElementById("direccion").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    
    if(nombre === "" || apellido === "" || direccion === "" || telefono === "" || email === ""){
        alert("Todos los campos son necesarios");
        return false;
    }
    
}*/