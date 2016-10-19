var w=40, h=40;
var cells = [];

for(var dim=0; dim<3; dim++) {
    cells.push([]);
    for(var i=0; i<h; i++) {
        cells[dim].push([]);
        for(var j=0; j<w; j++) {
            cells[dim][i].push(0);
        }
    }
}

function draw(x, y, cells) {
    var color = '#' + cells.map(function(grid) {
        return grid[y][x] ? 'FF' : '00';
    }).join('');

    Grid.colorCell(x, y, color);
}

function redraw() {
    for(var i=0; i<h; i++) {
        for(var j=0; j<w; j++) {
            draw(j, i, cells);
        }
    }
}

function cell_value(dim, x, y) {
    x = (x + w) % w;
    y = (y + h) % h;

    return cells[dim][y][x];
}

function nextState(dim, x, y) {
    var voisins = 0;

    for(var i = x - 1; i <= x + 1; i++) {
        for(var j = y - 1; j <= y + 1; j++) {

            if(i == x && j == y)
                continue;

            voisins += cell_value(dim, i, j);
        }
    }

    return (!cells[dim][y][x] && voisins == 3) || (cells[dim][y][x] && (voisins == 2 || voisins == 3));
}

function changeState(x, y) {
    for(var i=0; i<3; i++) {
        cells[i][y][x] = +!cells[i][y][x];
        
        if(cells[i][y][x])
            break;
    }

    draw(x, y, cells);
}

function step() {
    for(var dim=0; dim<3; dim++) {
        var new_cells = [];

        for(var i=0; i<h; i++) {
            new_cells.push([]);
            for(var j=0; j<w; j++) {
                var state = nextState(dim, j, i);

                new_cells[i].push(state);
            }
        }

        cells[dim] = new_cells;
    }

    redraw();
}

function randomGrid(percent) {
    for(var dim=0; dim<3; dim++) {
        for(var i=0; i<h; i++) {
            for(var j=0; j<w; j++) {
                cells[dim][i][j] = +(Math.random() < percent/100);
            }
        }
    }
    
    redraw();
}

function resetGrid() {
    Grid.create(w, h);

    for(var dim=0; dim<3; dim++) {
        for(var i=0; i<h; i++) {
            for(var j=0; j<w; j++) {
                cells[dim][i][j] = 0;
            }
        }
    }
}

function resizeGrid(width, height) {
    Grid.create(width, height);

    var new_cells = [];
    for(var dim=0; dim<3; dim++) {
        new_cells.push([]);
        for(var i=0; i<height; i++) {
            new_cells[dim].push([]);
            for(var j=0; j<width; j++) {
                var val = 0;

                if(i < h && j < w) {
                    val = cells[dim][i][j];
                }

                new_cells[dim][i].push(val);
            }
        }
    }
    
    w = width;
    h = height;
    cells = new_cells;

    redraw();
}

Grid.create(w,h);
