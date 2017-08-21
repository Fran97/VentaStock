var array = [];

function agregar(){
//agrega elementos a la tabla
	var lo2=document.getElementById('ropa').value;
	var lo4=document.getElementById('precio').value;

	if(((lo2!=0) && (lo2!="Elija la ropa"))&&(lo4!=0)&&(lo4>0)&&(lo4<99999)){

		document.getElementById("limp1").style.display = "block";
		var ropa= document.getElementById('ropa').value;
		var precio= document.getElementById('precio').value;
		var table= document.getElementsByTagName('table')[0];
		var newRow = table.insertRow(table.length);
		var cel1= newRow.insertCell(0);
			cel1.className = "stockk";
		var cel2= newRow.insertCell(1);
		cel2.className = "caja";
		cel1.innerHTML = ropa;
		cel2.innerHTML = precio;
		total();
		guardadatos(ropa);//captura el valor de la variable ropa
		it=it+1;

	} else {
		alert("Debe elegir un item y completar correctamente el precio");
	}

}

//guarda el valor de la variable ropa 


function guardadatos(ropa){

	var datos = {ropa:ropa};//el resultado de la var ropa se pasa a JSON
	var s = JSON.stringify(datos.ropa);//var ropa se convirte en string
	var z = JSON.parse(s);//extrae los strings
	array.push(z);//se sumaran al array

	//console.log(z);
	
}



function mostrararray(){

   var l = [];
   var l2= [];

   var t = document.getElementById("resultadu");
   var current = null;
   var cnt = 0;
   var i;
   var text = '';
 	
 
	for (var i = 0; i < array.length; i++) {
        if (array[i] != current) {

            if (cnt > 0) {
            	
            	l.push( '<div class="bb">'+current +'  -' +cnt+'</div>');
            	l2.push(current+" "+cnt);
            	
            }

            current = array[i];
            cnt = 1;

        } else {

            cnt++;

        }

    }

    if (cnt > 0) {

    	 l.push('<div class="bb">'+ current +'  -' +cnt+'</div>');
    	 l2.push(current+" "+cnt);
    	   
    }

    for(i=0;i<l.length;i++){
    	text += l[i] + '<br>';
    }
	
    t.innerHTML =  text ;
    document.getElementById("l3").innerHTML=l2;

}

var it=0;

function xagr(){
	var p=0;
	while (p<it){ //it contador q iria en agregar()
		array.pop();
		p=p+1;
	}
}


function total(){

	var tabla = document.getElementById('table').getElementsByTagName('td');
	var total = 0;
	for(var i=0 ; i<tabla.length; i++){
		if (tabla[i].className == 'caja') {
			total += parseInt(tabla[i].innerHTML);
			}
	}
	document.getElementById('resultado').innerHTML = "$ " + total;
	tot2=total;

}

function agregarX(){

	var lo3=document.getElementById('ropaX').value;
	var lo5=document.getElementById('precioX').value;

	if(((lo3!=0) && (lo3!="Elija la ropa"))&&(lo5!=0)&&(lo5>0)&&(lo5<99999)){

		document.getElementById("limp2").style.display="block";
		var ropa=document.getElementById('ropaX').value;
		var precio=document.getElementById('precioX').value;
		var x = document.getElementById('df');
		var g = x.getElementsByTagName('table')[0];
		var newRow=g.insertRow(g.length);
		var cel1= newRow.insertCell(0);
			cel1.className = "stockk";
		var cel2= newRow.insertCell(1);
			cel2.className = "cajaX";
		cel1.innerHTML=ropa;
		cel2.innerHTML=precio;
		totalX();
		guardadatos(ropa);
		it=it+1;
	} else {
		alert("Debe elegir un item y completar correctamente el precio");
	}

}

function totalX(){

	var tabla = document.getElementById('tableX').getElementsByTagName('td');
	var total = 0;
	for(var i=0 ; i<tabla.length; i++){
		if (tabla[i].className == 'cajaX'){
			total += parseInt(tabla[i].innerHTML);
		}
	}
	document.getElementById('resultadoX').innerHTML = "$ "+total;
	tot=total;

}

function venta1(){

    document.getElementById("ventaone").style.display = "block";
    document.getElementById("ventados").style.display = "none";
    document.getElementById("sumar").style.display = "none";
    document.getElementById("cuotash").style.display = "none";
    document.getElementById("stock").style.display = "none";
    document.getElementById("textoo").style.display = "none";
    document.getElementById("limp1").style.display = "none";
    ventaoff2();
    ventaoffr();
    it=0;
	p=0;
}

    


function ventaoff(){

	document.getElementById("ventaone").style.display = "none";
	document.getElementById("limp1").style.display = "none";
	document.getElementById("ropa").value = null;
    document.getElementById("precio").value = null;
    var s ="<label>$ 0</label>";
	document.getElementById("resultado").innerHTML = s;
   
	var tabla = document.getElementById('table');
	var fila = tabla.getElementsByTagName('tr');
	var contarfila = fila.length;

	for (var i=contarfila-1; i>0; i--) {

   		tabla.deleteRow(i);
	}

}

function ventaoffr(){
 //reinicia la compra en ceft limpia las cajas, sin cerrar la vta
	document.getElementById("limp1").style.display = "none";
	document.getElementById("ropa").value = null;
    document.getElementById("precio").value = null;
    var s ="<label>$ 0</label>";
	document.getElementById("resultado").innerHTML = s;
   
	var tabla = document.getElementById('table');
	var fila = tabla.getElementsByTagName('tr');
	var contarfila = fila.length;

	for (var i=contarfila-1; i>0; i--) {

   		tabla.deleteRow(i);

	}
}

function ventaoff2(){

	document.getElementById('limp2').style.display = "none";
	document.getElementById('selecuo').value = 0;
	document.getElementById("ventados").style.display = "none";
	document.getElementById("cuotash").style.display = "none";
	document.getElementById("contenedortes28").innerHTML=null;
	document.getElementById("contenedortest48").innerHTML=null;
	document.getElementById("ropaX").value = null;
    document.getElementById("precioX").value = null;
    var s ="<label>$ 0</label>";
	document.getElementById("resultadoX").innerHTML = s;
   
	var tabla = document.getElementById('tableX');
	var fila = tabla.getElementsByTagName('tr');
	var contarfila = fila.length;

	for (var i=contarfila-1; i>0; i--) {

   		tabla.deleteRow(i);

	}

}

function ventaoff2x(){

	document.getElementById("cuotash").style.display="none";
	document.getElementById("contenedortes28").innerHTML=null;
	document.getElementById("contenedortest48").innerHTML=null;
	document.getElementById("selecuo").value = 0;

}

function ventaoff2r(){
 //reinicia la compra en cred, limpia las cajas, sin cerrar la vta
	document.getElementById("limp2").style.display="none";
	document.getElementById("contenedortes28").innerHTML=null;
	document.getElementById("contenedortest48").innerHTML=null;
	document.getElementById("ropaX").value = null;
    document.getElementById("precioX").value = null;
    var s ="<label>$ 0</label>";
	document.getElementById("resultadoX").innerHTML = s;
	document.getElementById("selecuo").value = 0;

	var tabla = document.getElementById('tableX');
	var fila = tabla.getElementsByTagName('tr');
	var contarfila = fila.length;

	for (var i=contarfila-1; i>0; i--) {

   		tabla.deleteRow(i);

	}

}

function venta2(){

    document.getElementById("ventados").style.display = "block";
    document.getElementById("ventaone").style.display = "none";
    document.getElementById("sumar").style.display = "none";
    document.getElementById("stock").style.display = "none";
    document.getElementById("textoo").style.display = "none";
    document.getElementById('limp2').style.display = "none";
    document.getElementById('limp2').style.display = "none";
    ventaoff();
    ventaoff2r();
    it=0;
	p=0;
    
}

function estoc(){

    document.getElementById("stock").style.display = "block";
    document.getElementById("sumar").style.display = "none";
	document.getElementById("ventaone").style.display = "none";
    document.getElementById("ventados").style.display = "none";
    document.getElementById("cuotash").style.display = "none";
    document.getElementById("textoo").style.display = "none";
    ventagral=totalgral;
    document.getElementById("aves").innerHTML="$ "+(ventagral.toFixed(2));
    nventass=(nventas-1);
	document.getElementById("numven").innerHTML=nventass;
	ventaoff2();
	ventaoff();

}

function blabla(){

	document.getElementById("sumar").style.display = "block";
	document.getElementById("ventaone").style.display = "none";
    document.getElementById("ventados").style.display = "none";
    document.getElementById("cuotash").style.display = "none";
    document.getElementById("stock").style.display = "none";
    document.getElementById("textoo").style.display = "none";
	ventaoff2();
	ventaoff();    
    
}



function agregarC(){

	var lo=document.getElementById('input').value;

	if (lo!=0){

	agregaropa();
	agregaropaX();
	document.getElementById('input').value = null;

	} else {

	alert("Debe ingresar un item");

	}

}

var rrrop =[];
 
function agregaropa(){

    var select = document.getElementById("ropa");
    var input = document.getElementById("input").value;
    var option = document.createElement("option");
    var i;
    var rr ='';
    option.text = input;
    select.add(option);
    rrrop.push(input);
    select22=rrrop

    for(i=0;i<rrrop.length;i++){

    	rr += '<div class="yv">'+rrrop[i]+'</div>'+'<br>';

    }

    document.getElementById("ropase").innerHTML=rr ;

}

function agregaropaX(){

    var select = document.getElementById("ropaX");
    var input = document.getElementById("input").value;
    var option = document.createElement("option");
    option.text = input;
    select.add(option);

}

function cerrar(){
	document.getElementById('sumar').style.display = "none";
}

function ventaoff21(){
	document.getElementById("cuotash").style.display = "block";
}

function calcuo(){ 
//calcular las cuotas
	var cuo = document.getElementById("selecuo").value;
	var interes=0;
	var valorcuo=0;
	var totcuo=0;
	ave='';
	ave2='';
	if (cuo==1){

		ave="$"+tot+" en un solo pago.";
		totcuo=tot;

	} else if (cuo==2){

		interes=tot*5/100+tot;
		valorcuo=parseInt(interes/3);
		ave="3 cuotas de $"+((interes/3).toFixed(2))+ " cada una.";
		ave2= "Precio final $"+interes+".";

	} else if (cuo==3){

		interes=tot*10/100+tot;
		valorcuo=parseInt(interes/6);
		ave="6 cuotas de $"+((interes/6).toFixed(2))+ " cada una.";
		ave2= "Precio final $"+interes+".";

	} else if (cuo==4){

		interes=tot*20/100+tot;
		valorcuo=parseInt(interes/12);
		ave="12 cuotas de $"+((interes/12).toFixed(2))+ " cada una.";
		ave2= "Precio final $"+interes+".";

	} else if (cuo==5){
		interes=tot*30/100+tot;
		valorcuo=parseInt(interes/18);
		ave="18 cuotas de $"+((interes/18).toFixed(2))+ " cada una.";
		ave2= "Precio final $"+interes+".";

	} else if (cuo==0){

		alert("Elija Cantidad de cuotas");

	}

	document.getElementById("contenedortes28").innerHTML=ave;
	document.getElementById("contenedortest48").innerHTML=ave2;
	interes2=interes;
	ttcc=totcuo;
}


var totalgral=0;
var nventas=1;

var cantveft=0;
var toteft=0;
var cantveftX=0;
var toteftX=0;

function sumarventas(){ 
//para sumar el total vendido en eft
	if (confirm("Finalizando Compra Nro "+nventas+" del dia, por $"+tot2+"."+"\n"+"Desea continuar?")){

		alert("Compra registrada, Se finalizo la compra");
		totalgral=totalgral+tot2;
    	nventas=nventas+1;
   		document.getElementById("limp1").style.display = "none";
		ventaoff();
		mostrararray();
		cantveft=cantveft+1;
		toteft=toteft+tot2;

	} else {
		alert("Reinicie la compra y vuelva a intentarlo");
	}

}

function sumarventasX(){
 //para sumar el total vendido en cred
 	if (confirm("Finalizando Compra Nro "+nventas+" del dia, por $"+(interes2+ttcc)+"."+"\n"+"Desea continuar?")){

		alert("Compra registrada, Se finalizo la compra");
		totalgral=totalgral+interes2+ttcc;
    	nventas=nventas+1;
		document.getElementById("contenedortes28").innerHTML=null;
		document.getElementById("contenedortest48").innerHTML=null;
		document.getElementById("limp2").style.display = "none";
		ventaoff2();
		mostrararray();
		cantveftX=cantveftX+1;
		toteftX=toteftX+interes2+ttcc;

	} else {
		alert("Corrija el numero de cuotas, o Reinicie la compra y vuelva a intentarlo");
	}

}


function expom(){

	document.getElementById("textoo").style.display = "block";
	document.getElementById("sumar").style.display = "none";
	document.getElementById("ventaone").style.display = "none";
    document.getElementById("ventados").style.display = "none";
    document.getElementById("cuotash").style.display = "none";
    document.getElementById("stock").style.display = "none";
	ventaoff2();
	ventaoff();    
}

function expo(){

	year = new Date().getFullYear(); 
    month = new Date().getMonth(); 
    month = month + 1;
    day = new Date().getDate(); 
	l4=document.getElementById("l3").innerHTML;
	test1="Tienda Lisa Junior. Stock Venta del dia "+day+"/"+month+"/"+year+"."+"\n"+"Numero de Ventas: "+(nventas-1)+"."+"\n"+"Total registrado: $"+totalgral+"."+"\n"+"Cantidad de ventas en Efectivo/Debito: "+cantveft+"\n"+"Total vendido en Efectivo/Debito: $"+toteft+"\n"+"Cantidad de ventas en Credito: "+cantveftX+"\n"+"Total vendido en Credito: $"+toteftX+"\n"+"Indumentaria Vendida: "+l4+".";
	document.getElementById("test2").innerHTML=test1;
	
    var textToSave = document.getElementById("test2").value;
    var textToSaveAsBlob = new Blob([document.getElementById("test2").innerHTML], {type:"application/msword"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("test2").value;

    var downloadLink = document.createElement("a");
    downloadLink.download = "Venta Diaria - Lisa Junior";
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();

}	
