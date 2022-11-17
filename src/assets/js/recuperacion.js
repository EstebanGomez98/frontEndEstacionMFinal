function recuperarComtraseña(){
    const email = document.getElementById("correoRecu").value;
    if (email !== "") {
        const apicorreo = fetch(urlBase+"/Email/sendEmail", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "destinatario": email,
                "aasunto": "Recuperar contraseña",
                "mensaje": "Recuperar contraseña",
                "esHtml": false
            }) // body data type must match "Content-Type" header
          }).then((respuesta) => respuesta.json())
          console.log(apicorreo);
          Promise.all([apicorreo]).then((datos) => {
            console.log(datos[0].token);   
             if(datos[0].respuesta == 1){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: datos[0].mensaje,
                    showConfirmButton: false,
                    timer: 2000
                });
             }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: datos[0].mensaje,
                    showConfirmButton: false,
                    timer: 2000
                });
             }
          }).catch(miError=>{console.log(miError);
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Error de servidor',
                showConfirmButton: false,
                timer: 2000
            });
        });
    }
}
