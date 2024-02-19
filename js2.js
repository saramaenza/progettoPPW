function foo (i, film, emozione) { 
	var nodoDiv = document.createElement("div");
	var nodoImgLocandina = document.createElement("img");
	var nodoDivB = document.createElement("div");
	var nodoDivC = document.createElement("div");			
	var nodoH2 = document.createElement("h2");
	var nodoUl = document.createElement("ul");
	var nodoLiR = document.createElement("li"); 
	var nodoSpanR = document.createElement("span");
	nodoSpanR.setAttribute("class", "grassetto");
	var nodoR = document.createTextNode("Regia di: ");
	var nodoLiAt = document.createElement("li");
	var nodoSpanC = document.createElement("span");
	nodoSpanC.setAttribute("class", "grassetto");
	var nodoC = document.createTextNode("Con: ");
	var nodoLiAn = document.createElement("li");
	var nodoSpanA = document.createElement("span");
	nodoSpanA.setAttribute("class", "grassetto");
	var nodoA = document.createTextNode("Anno: ");
	var nodoLiP = document.createElement("li");
	var nodoSpanP = document.createElement("span");
	nodoSpanP.setAttribute("class", "grassetto");
	var nodoP = document.createTextNode("Paese: ");
	var nodoLiG = document.createElement("li");
	var nodoSpanG = document.createElement("span");
	nodoSpanG.setAttribute("class", "grassetto");
	var nodoG = document.createTextNode("Genere: ");
	var nodoLiD = document.createElement("li");
	var nodoSpanD = document.createElement("span");
	nodoSpanD.setAttribute("class", "grassetto");
	var nodoD = document.createTextNode("Durata: ");
	var nodoLiT = document.createElement("li");
	var nodoVideo = document.createElement("iframe");
	nodoFilmSuggerito.appendChild(nodoDiv);
	nodoDiv.appendChild(nodoImgLocandina);
	nodoDiv.appendChild(nodoDivB);
	nodoDivB.appendChild(nodoH2);
	nodoDivB.appendChild(nodoUl);
	nodoUl.appendChild(nodoLiR);
	nodoLiR.appendChild(nodoSpanR);
	nodoSpanR.appendChild(nodoR);
	nodoUl.appendChild(nodoLiAt);
	nodoLiAt.appendChild(nodoSpanC);
	nodoSpanC.appendChild(nodoC);
	nodoUl.appendChild(nodoLiAn);
	nodoLiAn.appendChild(nodoSpanA);
	nodoSpanA.appendChild(nodoA);
	nodoUl.appendChild(nodoLiP);
	nodoLiP.appendChild(nodoSpanP);
	nodoSpanP.appendChild(nodoP);
	nodoUl.appendChild(nodoLiG);
	nodoLiG.appendChild(nodoSpanG);
	nodoSpanG.appendChild(nodoG);
	nodoUl.appendChild(nodoLiD);
	nodoLiD.appendChild(nodoSpanD);
	nodoSpanD.appendChild(nodoD);
	nodoUl.appendChild(nodoLiT);
	nodoTrailer.appendChild(nodoDivC);
	nodoDivC.appendChild(nodoVideo);
	nodoFilmSuggerito.replaceChild(nodoDiv, nodoFilmSuggerito.firstChild); 
	nodoTrailer.replaceChild(nodoDivC, nodoTrailer.firstChild); 
	var x = Math.floor(Math.random() * i);
	filmI = film[x];
	var nodoTestoNome = document.createTextNode(filmI.nome);
	var nodoTestoRegia = document.createTextNode(filmI.regia);
	var nodoTestoAttori = document.createTextNode(filmI.attori);
	var nodoTestoAnno = document.createTextNode(filmI.anno);
	var nodoTestoPaese = document.createTextNode(filmI.paese);
	var nodoTestoGenere = document.createTextNode(filmI.genere);
	var nodoTestoDurata = document.createTextNode(filmI.durata);
	var nodoTestoTrama = document.createTextNode(filmI.trama);
	nodoImgLocandina.src = filmI.locandina;
	nodoVideo.src = filmI.trailer;
	nodoH2.appendChild(nodoTestoNome);
	nodoLiR.appendChild(nodoTestoRegia);
	nodoLiAt.appendChild(nodoTestoAttori);
	nodoLiAn.appendChild(nodoTestoAnno);
	nodoLiP.appendChild(nodoTestoPaese);
	nodoLiG.appendChild(nodoTestoGenere);
	nodoLiD.appendChild(nodoTestoDurata);
	nodoLiT.appendChild(nodoTestoTrama);
	film.splice(x, 1);
	if (i == 1){
		var nodoImgX = document.createElement("img");
		nodoImgX.id = "x";
		nodoImgX.src = "x.png";
		nodoImgX.style.cursor = "not-allowed";
		nodoEmozioni.replaceChild(nodoImgX, emozione); 
	}
}


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
		 alert("gestorePulsanteEnter" + e);
	 }
}
 
function gestoreOutMenu(){
	 try {
		 this.style.textDecoration = "none";
	 } catch (e){
		 alert("gestorePulsanteOut" + e);
	 }
}

function gestoreAppare () {
	try {
		switch (this.id) {
			case "ridere": foo(filmRidere.length , filmRidere, this); break;
			case "emozionarsi": foo(filmEmozionarsi.length , filmEmozionarsi, this); break;
			case "innamorarsi": foo(filmInnamorarsi.length , filmInnamorarsi, this); break;
			case "sorprendersi": foo(filmSorprendersi.length , filmSorprendersi, this); break;
			case "spaventarsi": foo(filmSpaventarsi.length , filmSpaventarsi, this); break;
		}
		 } catch (e) {
			 alert ("gestoreAppare" + e);
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
var nodoEmozioni;
var nodoFilmSuggerito;
var nodoTrailer; 
 
function gestoreload () {
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
		nodoEmozioni = document.getElementById("emozioni");
		nodoFilmSuggerito = document.getElementById("filmSuggerito");
		nodoTrailer = document.getElementById("trailer");
		for (var i = 0; i < emozioni.length; i++) {
			var e = emozioni[i];
			var nodoButton = document.createElement("button");
			var nodoImg = document.createElement("img");
			nodoImg.src = e.src;
			nodoButton.id = e.id;
			nodoImg.setAttribute("class", "imgEmozioni");
			nodoEmozioni.appendChild(nodoButton);
			nodoButton.appendChild(nodoImg);
			nodoButton.onclick = gestoreAppare;
		}	
	} catch (e){
		alert ("gestoreload" +e);
	}
}
 
window.onload=gestoreload;

var emozioni = [
	{
		id: "ridere",
		src: "ridere.png",
	},
	{
		id: "emozionarsi",
		src: "emozionarsi.png",
	},
	{
		id: "innamorarsi",
		src: "innamorarsi.png",
	},
	{
		id: "sorprendersi",
		src: "sorprendersi.png",
	},
	{
		id: "spaventarsi",
		src: "spaventarsi.png",
	}
]

var filmRidere = [
	{
		nome : "Ti presento i miei",
		regia: "Jay Roach",
		attori: "Robert De Niro, Ben Stiller, Teri Polo, Blythe Danner, Nicole DeHuff, Jon Abrahams, Tom McCarthy, Owen Wilson, James Rebhorn, Phyllis George",
		anno: "2000",
		paese: "USA",
		genere: "commedia",
		durata : "107 minuti",
		trama : "Greg è innamorato follemente della sua fidanzata Pam, ma per poterla sposare deve necessariamente conquistare la fiducia del padre Jack Byrnes, marito e padre perfetto. L'occasione sembra essere il matrimonio della sorella di Pam, ma le cose non vanno proprio per il verso giusto. Una catena di disastri esilaranti che investiranno Greg fin dal suo arrivo.",
		locandina : "tipresentoimiei.jpg",
		trailer : "https://www.youtube.com/embed/0uIWe_DLK_4"
	},
	{
		nome : "Deadpool",
		regia: "Tim Miller",
		attori: "Ryan Reynolds, Morena Baccarin, Ed Skrein, T.J. Miller, Gina Carano, Brianna Hildebrand",
		anno: "2016",
		paese: "USA",
		genere: "azione, commedia, fantasy",
		durata: "107 minuti",
		trama : "Deadpool racconta la storia del mercenario Wade Wilson, ex agente operativo delle Special Forces, che, dopo essere stato sottoposto a un terribile esperimento, acquisisce l’eccezionale potere del Fattore Rigenerante e abbraccia una nuova identità. Con la sua nuova abilità di guarire rapidamente e un pungente senso dell’umorismo, Deadpool andrà a caccia dell’uomo che gli ha quasi rovinato la vita.",
		locandina : "deadpool.jpg",
		trailer : "https://www.youtube.com/embed/F5iHRIEskA0"
	},
	{
		nome : "Il ciclone",
		regia: "Leonardo Pieraccioni",
		attori: "Leonardo Pieraccioni, Lorena Forteza, Tosca D'Aquino, Massimo Ceccherini, Paolo Hendel",
		anno: "1996",
		paese: "Italia",
		genere: "commedia",
		durata: "95 minuti",
		trama : "In un paesino tranquillo della Toscana vive la famiglia Quarini, il padre Osvaldo e i tre figli Levante, Libero e Selvaggia. L'arrivo di un quintetto di saettanti ballerine spagnole di flamenco, scortate da due assistenti che fumano erba e da uno sciamannato impresario, turba il quieto tran-tran di un borgo toscano, scatenando in vario modo la vita dei maschietti nativi.",
		locandina : "ciclone.jpg",
		trailer : "https://www.youtube.com/embed/N5Pi2pNSAzw"
	}
]

var filmEmozionarsi = [
	{
		nome : "Hachiko - Il tuo migliore amico",
		regia: "Lasse Hallström",
		attori: "Richard Gere, Joan Allen, Cary-Hiroyuki Tagawa, Sarah Roemer, Jason Alexander",
		anno: "2009",
		paese: "USA",
		genere: "drammatico",
		durata : "93 minuti",
		trama : "Da un famoso racconto giapponese ispirato a una vicenda vera. Ogni giorno Hachi, un cane di razza Akita, accompagna il professor Parker (Richard Gere) alla stazione e lo aspetta al suo ritorno per dargli il benvenuto. L'emozionante e complessa natura di ciò che accade quando questa routine viene bruscamente interrotta rende la storia di Hachi una favola per tutte le età.", 
		locandina : "hachiko.jpg",
		trailer : "https://www.youtube.com/embed/eqxXyORPvKE"
	},
	{
		nome : "Gran Torino",
		regia: "Clint Eastwood",
		attori: "Clint Eastwood, Bee Vang, Ahney Her, Christopher Carley, John Antony, Austin Douglas Smith, John Carroll Lynch, William Hill (II)",
		anno: "2008",
		paese: "USA",
		genere: "drammatico",
		durata : "116 minuti",
		trama : "Walt Kowalski è un veterano della guerra di Corea che continua a nutrire sentimenti razzisti nei confronti del popolo coreano. La sua unica passione è la sua auto, una Gran Torino del 1972. Dovrà imparare a convivere con i suoi sentimenti e con i coreani dal momento che il suo quartiere è abitato da molti emigrati.",
		locandina : "grantorino.jpg",
		trailer : "https://www.youtube.com/embed/nA0V1YDk3Ws"
	},
	{
		nome : "Wonder",
		regia: "Stephen Chbosky",
		attori: "Julia Roberts, Jacob Tremblay, Owen Wilson, Mandy Patinkin, Ali Liebert, Daveed Diggs",
		anno: "2017",
		paese: "USA",
		genere: "drammatico",
		durata : "113 minuti",
		trama : "Auggie Pullman ha dieci anni, gioca alla playstation e adora Halloween perché è l'unico giorno dell'anno in cui si sente normale. Affetto dalla nascita da una grave anomalia cranio-facciale, Auggie ha subito 27 interventi e nasconde il suo volto sotto un casco da cosmonauta. Educato dalla madre e protetto dalla sua famiglia, Auggie non è mai andato a scuola ma è tempo per lui di affrontare il mondo, allievi e professori.",
		locandina : "wonder.jpg",
		trailer : "https://www.youtube.com/embed/tlOip8-k65U"
	}
]

var filmInnamorarsi = [
	{
		nome : "Le pagine della nostra vita",
		regia: " Nick Cassavetes",
		attori: "Ryan Gosling, Rachel McAdams, James Garner, Gena Rowlands, James Marsden, Sam Shepard",
		anno: "USA",
		paese: "2004",
		genere: "sentimentale, drammatico",
		durata : "127 minuti",
		trama : "Negli anni '40, Allie Hamilton arriva nella cittadina costiera di Seabrook, nel Nord Carolina, per trascorrervi l'estate con la sua famiglia. In un luna park incontra un ragazzo del posto. Immediatamente, Noah sente che lui e Allie sono fatti per stare insieme. Benché lei provenga da una famiglia facoltosa e lui sia un semplice operaio, nel corso di una appassionata e spensierata estate i due si innamorano profondamente.",
		locandina : "notebook.jpg",
		trailer : "https://www.youtube.com/embed/eO0SXYNFgFQ"
			
	},
	{
		nome : "Notting Hill",
		regia: "Roger Michell",
		attori: "Julia Roberts, Hugh Grant, Rhys Ifans, Emma Chambers, Hugh Bonneville, Emily Mortimer",
		anno: "1999",
		paese: "Gran Bretagna",
		genere: "sentimentale, drammatico",
		durata : "124 minuti",
		trama : "William Tacker è proprietario di una piccola libreria per viaggiatori nel quartiere di Notting Hill (Londra). La sua vita è tranquilla e monotona, fin quando la famosa attrice Anna Scott entra nella sua libreria e... lo bacia. In un turbinoso susseguirsi di gag e grazie anche all'amico Spike e alla sorella Honey che non perdono occasione per dar mostra di sé, i due si innamorano davvero, ma può una star di Hollywood innamorarsi di un uomo qualunque?",
		locandina : "nottinghill.jpg",
		trailer : "https://www.youtube.com/embed/u01y_3JPBHk"
	},
	{
		nome : "Orgoglio e pregiudizio",
		regia: "Joe Wright",
		attori: "Keira Knightley, Matthew MacFadyen, Brenda Blethyn, Donald Sutherland, Tom Hollander",
		anno: "2005",
		paese: "Gran Bretagna",
		genere: "sentimentale",
		durata : "127 minuti",
		trama : "Nell'Inghilterra di fine '700, le cinque sorelle Bennet sono cresciute assolutamente consapevoli della fissazione della loro madre di trovar loro un marito e assicurare loro un futuro sicuro. La vivace e intelligente Elisabeth, la secodogenita, invece, si sforza di vivere la sua vita con una prospettiva più ampia, incoraggiata da suo padre. Quando il ricco scapolo Charles Bingley si trasferisce in una casa vicina, i Bennet non stanno più nella pelle.",
		locandina : "orgoglioepregiudizio.jpg",
		trailer : "https://www.youtube.com/embed/v7hj2wSewDg",
	}
]

var filmSorprendersi = [
	{
		nome : "Now You See Me - I maghi del crimine",
		regia: "Louis Leterrier",
		attori: "Jesse Eisenberg, Mark Ruffalo, Woody Harrelson, Mélanie Laurent, Isla Fisher",
		anno: "2013",
		paese: "USA, Francia",
		genere: "Thriller",
		durata : "115 minuti",
		trama : "Il film vede una squadra speciale dell'FBI scaraventata in un gioco tra gatto e topo contro “I Quattro Cavalieri”, un gruppo formato dai più grandi illusionisti del mondo. “I Quattro Cavalieri” metteranno a segno una serie di rapine ai danni di potenti e corrotti uomini d'affari durante i loro spettacoli, regalando la refurtiva ai loro spettatori.",
		locandina : "nowyouseeme.jpg",
		trailer : "https://www.youtube.com/embed/jA_rwUgj4xM"	
	},
	{
		nome : "Angeli e demoni",
		regia: "Ron Howard",
		attori: "Tom Hanks, Ewan McGregor, Ayelet Zurer, Stellan Skarsgård, Pierfrancesco Favino",
		anno: "2009",
		paese: "USA",
		genere: "Thriller",
		durata : "138 minuti",
		trama : "Robert Langdon, esperto di iconologia e professore di Harvard, viene chiamato a far luce su un misterioso simbolo impresso col fuoco sul petto di Leonardo Vetra, un esperto di fisica svizzero assassinato misteriosamente. Langdon, insieme alla figlia dello scienziato, Vittoria, cercherà di scoprire chi e cosa si cela dietro l'omicidio. Le loro ricerche sveleranno il mistero degli Illuminati, un'antica e segreta fratellanza.",
		locandina : "angeliedemoni.jpg",
		trailer : "https://www.youtube.com/embed/ggs4UAQREjk"
	},
	{
		nome : "Il cigno nero",
		regia: "Darren Aronofsky",
		attori: "Natalie Portman, Vincent Cassel, Mila Kunis, Barbara Hershey, Winona Ryder",
		anno: "2010",
		paese: "USA",
		genere: "thriller",
		durata : "110 minuti",
		trama : "A New York una compagnia di balletto sta allestendo “Il lago dei cigni” e il regista Thomas Leroy decide di sostituire la prima ballerina Beth con Nina. Nello spettacolo sono previsti i ruoli dell'innocente cigno bianco, adatto a Nina, e del sensuale cigno nero, più adatto a Lily. La rivalità tra le due ballerine, porterà Nina ad esplorare il suo lato oscuro con il pensiero che Lily sia solo frutto della sua mente.",
		locandina : "cignonero.jpg",
		trailer : "https://www.youtube.com/embed/JP4iAg1Af2A"
	}
	
]

var filmSpaventarsi = [
	{
		nome : "Shining",
		regia: "Stanley Kubrick",
		attori: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers, Barry Nelson, Philip Stone",
		anno: "1980",
		paese: "USA",
		genere: "horror, thriller",
		durata : "116 minuti",
		trama : "Jack Torrence è un insegnante con l'ambizione di diventare scrittore. Perciò, quando gli propongono il posto di guardiano in un grande albergo di montagna, accetta ben felice e si trasferisce con la moglie Wendy e il loro figlio Danny. Il bambino ha una speciale percezione psichica e ciò che sente arrivati all'albergo lo impaurisce. Presto infatti le misteriose forze dell'albergo iniziano ad esercitare sulla famiglia Torrance il loro nefasto potere.",
		locandina : "shining.jpg",
		trailer : "https://www.youtube.com/embed/wIf1Lnp02c8"
		
	},
	{
		nome : "It",
		regia: "Andy Muschietti",
		attori: "Bill Skarsgård, Owen Teague, Jaeden Lieberher, Finn Wolfhard, Wyatt Oleff",
		anno: "2017",
		paese: "USA",
		genere: "horror",
		durata : "135 minuti",
		trama: "Ottobre 1988, nella cittadina di Derry. Il piccolo Georgie esce di casa nella pioggia per far navigare la barchetta di carta preparatagli dal fratello maggiore Billy, costretto a casa dall'influenza. La barchetta scorre per i rivoli lungo i marciapiedi, ma finisce in uno scolo che conduce alla rete fognaria. Georgie, contrariato, si china a guardare nella feritoia e incontra lo sguardo del bizzarro clown che abita nelle fogne, Pennywise.", 
		locandina : "it.jpg",
		trailer : "https://www.youtube.com/embed/SFCRzo6bl6s"
	},
	{
		nome : "The ring",
		regia: "Gore Verbinski",
		attori: " Naomi Watts, Brian Cox, Martin Henderson, David Dorfman, Jane Alexander (I), Lindsay Frost",
		anno: "2002",
		paese: "USA",
		genere: "horror",
		durata : "110 minuti",
		trama : "Sembrava l'ennesima leggenda metropolitana: la proiezione di un video che contiene immagini da incubo è seguita da una telefonata che annuncia la morte del spettatore sette giorni esatti dopo la visione della cassetta. La giornalista Rachel Keller nutre un notevole scetticismo nei confronti di tutta la storia, finché quattro adolescenti muoiono in circostanze misteriose esattamente una settimana dopo aver visionato la cassetta.",
		locandina : "thering.jpg",
		trailer : "https://www.youtube.com/embed/FNIgztMIFkA" 
	}
]
