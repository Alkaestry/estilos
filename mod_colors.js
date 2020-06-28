// Modificar los colores de la interfaz //
/*
  version 1.0
  @OM
*/

// agregamos el script del color picker:
var scriptCP=document.createElement('script');
scriptCP.src='https://cdn.jsdelivr.net/gh/Alkaestry/estilos@latest/color.js';
var head=document.getElementsByTagName('head')[0];
head.appendChild(scriptCP);

// Modificaciones generales fijas:
  //cambiar el color morado de fondo por color negro:
document.body.style.background="rgb(0,0,0)";
  //cambiar los colores de los botones de "enviar" y "disponible":
document.getElementsByClassName("btn")[0].style = 'background: rgba(255, 255, 255, 0); background-image: url("./gl/glyphs.png!120617083118"); background-repeat: repeat-x; background-position: 0 -97px;';
document.getElementsByClassName("btn")[1].style = 'background: rgba(255, 255, 255, 0); background-image: url("./gl/glyphs.png!120617083118"); background-repeat: repeat-x; background-position: 0 -97px;';

// Modificando el contenido de la ventana HDB (Help), incluye la llamada a la funcion para "aplicar cambios":
document.getElementById('HDB').innerHTML = '<div><input id="colorOT" type="color"> (Color área del chat)</input></br><input id="colorpN1" type="color"> (Color campo del texto)</input></br><input id="colorpN2" type="color"> (color lista de usuarios)</input></br><button onclick="mod_colors()">Aplicar colores</button></div>';

// +función para aplicar cambios+:
function mod_colors()
{
	//variable para el color de OT:
	var color_OT = document.getElementById("colorOT").value;
	//variable para el color de pN1:
	var color_pN1 = document.getElementById("colorpN1").value;
	//variable para el color de pN2:
	var color_pN2 = document.getElementById("colorpN2").value;
	
	//modificar pantalla de salida de texto:
	OT.style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	//modificar el color de donde escribo:
	document.getElementsByClassName("pN")[1].style = "background: " + color_pN1 + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	//modificar el color de la lista de usuarios:
	document.getElementsByClassName("pN")[2].style = "background: " + color_pN2 + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
	//modificando la clase .body:
	document.getElementsByClassName("body")[2].style = "background: " + color_OT + "; background-image: url('./gl/glyphs.png!120617083118'); background-repeat: repeat-x; background-position: 0 -97px;";
}
// fin_función_aplicar_cambios.

/*
	AGREGAR LA PALETA DE COLORES AL CUADRO DE SELECCION DE COLOR
	PARA ELEGIR EL COLOR CON QUE DESEO ESCRIBIR:
	VAMOS A MODIFICAR EL ELEMENTO CD a TRAVES DE innerHTML
	Y LUEGO CREAMOS LA funcion PARA EL BOTON QUE ASIGNA EL COLOR:
*/
document.getElementById("CD").innerHTML = '<input id="c_Tsimple" type="color"></input><button onclick="mod_colorTexto()"><-Aplicar color de texto</button> <div class=\"body\"> <div id=\"CP\"><table cellspacing=\"2\" cellpadding=\"0\" border=\"0\"><tbody><tr><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #909090;\" onclick=\"return IN.sCol(27);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FF0300;\" onclick=\"return IN.sCol(28);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FF9A00;\" onclick=\"return IN.sCol(29);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #FFCD00;\" onclick=\"return IN.sCol(30);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #C5EA35;\" onclick=\"return IN.sCol(31);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #4BE22C;\" onclick=\"return IN.sCol(32);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #2CAFE2;\" onclick=\"return IN.sCol(33);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #353CC4;\" onclick=\"return IN.sCol(34);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #992CE2;\" onclick=\"return IN.sCol(35);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #E22C9A;\" onclick=\"return IN.sCol(36);\">&nbsp;</a></td></tr><tr><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #000000;\" onclick=\"return IN.sCol(37);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CE1918;\" onclick=\"return IN.sCol(38);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CE5D18;\" onclick=\"return IN.sCol(39);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #CEAB18;\" onclick=\"return IN.sCol(40);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #97B71C;\" onclick=\"return IN.sCol(41);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #35A31F;\" onclick=\"return IN.sCol(42);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #1F7EA3;\" onclick=\"return IN.sCol(43);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #1F54A3;\" onclick=\"return IN.sCol(44);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #6E1FA3;\" onclick=\"return IN.sCol(45);\">&nbsp;</a></td><td><a style=\"display: block; width: 18px; height: 22px; font-size:1px; background: #A31F6E;\" onclick=\"return IN.sCol(46);\">&nbsp;</a></td></tr></tbody></table></div> </div>';
//funcion para el boton que asigna el color con que escribiré:
function mod_colorTexto()
{
	IN.doFocus();
	IN.clr= document.getElementById("c_Tsimple").value
	rcCookie.set("c",IN.clr,365);
	IN.ec("ForeColor",false,IN.clr);
	IN.tBC();
}
//fin_funcion_del_boton_para_asignar_color...



