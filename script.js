//HTML Display Fuctionality
const gameDisplay = () => {
    let a = document.getElementById("videoGameCollection");
    let b = document.getElementById("collectionHeader")
    let c = document.getElementById("collectionContent");
    let d = document.getElementById("vGameCollectionContent");
            a.style.display = "flex";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "block";
}
const videoDisplay = () => {
    let a = document.getElementById("videoGameCollection");
    let b = document.getElementById("collectionHeader")
    let c = document.getElementById("collectionContent");
    let d = document.getElementById("vGameCollectionContent");
            a.style.display = "none";
            b.style.display = "block";
            c.style.display = "flex";
            d.style.display = "none";
}
//Media Collection of Objects
let collection = {
//Games object
        videoGames : {

            theWitcherOne: {
                completed: 'No.',
                genre: ['third person rpg',' open world',' adventure.'],
                getWitcher () {
                    let witcherArray = [];
                    let a = document.getElementById("witcher-content");
                    let b = Object.entries(collection.videoGames.theWitcherOne);
                    let c = document.getElementById("witcher-container");
                    witcherArray.push(b.pop());
                    a.innerText = `${b[0].join(': ')}
                    ${b[1].join(': ')}`;
                    c.style.display = "block";
                }
            },
            theWitcherTwo: {
                completed: true,
                genre: ['third person rpg','open world','adventure']
            },
            theWitcherThree: {
                completed: false,
                genre: ['third person rpg','open world','adventure']
            },
            massEffect: {
                completed: false,
                genre: ['science fiction','third person rpg','shooter']
            },
            massEffectTwo: {
                completed: false,
                genre: ['science fiction','third person rpg','shooter']
            },
            massEffectThree: {
                completed: false,
                genre: ['science fiction','third person rpg','shooter']
            },
            deadSpace: {
                completed: false,
                genre: ['surival','horror','shooter']
            }
        },
//Completed game function
        completeGame (game) {
            switch (game) {
                case 'theWitcherOne':
                    collection.videoGames.theWitcherOne.completed = true;
                    break;
                case 'theWitcherTwo':
                    collection.videoGames.theWitcherTwo.completed = true;
                    break;
                case 'theWitcherThree':
                    collection.videoGames.theWitcherThree.completed = true;
                    break;
                case 'deadSpace':
                    collection.videoGames.deadSpace.completed = true;
                    break;
                default:
                        console.log('Sorry, try again');
            }
            console.log(collection.videoGames.deadSpace.completed)
            },
//Perfect games array
    perfectLog: []

}

