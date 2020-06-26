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
document.body.style.background="rgb(0,0,0)"
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
}
