//Urey, Jesica Belen
//Rocha, Ignacio Jose
//Nieva, Ivan
//Torres, Pablo
//Fernández, Waldo

function solicitarNombreUsuario() {
    return prompt('Por favor ingrese su nombre de usuario:');
  }
  
  function solicitarSaldoCuenta() {
    while (true) {
      let monto = parseFloat(prompt(`${nombreUsuario}, por favor ingrese saldo en su cuenta`));
      if (!isNaN(monto) && monto > 0) {
        return monto;
      }
      mostrarMensaje(`⚠ El monto ingresado no es válido.\n\n⚠Por favor asegúrese de ingresar un monto válido.`);
    }
  
  }
  
  function solicitarMontoARetirar() {
    while (true) {
      let monto = parseInt(prompt(`Por favor ingrese el monto que desea retirar:`));
      if (!isNaN(monto) && monto > 0) {
        return monto.toFixed(2);
      }
      mostrarMensaje(`⚠ El monto ingresado no es válido.\n\n⚠ Por favor asegúrese dei ngresar un monto válido.`);
    }
  }
  
  function mostrarMensaje(mensaje) {
    alert(mensaje);
  }
  
  function realizarRetiro(saldo, monto) {
    return saldo - monto;
  }
  
  function verificarMontoRetiro(saldo, monto) {
    if (saldo >= monto) {
      mostrarMensaje(`✔ La operación se realizó con éxito.\n\nSe han retirado: $ ${monto} de su cuenta.\n\nEl saldo restante es: $ ${realizarRetiro(saldo, monto).toFixed(2)}`);
      mostrarMensaje(`${nombreUsuario}, Muchas gracias por utilizar nuestros servicios.\n\n📎 Recuerde retirar su tarjeta.`)
    } else {
      mostrarMensaje(`⚠ El saldo de su cuenta es insuficiente.\n\n⚠ No se pudo realizar el retiro de $ ${monto}\n\nSaldo disponible: $ ${saldo.toFixed(2)}`);
    }
  }
  
  let nombreUsuario = solicitarNombreUsuario();
  let saldoCuenta = solicitarSaldoCuenta();
  let montoARetirar = solicitarMontoARetirar();
  
  verificarMontoRetiro(saldoCuenta, montoARetirar);
