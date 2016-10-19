// État de la grille
var largeur=40, hauteur=40;
var cells = []; // Besoin d'un tableau 2D de 40x40 ici pour gérer la grille

function changeState(x, y) {
    console.log('changeState');
}

function step() {
    console.log('step');
}

function randomGrid(percent) {
    console.log('randomGrid');
}

function resetGrid() {
    console.log('resetGrid');
}

function resizeGrid(width, height) {
    Grid.create(width, height);

    console.log('resizeGrid');
}

// Crée la grille initiale
Grid.create(40,40);
