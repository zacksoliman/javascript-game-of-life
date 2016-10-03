var w=40, h=40;
var cells = [];

for(var i=0; i<h; i++) {
    cells.push([]);
    for(var j=0; j<w; j++) {
        cells[i].push(0);
    }
}

function draw(x, y, cells) {
    var state = cells[y][x];
    var color = state ? 'darkblue' : 'transparent';

    Grid.colorCell(x, y, color);
}

function cell_value(x, y) {
    x = (x + w) % w;
    y = (y + h) % h;

    return cells[y][x];
}

function nextState(x, y) {
    var voisins = 0;

    for(var i = x - 1; i <= x + 1; i++) {
        for(var j = y - 1; j <= y + 1; j++) {

            if(i == x && j == y)
                continue;

            voisins += cell_value(i, j);
        }
    }

    return (!cells[y][x] && voisins == 3) || (cells[y][x] && (voisins == 2 || voisins == 3));
}

function changeState(x, y) {
  console.log('changeState')
    cells[y][x] = +!cells[y][x];
    draw(x, y, cells);
}

function step() {
    var new_cells = [];

    for(var i=0; i<h; i++) {
        new_cells.push([]);
        for(var j=0; j<w; j++) {
            var state = nextState(j, i);

            new_cells[i].push(state);

            draw(j, i, new_cells);
        }
    }

    cells = new_cells;
}

function randomGrid(percent) {
    for(var i=0; i<h; i++) {
        for(var j=0; j<w; j++) {
            cells[i][j] = +(Math.random() < percent/100);
            draw(j, i, cells);
        }
    }
}

function resetGrid() {
    Grid.create(w, h);

    for(var i=0; i<h; i++) {
        for(var j=0; j<w; j++) {
            cells[i][j] = 0;
        }
    }
}

function resizeGrid(width, height) {
    Grid.create(width, height);

    var new_cells = [];

    for(var i=0; i<height; i++) {
        new_cells.push([]);
        for(var j=0; j<width; j++) {
            var val = 0;

            if(i < h && j < w) {
                val = cells[i][j];
            }

            new_cells[i].push(val);
            draw(j, i, new_cells);
        }
    }

    w = width;
    h = height;
    cells = new_cells;
}

Grid.create(w,h);
