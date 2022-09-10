class Vino {
    constructor (tipo,  cantidad){
        this.tipo = tipo;
        this.cantdad = cantidad;        
    }
    
}
const chacabuco1 = new Vino ("malbec", 0);

const chacabuco2 = new Vino ("cabernet", 0);

const conejoVerde = new Vino ("malbec", 0);

let inventVino = 0;
let pregunta = "";
let adicionar = 0;
let pregunta2 = "";

let nombreProducto = parseInt (prompt(`Ingrese Nombre del vino a contabilizar:
                          1 Chacabuco Malbec
                          2 Chacabuco Carbetnet
                          3 Conejo verde`));
switch (nombreProducto) {
    case 1:
            if (nombreProducto === 1) {
            inventVino = parseInt(prompt("Cantidad Botellas en existencia: "));
            if (inventVino <= 11) {
                alert("El producto esta bajo de stock requerido, se recomienda hacer compra");
                pregunta = prompt("Se realizó alguna compra de este producto s/n?");
                    if (pregunta == "s") {
                     adicionar = parseInt (prompt("Ingresar cantidad comprada:"));
                       chacabuco1.cantidad = inventVino;
                        chacabuco1.cantidad = chacabuco1.cantidad + adicionar;
                        alert("Cantidad de Botella Chacabuco Malbe es " + chacabuco1.cantidad);
                    } else alert("debe realizar compra del producto Chacabuco Malbec para generar stoke minimo");
            }else {
                chacabuco1.cantidad = inventVino;
                alert ("Cantidad de Botella Chacabuco Malbec es " + chacabuco1.cantidad );
            }    
            
        } 
        else if (nombreProducto === 2) {
            conejoVerde = parseInt(prompt("Cantidad Botellas en existencia: "));
            if (inventConeVerde <= 11) {
                conejoVerde.cantidad = inventConeVerde;
                alert("El producto esta bajo de stock requerido, se recomienda hacer compra");
                pregunta = prompt("Se realizó alguna compra de este producto s/n?");
                if (pregunta == "s") {
                    adicionar = parseInt(prompt("Ingresar cantidad comprada:"));
                    conejoVerde.cantidad = conejoVerde.cantidad + adicionar;
                    alert("Cantidad de Botella Conejo Verde Malbe es " + vino[1].cantidad);
                }else alert("debe realizar compra del producto Conejo Verde Malbec para generar stoke minimo");
            } else {
                conejoVerde.cantidad = inventConeVerde;
                alert ("Cantidad de Botella Conejo Verde Malbec es " + conejoVerde.cantidad );
            } 
            break; 
        }      
        
    case 2:
       
        inventChacabCabernet = parseInt(prompt("Cantidad Botellas en existencia: "));
        if (inventChacabCabernet <= 11) {
            chacabuco2.cantidad = inventVino;
            alert("El producto esta bajo de stock requerido, se recomienda hacer compra");
            pregunta = prompt("Se realizó alguna compra de este producto s/n?");
                if (pregunta == "s") {
                    adicionar = parseInt(prompt("Ingresar cantidad comprada:"));
                    chacabuco2.cantidad = vino[3].cantidad + adicionar;
                    alert("Cantidad de Botella Chacabuco Malbe es " + chacabuco2.cantidad);
                 }else{
                    alert("debe realizar compra del producto Chacabuco Malbec para generar stoke minimo");                    
                 } 
        }else {
            chacabuco2.cantidad = inventChacabCabernet;
            alert ("Cantidad de Botella Chacabuco Malbec es " + chacabuco2.cantidad );
        } 
        break;
    
    default:
        alert("inventario terminado");
}
alert("inventario terminado"); 
