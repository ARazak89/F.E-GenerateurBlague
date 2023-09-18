const blague = document.querySelector('.blague');
const generateur = document.querySelector('.btn-primary');

const blagues = [
    "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau.",
    "Quel est le comble pour un électricien ? De ne pas être au courant.",
    "Pourquoi les poissons détestent-ils l'ordinateur ? Parce qu'ils ont peur du net.",
    "Pourquoi les oiseaux ne portent-ils jamais d'ordinateurs ? Parce qu'ils ont peur du tweet !",
    "Pourquoi les fantômes n'utilisent-ils jamais d'ordinateurs ? Parce qu'ils ont peur du clic !",
    "Pourquoi le soleil ne joue-t-il jamais au football ? Parce qu'il a déjà trop de coups de chaleur !",
    "Qu'est-ce qui est toujours mouillé quand il est sec ? Un poisson !",
    // Hassane Abdel-Razak
    "Quelle est la différence entre un avion et une mouche ? L'avion peut voler, mais la mouche ne peut pas avionner !",
    "Pourquoi les mathématiques et l'histoire se chamaillent-elles toujours ? Parce qu'elles ne sont jamais d'accord sur l'addition du passé !",
    "Pourquoi les pommes rougissent-elles ? Parce qu'elles voient la salade toute nue !",
    // Ajoutez plus de blagues ici
];

generateur.addEventListener('click', () => {
    console.log('hehehehe');
    const indexAleatoire = Math.floor(Math.random() * blagues.length);
    blague.textContent = blagues[indexAleatoire];
    blague.setAttribute('style','font-size : 30px; font-weight: bold');
});