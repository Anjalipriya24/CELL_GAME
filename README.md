# CELL GAME

This Repository serves as an implementation for the Cell Game problem.

## Steps for Setting up the App:
* Clone the Repository to your Local Machine.
* Navigate to the cloned folder through the Terminal
* Make Sure you have [Node.js](https://nodejs.org/en/download/current/) installed.
* Run the Following Command Through the Terminal:
 bash
 npm install 
 
 * Once its finished simply execute the following line in the Terminal:
 
  bash
 npm start 
 
 
 <p align="center">
  <img width="800" src="https://user-images.githubusercontent.com/64773813/133481894-80fff943-e163-48f0-9e0e-fc05d05cc4ba.PNG">
</p>

## How the Game Works:
* Each Red block is a Live Cell and the White Blocks are Dead cells.
* Initially through a random seed, the first generation of cells will be created.
* You can keep clicking on the "Progress" button to progress the generation further.
* You can also click anywhere on the grid to add new cells.
* Adding new cells will then move the generation forward, the cells will evolve on the basis of following rules:
  1. Any live cell with fewer than two live neighbors dies, as if by loneliness.
  2. Any live cell with more than three live neighbors dies, as if by overcrowding.
  3. Any live cell with two or three live neighbors lives, unchanged, to the next generation.
  4. Any dead cell with exactly three live neighbors comes to life. 
 * There is also an index associated with each cell, you can display them by clicking on "Display Name".
 * Typing any index in the Search Bar will highlight that cell in the grid.
 * 



