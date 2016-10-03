// État de la grille
var largeur=40, hauteur=40;
var cells = [];

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
