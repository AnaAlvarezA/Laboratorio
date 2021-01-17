function mostrarValoracion() {
    let valor = Number(document.getElementById("rango").value); /* document.getElementById("rango").value devuelve un string, 
                                                                que, en este caso, hay que convertir a number, para tener un valor numérico */
    
    alert("Has valorado con "+ valor +" puntos");
 }

function mostrarCuenta(){
    let cPais, cIban, cEntidad, cSucursal, cDc, numeroCuenta; // considero, que como string, puedo implementar la funcionalidad requerida 
    
    // se recogen todos los valores introducidos por el usuario
    cPais = document.getElementById("pais").value;
    cIban = document.getElementById("iban").value;
    cEntidad = document.getElementById("entidad").value;
    cSucursal = document.getElementById("sucursal").value;
    cDc = document.getElementById("dc").value;
    numeroCuenta = document.getElementById("cuenta").value;

    alert("Le informamos que su cuenta bancaria es: "+ cPais+cIban+"-"+cEntidad+"-"+cSucursal+"-"+cDc+"-"+numeroCuenta);
}
    
function mostrarDiaSemana(){

    let fecha = document.getElementById("fecha").value; //se recoge la fecha elegida por el usuario
    let fechaDia = new Date(fecha); // se cambia la fecha de formato, para disponer del día de la semana
    let dia = fechaDia.getDay(); //devuelve el número del día de la semana: desde 0 (domingo) hasta 6 (sábado)
    let diaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"); // valores de lo días de la semana

    alert("La fecha seleccionada en el elemento de fecha es un "+ diaSemana[dia]);
}

window.onload = function foco() {
    document.getElementById("reset").focus(); //poner foco en el botón Borrar Datos, al cargar la página
};
 
