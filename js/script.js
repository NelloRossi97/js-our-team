/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/


`
<div class="col-4">
<div class="card mb-5 border-0">
    <img src="./img/wayne-barnett-founder-ceo.jpg" alt="wayne">
    <h2 class="text-center text-secondary fs-5 mt-4">Wayne Barnett</h2>
    <p class="text-center text-secondary">Founder & CEO</p>
</div>
</div>
`
const team = [
    {
        tName : "Wayne",
        tSurname : "Barnett",
        tRole : "Founder & CEO",
        tImg : "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        tName : "Angela",
        tSurname : "Caroll",
        tRole : "Chief Editor",
        tImg : "../img/angela-caroll-chief-editor.jpg"
    },
    {
        tName : "Walter",
        tSurname : "Gordon",
        tRole : "Office Manager",
        tImg : "../walter-gordon-office-manager.jpg"
    },
    {
        tName : "Angela",
        tSurname : "Lopez",
        tRole : "Social Media Manager",
        tImg : "../img/angela-lopez-social-media-manager.jpg"
    },
    {
        tName : "Scott",
        tSurname : "Estrada",
        tRole : "Developer",
        tImg : "../img/scott-estrada-developer.jpg"
    },
    {
        tName : "Barbara",
        tSurname : "Ramos",
        tRole : "Graphic Designer",
        tImg : "../img/barbara-ramos-graphic-designer.jpg"
    }
]