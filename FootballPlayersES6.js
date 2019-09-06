
class Players{
  constructor(image, name, lname, playerNo, position, age) {
	this.image = "./img/" + image;
	this.name = name;
	this.lname = lname;
	this.playerNo = playerNo;
	this.position = position;
	this.age = age
  }
}

const Nemanja = new Players("NemanjaMiletic.jpg", "Nemanja", "Miletic", 26, "Defender", 27);
const Aleksandar = new Players("AleksandarScekic.jpg", "Aleksandar", "Scekic", 19, "Midfielder",27);
const Armin = new Players("ArminDjerlek.jpg", "Armin", "Djerlek", 8, "Midfielder", 18);
const Danilo = new Players("DaniloPantic.jpg", "Danilo", "Pantic", 55, "Midfielder", 22);
const Filip = new Players("FilipKljajic.jpg", "Filip", "Kljajic", 12, "Goalkeeper", 28);
const Goran = new Players("GoranZakaric.jpg", "Goran", "Zakaric", 77, "Midfielder", 26);
const Miroslav = new Players("MiroslavVulicevic.jpg", "Miroslav", "Vulicevic", 4, "Defender", 34);
const Nebojsa = new Players("NebojsaKosovic.jpg", "Nebojsa", "Kosovic", 14, "Midfielder", 24);
const Ricardo = new Players("RicardoGomes.jpg", "Ricardo", "Gomes", 11, "Forward", 27);
const Sasa = new Players("SasaZdjelar.jpg", "Sasa", "Zdjelar", 16, "Midfielder", 24);
const Strahinja = new Players("StrahinjaPavlovic.jpg", "Strahinja", "Pavlovic", 3, "Defender", 18);
const Svetozar = new Players("SvetozarMarkovic.jpg", "Svetozar", "Markovic", 15, "Defender", 19);
const Valiante = new Players("ValianteHernandez.jpg", "Valiante", "Hernandez", 6, "Defender", 32);
const Vladimir = new Players("VladimirStojkovic.jpg", "Vladimir", "Stojkovic", 88, "Goalkeeper", 35);
const Zoran = new Players("ZoranTosic.jpg", "Zoran", "Tosic", 7, "Midfielder", 32);


let team = {
	teamLogo: "./img/logo.jpg",
	teamName: "FK Partizan",
	players: [Nemanja, Aleksandar, Armin, Danilo, Filip, Goran, Miroslav, Nebojsa, Ricardo, Sasa, Strahinja,
	Svetozar, Valiante, Vladimir, Zoran]
}

const firstTeam = document.querySelector('.firstTeam');
const bench = document.querySelector('.bench');


let getRandomNumber = (arr) => Math.round(Math.random() * (arr.length - 1))


const addLogo = () => {
	const header = document.querySelector('header .header-inner');
   const logo = document.createElement('img');

    logo.setAttribute('src', team.teamLogo);
    logo.classList.add('logo');
    header.prepend(logo);
} 

const addPageTitle = () =>{
	const main = document.querySelector('main');
	const mainTitle = document.createElement('h1');

    mainTitle.textContent = team.teamName;
    main.prepend(mainTitle);
} 

const addPlayers = () =>{
    while(team.players.length) {
    	const randomPlayerNumber = getRandomNumber(team.players);
	    const randomPlayer = team.players[randomPlayerNumber];

        if(team.players.length > 4) {
    		firstTeam.appendChild(createPlayer(randomPlayer));
    	} else {
            bench.appendChild(createPlayer(randomPlayer));
    	}
        team.players.splice(randomPlayerNumber, 1)
    }
}

const createPlayer = (playerData) =>{
	const playerElement = document.createElement('div');
    playerElement.classList.add('player');

    const image = '<img src="' + playerData.image + '" />';
    const name = '<p><span>Name:</span> ' + playerData.name + ' ' + playerData.lname + '</p>';
    const age = '<p><span>Age:</span> ' + playerData.age + '</p>';
    const position = '<p><span>Position:</span> ' + playerData.position + '</p>';
    
    playerElement.innerHTML = image + name + age + position;  
    return playerElement;
}

let switchPlayers = () =>{
   const firstPlayers = firstTeam.querySelectorAll(".player");
   const benchPlayers = bench.querySelectorAll(".player");
   const firstPlayerNumber = getRandomNumber(firstPlayers);
   const benchPlayerNumber = getRandomNumber(benchPlayers);
   const firstPlayer = firstPlayers[firstPlayerNumber];
   const benchPlayer = benchPlayers[benchPlayerNumber];
   
   const prevBenchPlayer = benchPlayer.previousSibling;
   const nextBenchPlayer = benchPlayer.nextSibling;

   firstPlayer.before(benchPlayer);
   prevBenchPlayer ? prevBenchPlayer.after(firstPlayer) : nextBenchPlayer.before(firstPlayer);
}

addLogo();
addPageTitle();
addPlayers();
   
setInterval(switchPlayers, 3000);