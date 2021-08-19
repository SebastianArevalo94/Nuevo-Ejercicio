const getData = () => {
    // Funcion para abir la pestaña
    const open = () =>{
        window.open("./index2.html")
    }
  // Usuario y Contraseña correctos
  let trueUsername = "Sebastian";
  let truePassword = "hola1234";
  // Usuario y Contraseña digitados por el usuario
  let inputUsername = document.getElementById("username").value;
  let inputPassword = document.getElementById("password").value;
  //Variable verificacion username y password
  let userPass;
    // Verficicacion si estan los campos llenos
  if (inputUsername === "" || inputPassword === "") {
    alert("Error. Digite todos los campos.");
  } else {
      //Verificacion si es son correctos user y pass
    if (inputUsername === trueUsername && inputPassword === truePassword) {
      //Si los datos (user y pass) son correctos 
        userPass = true;
        // Llamado a la funcion open para abrir la pestaña
        open()
    }
    else{
        //Si los datos (user y pass) son incorrectos 
        userPass = false;
        alert("Error. El usuario o la contraseña no son correctos")
    }
  }
};
