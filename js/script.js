/* 
X Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

X Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
X Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
X Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/



// team array
const team = [
    {
        tName : "Wayne",
        tSurname : "Barnett",
        tRole : "Founder & CEO",
        tImg : "../img/wayne-barnett-founder-ceo.jpg",
        tAlt : "Wayne"
    },
    {
        tName : "Angela",
        tSurname : "Caroll",
        tRole : "Chief Editor",
        tImg : "../img/angela-caroll-chief-editor.jpg",
        tAlt : "Angela"
    },
    {
        tName : "Walter",
        tSurname : "Gordon",
        tRole : "Office Manager",
        tImg : "../img/walter-gordon-office-manager.jpg",
        tAlt : "Walter"
    },
    {
        tName : "Angela",
        tSurname : "Lopez",
        tRole : "Social Media Manager",
        tImg : "../img/angela-lopez-social-media-manager.jpg",
        tAlt : "Angela"
    },
    {
        tName : "Scott",
        tSurname : "Estrada",
        tRole : "Developer",
        tImg : "../img/scott-estrada-developer.jpg",
        tAlt : "Scott"
    },
    {
        tName : "Barbara",
        tSurname : "Ramos",
        tRole : "Graphic Designer",
        tImg : "../img/barbara-ramos-graphic-designer.jpg",
        tAlt : "Barbara"
    }
]


function createCard(name, surname, role, srcImg, alt){
    const teamBox = document.querySelector('.row');
    const col = document.createElement('div');
    col.classList.add('col-4');

    const card = document.createElement('div');
    card.classList.add('card', 'mb-5', 'border-0');

    col.append(card);

    const img = document.createElement('img');
    img.src = srcImg;
    img.alt = alt;

    const cardName = document.createElement('h2');
    cardName.classList.add('text-center', 'text-secondary', 'fs-5', 'mt-4');
    cardName.innerText = name + surname;

    const cardRole = document.createElement('p');
    cardRole.classList.add('text-center', 'text-secondary');
    cardRole.innerText = role;

    card.append(img,cardName,cardRole);
    teamBox.append(col);
}



for (let i = 0; i < team.length; i++){
    createCard(team[i].tName, team[i].tSurname, team[i].tRole, team[i].tImg, team[i].tAlt);
}