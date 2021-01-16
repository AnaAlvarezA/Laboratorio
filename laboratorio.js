function mostrarValoracion() {
    let valor = Number(document.getElementById("rango").value)
    alert("Has valorado con "+ valor +" puntos");
 };

function mostrarCuenta(){
    let cPais, cIban, cEntidad, cSucursal, cDc, numeroCuenta;
    cPais = document.getElementById("pais").value;
    cIban = document.getElementById("iban").value;
    cEntidad = document.getElementById("entidad").value;
    cSucursal = document.getElementById("sucursal").value;
    cDc = document.getElementById("dc").value;
    numeroCuenta = document.getElementById("cuenta").value;

    alert("Le informamos que su cuenta bancaria es: "+ cPais+cIban+"-"+cEntidad+"-"+cSucursal+"-"+cDc+"-"+numeroCuenta);
}
    

function mostrarDiaSemana(){
let fecha = document.getElementById("fecha").value;
let fechaDia = new Date(fecha);
let dia = fechaDia.getDate();
let diaSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

alert("La fecha seleccionada en el elemnto de fecha es un "+ diaSemana[dia+1]);
}; 


 
