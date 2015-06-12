var blessed = require("blessed")
/**
 * This file is part of Graylog2.
 *
 * Graylog2 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Graylog2 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Graylog2.  If not, see <http://www.gnu.org/licenses/>.
 */


var contrib = require("blessed-contrib")

var screen = blessed.screen()
var grid = new contrib.grid({rows: 2, cols: 2, screen:screen})

// Set up widgets.


var box = grid.set(0, 0, 1, 1, contrib.log, {
  fg: "green",
  selectedFg: "green",
  bufferLength: 50,
  label: "Messages"
})

screen.render()

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

module.exports = {

	screen: function() {
		return screen;
	},

	grid: function(grid) {
		switch(grid) {
			case "main":
				return grid;
			case "bottom":
				return bottomGrid;
		}
	},

	render: function() {
		screen.render()
	}

}
