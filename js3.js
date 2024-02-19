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

function gestorePulsanteEnter(){
	 try {
		this.style.backgroundColor = "#B00013"; 
	 } catch (e){
		 alert("gestorePulsanteEnter" + e);
	 }
}
 
function gestorePulsanteOut(){
	 try {
		this.style.backgroundColor = "#7D1E22"; 
	 } catch (e){
		 alert("gestorePulsanteOut" + e);
	 }
}

function gestoreDragStart (evento) {
	try {
		evento.dataTransfer.setData ("text", this.id);
	} catch ( e ) {
		alert("gestoreDragStart " + e);
	}
}

function gestoreDragOver (evento) {
	try {
        evento.preventDefault ();
	} catch ( e ) {
		alert("gestoreDragOver " + e);
	}
}

function gestoreDrop (evento) {
	try {
		evento.preventDefault();
		if (this.childNodes.length == 0) {
			cont++;
			var dati = evento.dataTransfer.getData("text");
			var x = document.getElementById(dati);
			x.setAttribute("draggable","false");
			this.appendChild(x);
			if ((this.id == "Titanic") && (dati == "LeonardoDiCaprio")){
				punteggio++;
			}
			else if ((this.id == "PrettyWoman") && (dati == "JuliaRoberts")){
				punteggio++;
			}
			else if ((this.id == "Neverland") && (dati == "JohnnyDepp")){
				punteggio++;
			}	
			else if ((this.id == "MammaMia") && (dati == "MerylStreep")){
				punteggio++;
			}	
			else if ((this.id == "MenInBlack") && (dati == "WillSmith")){
				punteggio++;
			}	
		}
		if (cont == 5) {
			nodoPagina.removeChild(nodoTitolo);
			nodoPagina.removeChild(nodoDescrizione);
			nodoPagina.replaceChild(nodoRisultati, nodoTable1);
			switch (punteggio) {
				case 5: {
					t = "COMPLIMENTI!";
					t1 = "100%";
					break;
				}
				case 4: {
					t = "C'ERI QUASI!";
					t1 = "80%";
					break;
				}
				case 3: {
					t = "BUONO!";
					t1 = "60%";
					break;
				}
				case 2: {
					t = "NON TROPPO BENE";
					t1 = "40%";
					break;
				}
				case 1: {
					t = "PUOI FARE DI MEGLIO!";
					t1 = "20%";		
					break;					
				}
				case 0: {
					t = "MALE";
					t1 = "0%";
					break;
				}
			}
			var nodoDivR = document.createElement("div");
			var nodoTesto = document.createTextNode(t);
			var nodoBr = document.createElement("br");
			var nodoTesto1 = document.createTextNode(t1);
			var nodoBr1 = document.createElement("br");
			var nodoA = document.createElement("a");
			var nodoDivR1 = document.createElement("div");
			var nodoTesto2 = document.createTextNode("RIGIOCA");
			nodoA.href = "gioco.html";
			nodoDivR1.setAttribute("class", "pulsante");
			nodoDivR.setAttribute("class", "pRisultati");
			nodoDivR1.onmouseenter = gestorePulsanteEnter;
			nodoDivR1.onmouseout = gestorePulsanteOut;
			nodoRisultati.appendChild(nodoDivR);
			nodoDivR.appendChild(nodoTesto);
			nodoDivR.appendChild(nodoBr);
			nodoDivR.appendChild(nodoTesto1);
			nodoDivR.appendChild(nodoBr1);
			nodoDivR.appendChild(nodoA);
			nodoA.appendChild(nodoDivR1);
			nodoDivR1.appendChild(nodoTesto2);
		}	
	} catch ( e ) {
		alert("gestoreDrop " + e);
	}
}

function gestoreCursore () {
	try {
		this.style.cursor = "pointer";
	} catch ( e ) {
		alert("gestoreCursore " + e);
	}
}

var cont = 0;
var punteggio = 0;
var nodoAttore;
var nodoFilm;
var nodoPagina;
var nodoTable1;
var nodoRisultati;
var nodoTitolo;
var nodoDescrizione;
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
		nodoFilm = document.getElementById("film");
		nodoAttore = document.getElementById("attore");
		nodoPagina = document.getElementById("pagina");
		nodoTable1 = document.getElementById("table1");
		nodoRisultati = document.getElementById("risultati");
		nodoTitolo = document.getElementById("titolo");
		nodoDescrizione = document.getElementById("descrizione");
		for (var i = 0; i < film.length; i++)
		{
			var f = film[i];
			var nodoDiv = document.createElement("div");
			var nodoImg = document.createElement ("img");
			var nodoSpan = document.createElement("span");
			nodoDiv.setAttribute("class", "divCasella");
			nodoImg.setAttribute("class", "logoFilm");
			nodoSpan.setAttribute("class", "casella");
			nodoImg.src = f.src;
			nodoSpan.id = f.id;
			nodoSpan.ondragover = gestoreDragOver;
			nodoSpan.ondrop = gestoreDrop;
			nodoDiv.appendChild(nodoImg);
			nodoDiv.appendChild(nodoSpan);
			nodoFilm.appendChild(nodoDiv);
		}
		for (var i = 0; i < attori.length; i++)
		{
			var a = attori[i];
			var nodoImg = document.createElement("img");
			var nodoTable = document.createElement("table");
			var nodoTr = document.createElement("tr");
			nodoImg.id = a.id;
			nodoImg.src = a.src;
			nodoImg.setAttribute("class", "attore");
			nodoImg.ondragstart = gestoreDragStart;
			nodoImg.onmouseover = gestoreCursore;
			nodoAttore.appendChild(nodoTable);
			nodoTable.appendChild(nodoTr);
			nodoTr.appendChild(nodoImg);
		}
		
	} catch ( e ) {
		alert("gestoreLoad " + e);
	}
}
window.onload = gestoreLoad;

var attori = [
	{
		id: "JohnnyDepp",
		src: "johnnydepp.png",
	},
	{
		id: "JuliaRoberts",
		src: "juliaroberts.png"
	},
	{
		id: "LeonardoDiCaprio",
		src: "leonardodicaprio.png"
	},
	{
		id: "MerylStreep",
		src : "merylstreep.png"
	},
	{
		id: "WillSmith",
		src : "willsmith.png"
	}
];

var film = [
	{
		id: "MammaMia",
		src: "mammamia.jpg"
	},
	{
		id: "MenInBlack",
		src: "meninblack.jpg"
	},
	{
		id:"PrettyWoman",
		src:"prettywoman.jpg"
	},
	{
		id: "Neverland",
		src: "neverland.jpg"
	},
	{
		id:"Titanic",
		src:"titanic.jpg"
	}
];