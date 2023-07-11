//contiene la operación o resultado parcial
let parcial = "";

//elementos donde se colcan las operacion que se esta realizando
let operRealizada = document.getElementById("operacionRealizada");
//elemento donde se colocará el resultado
let txtResul = document.getElementById("txtResultado");

//ultimo operador seleccionado
let operadorSeleccionado = "";

//numero ingresado
let numero = "";

//para determinar si lo ultimo ingresado fue un número o un operador
let ultimoDigitoPresionado = "";

//donde va el historial de operaciones realizadas
let historial=document.querySelector(".historial")

const calculadora=document.querySelector(".calculadora")


//Presiono una tecla de operación
function operacion(oper){
    //guardo la operación que eleigio
    operadorSeleccionado = oper;
    ultimoDigitoPresionado = "operacion";
    parcial = parcial + oper;
    numero = "";
    operRealizada.innerHTML = parcial;
}

//Presiono un número
function operador(num){
    if (num=="." && parcial.slice(-1)==".") {
        // alert("mal")
    }else{
        //contateno el numero
        numero = numero + num;  
        //contateno la operacion hasta el momento
        parcial = parcial + num;
        //muestro
        operRealizada.innerHTML = parcial;
    
        //Controlamos la división por 0
        if(numero=='0' && operadorSeleccionado=='/'){
            limpiar();
            txtResul.innerHTML = "Indenfido!";
            return;
        }
    
        if(ultimoDigitoPresionado == "operacion"){
            ultimoDigitoPresionado = "numero";
        }
    }

}

//función para limpiar variables  y campos
function limpiar(){
    operadorSeleccionado="";
    parcial="";
    txtResul.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = "0";

}

//Función que realiza el calculo de parcial
function calculo(){
    let elem=document.createElement('P')
    elem.classList.add("elemento")
    if (parcial==undefined || eval(parcial)==undefined) {
        elem.textContent=""
    }else{
            elem.textContent="• "+parcial+" = "+eval(parcial)
            historial.appendChild(elem)
            //con eval evaluo la operacion que esta en string.
            //asi obtengo un resultado numerico
            botonHistorial.style.visibility="inherit";

            parcial = eval(parcial);
            //muestro el resultado
            txtResul.innerHTML = parcial;
            //vuelvo a convetir parcial en string
            parcial = parcial.toString();
            //blanqueo el numero
            numero ="";
        
            operRealizada.innerHTML = parcial;
            // transicion()
        }

}

const botonHistorial=document.querySelector(".botonHistorial")

function transicion(){
        calculadora.classList.remove("col-md-12")
        calculadora.classList.add("col-md-7")
        document.querySelector(".fondoHistorial").style.visibility="inherit";
}

// function quitarTransicion(){
//     calculadora.classList.remove("col-md-7")
//     calculadora.classList.add("col-md-12")
// }

botonHistorial.addEventListener("click",(e)=>{
    e.preventDefault()
    historial.innerHTML=''
    if (historial.innerHTML=='') {
        botonHistorial.style.visibility="hidden";
    }
})



let bandera=true
const botonCambiarEstilo=document.getElementById("botonCambiarEstilo")
const icono=document.getElementById("icono")
botonCambiarEstilo.addEventListener("click",(e)=>{
    e.preventDefault()
    const temaOscuro=document.querySelector(".temaOscuro")
    if (bandera) {
        icono.classList.remove("fas")
        icono.classList.remove("fa-sun")

        icono.classList.add("fa")
        icono.classList.add("fa-moon")

        temaOscuro.setAttribute("href","darkStyle.css")
        bandera=false
    }else{
        icono.classList.remove("fa")
        icono.classList.remove("fa-moon")
        
        icono.classList.add("fas")
        icono.classList.add("fa-sun")

        temaOscuro.removeAttribute("href")
        bandera=true
    }
})