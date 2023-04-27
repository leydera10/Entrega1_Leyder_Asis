
alert ('Bienvenidos al Servicio de ayuda Exito')

let Control = true
let seleccion
let comentarios

while (Control === true) {
    
    let nombre = prompt('Ingrese su nombre : ')

    alert ('Bienvenidos al Servicio de ayuda Exito '  + nombre + ' !! ')
    seleccion = parseInt( prompt('Ingrese el numero correspondieten a la Opcion de su interes: \n 1) Pedido conforme \n 2) Pedido en mal estado \n 3) Aun no le ha llegado el pedido '))

    opcionnes()

    Control =  confirm ('Tienes otra inquietud ?')

    comentarios = prompt(nombre +' Por favor Podrias ingresar un comentario segun su experiencia ')

    alert ("Muchas gracias por tu visita "+ nombre )
}


function opcionnes (){

    switch (seleccion) {
        
        case 1 :
            alert("Nos Alegra mucho saber que tu pedido llego a tus manos en las mejores condiciones" );
            break;
        case 2 :
            alert("Nos entristeze mucho saber que tu pedido llego en mal estados \nTenemos las siguientes opciones para ti : \n\n 1) Puedes acercarte al punto de venta mas cercano para brindate una solucion \n 2) comunicate con nosotros al Cel 32154554845 o al correo electronico lallalala@exito.com.co");
            
            break;
            
        case 3 :
            alert("Recuerda que la entrega se realizara 3 Dias habiles despues de la compra" );
            break;
        
        default:
            alert("La Opcion seleccionada no es Valida, por favor ingresa opciones del 1 a 3 ");
        break;
    }   
}