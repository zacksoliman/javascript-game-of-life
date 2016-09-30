/*
  Author(s): Zakaria Soliman

  This is a small library to assists IFT1015 students with their midterm
  programming project.
*/

$(function() {
    var playEvent = function() {
        play();
        $(this).text('Stop');
        $(this).unbind('click').click(stopEvent);
    };
    var stopEvent = function() {
        stop();
        $(this).text('Play');
        $(this).unbind('click').click(playEvent);
    };
    $('#toggle-play').click(playEvent);

    $('#w, #h').on('input', function() {

        var w = $('#w').val(), h = $('#h').val();

        if(isNaN(h) || isNaN(w) || w < 1 || h < 1 || h > 100 || w > 100) {
            return;
        }
        
        resizeGrid(w, h);
    });
});

// object that represents the grid. Will expose methods to manipulate it's dislay.
var Grid = {
    create: function(rows, cols) {
        var $grid = $("#grid");
        var i = 0;
        var j = 0;
        var $newRow, $td;

        $grid.empty();

        for (i = 0; i < rows; i++) {
            $newRow = $('<tr></tr>');
            for (j = 0; j < cols; j++){
                $td = $('<td id="' + i + '-' + j + '" onclick="changeState(' + i + ',' + j + ')"></td>');
                $td = $($td).appendTo($newRow);
            }
            $newRow.appendTo($grid);
        }
    },
    changeCellHeight: function() {
        //TODO
    },
    changeCellWidth: function() {
        //TODO
    },
    colorCell: function(x, y, color) {
        $('#' + x + '-' + y).style('background-color', color);
    }
};

var playInterval = null;

function play() {
    if(playInterval == null)
        playInterval = setInterval(step, 300);
}

function stop() {
    clearInterval(playInterval);
    playInterval = null;
}
