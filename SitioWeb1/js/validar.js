function validar(){
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
    
}
console.error(validar());