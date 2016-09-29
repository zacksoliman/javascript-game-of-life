/*
  Author(s): Zakaria Soliman

  This is a small library to assists IFT1015 students with their midterm
  programming project.
*/


// object that represents the grid. Will expose methods to manipulate it's dislay.
var Grid = function(numOfRows, numOfCols, cell_height, cell_width, initial_setup) {

    var nRows = numOfRows || 20;
    var nCols = numOfCols || 20;
    var cell_width = cell_width || 10;
    var cell_height = cell_height || 10;
    var init_setup = initial_setup || [];

    return {
        draw: function() {
            console.log("Drawing");
            buildTable(nRows, nCols)
        },
        update: function() {
            //TODO
        },
        addLines: function() {
            //TODO
        },
        addCols: function() {
            //TODO
        },
        changeCellHeight: function() {
            //TODO
        },
        changeCellWidth: function() {
            //TODO
        },
        fillCell: function() {
            //TODO;
        },
        killCell: function() {
            //TODO;
        }
    }
};

// object representing a cell
var Cell = function() {
    //TODO
}

// Helper function to draw the table cells
function buildTable(rows, cols) {
    var $grid = $("#grid");
    var i = 0;
    var j = 0;
    var $newRow, $td;

    $grid.empty();

    for (i = 0; i < rows; i++) {
        $newRow = $('<tr></tr>');
        for (j = 0; j < cols; j++){
            $td = $('<td class=" row-' + i + ' col-' + j + '" contentEditable="false"></td>');
            $td = $($td).appendTo($newRow);
        }
        $newRow.appendTo($grid);
    }

};
