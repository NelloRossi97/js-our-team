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