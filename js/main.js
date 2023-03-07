
let sendBtn = document.getElementById('send');

let form = document.getElementById('form');



sendBtn.addEventListener('click', (e) => {
    
    e.preventDefault()

    let nombre = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone')
    let asunto = document.getElementById('asunto')
    let mensaje = document.getElementById('mensaje');

    //Set Value And LocalStorage
    
    nombre = nombre.value;
    localStorage.setItem('name', nombre);

    email = email.value;
    localStorage.setItem('email', email);

    phone = phone.value;
    localStorage.setItem('phone', phone);

    asunto = asunto.value;
    localStorage.setItem('asunto', asunto);

    mensaje = mensaje.value;
    localStorage.setItem('mensaje', mensaje);

    setTimeout(() =>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enviado con exito',
            showConfirmButton: false,
            timer: 1000
          })
        form.reset()
      }, 2000)

});