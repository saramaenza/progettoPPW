function gestoreApri () {
   try {
      nodoMenuSito.style.width = "100%";
   } catch ( e ) {
        alert("gestoreApri"+ e);   
   } 
}

function gestoreChiudi () {
   try {
      nodoMenuSito.style.width = "0";
   } catch ( e ) {
        alert("gestoreChiudi"+ e);   
   } 
}

function gestoreEnterMenu(){
	 try {
		this.style.textDecoration = "underline";
	 } catch (e){
		 alert("gestoreEnterMenu" + e);
	 }
}
 
function gestoreOutMenu(){
	 try {
		 this.style.textDecoration = "none";
	 } catch (e){
		 alert("gestoreOutMenu" + e);
	 }
}

var nodoMenuSito;
var nodoBottoneMenu;
var nodoChiudiM;
var nodoMuno;
var nodoMDue;
var nodoMTre;
var nodoMQuattro;
var nodoMCinque;

function gestoreLoad () {
	try {
		nodoMenuSito = document.getElementById("menuSito");
		nodoBottoneMenu = document.getElementById("bottoneMenu");
		nodoChiudiM = document.getElementById("chiudiM");
		nodoChiudiM = document.getElementById("chiudiM");
		nodoMUno = document.getElementById("mUno");
		nodoMDue = document.getElementById("mDue");
		nodoMTre = document.getElementById("mTre");
		nodoMQuattro = document.getElementById("mQuattro");
		nodoMCinque = document.getElementById("mCinque");
		nodoMUno.onmouseenter = gestoreEnterMenu;
		nodoMDue.onmouseenter = gestoreEnterMenu;
		nodoMTre.onmouseenter = gestoreEnterMenu;
		nodoMQuattro.onmouseenter = gestoreEnterMenu;
		nodoMCinque.onmouseenter = gestoreEnterMenu;
		nodoMUno.onmouseout = gestoreOutMenu;
		nodoMDue.onmouseout = gestoreOutMenu;
		nodoMTre.onmouseout = gestoreOutMenu;
		nodoMQuattro.onmouseout = gestoreOutMenu;
		nodoMCinque.onmouseout = gestoreOutMenu;
		nodoBottoneMenu.onclick = gestoreApri;
		nodoChiudiM.onclick = gestoreChiudi;
	} catch (e){
		alert ("gestoreload" +e);
	}
}

window.onload = gestoreLoad;