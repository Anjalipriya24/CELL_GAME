// import React, { useState, useEffect } from 'react';
// const Grid = (props) => {
//   var arr = Array.apply(null, Array(500)).map(function (x, i) {
//     return { index: i, state: Math.random() < 0.5 };
//   }); //Making an arrayof 540 cell initialized to Null values and random State Values
//   const array_chunks = (array, chunk_size) =>
//     Array(Math.ceil(array.length / chunk_size))
//       .fill()
//       .map((_, index) => index * chunk_size)
//       .map((begin) => array.slice(begin, begin + chunk_size)); //Evenly Dividing into grid(chunk_size)
//   const matgrid = array_chunks(arr, 25); //Creating Grid Matrix

//   //To Exclude Borders
//   for (let i = 0; i < matgrid.length; i++) {
//     for (let j = 0; j < matgrid[0].length; j++) {
//       if (
//         i === 0 ||
//         j === 0 ||
//         i === matgrid.length - 1 ||
//         j === matgrid[0].length - 1
//       ) {
//         matgrid[i][j].border = true;
//         matgrid[i][j].state = false;
//       } else {
//         matgrid[i][j].border = false;
//       }
//     }
//   }
//   //Initializing the states
//   const [grid, setGrid] = useState(matgrid);
//   const [index, setIndex] = useState(true);
//   const [dispname, setDispname] = useState(false);
//   const [displayname, setDisplayname] = useState(null);

//   useEffect(() => {
//     var nextGeneration = [...grid]; //Making a copy of the Grid
//     // Looping through every cell
//     for (let l = 1; l < grid.length - 1; l++) {
//       for (let m = 1; m < grid[0].length - 1; m++) {
//         //Neighbours that are alive
//         var aliveNeighbours = 0;
//         for (let i = -1; i <= 1; i++) {
//           for (let j = -1; j <= 1; j++) {
//             aliveNeighbours += grid[l + i][m + j].state === true ? 1 : 0;
//           }
//         }
//         aliveNeighbours -= grid[l][m].state === true ? 1 : 0;
//         //Any live cell with fewer than two live neighbors dies, as if by loneliness.
//         if (grid[l][m].state === true && aliveNeighbours < 2) {
//           nextGeneration[l][m].state = false;
//         }
//         //Any live cell with more than three live neighbors dies, as if by overcrowding.
//         else if (grid[l][m].state === true && aliveNeighbours > 3) {
//           nextGeneration[l][m].state = false;
//         }
//         //Any dead cell with exactly three live neighbors comes to life.
//         else if (grid[l][m].state === false && aliveNeighbours === 3) {
//           nextGeneration[l][m].state = true;
//         }
//         //Any live cell with two or three live neighbors lives, unchanged, to the next generation.
//         else {
//           nextGeneration[l][m] = grid[l][m];
//         }
//       }
//     }
//     setGrid(nextGeneration);
//   }, );
//   return (
//     <div>
//       <h1 style={{ textAlign: 'center', marginTop: '0rem' }}>Cell Game</h1>
//       <table style={{ marginLeft: '19rem', marginTop: '-1rem' }}>
//         <tbody>
//           {grid.map((row, index1) => (
//             <tr>
//               {row.map((item, index2) => (
//                 <td
//                   style={
//                     displayname == item.index
//                       ? {
//                           border: '0.5vh solid black',
//                           width: '1vw',
//                           textAlign: 'center',
//                           borderRadius: '0.5vw',
//                           backgroundColor: 'yellow',
//                           cursor: 'pointer',
//                         }
//                       : item.state === true && item.border === false
//                       ? {
//                           border: '0.5vh solid black',
//                           width: '1vw',
//                           textAlign: 'center',
//                           borderRadius: '0.5vw',
//                           backgroundColor: 'red',
//                           cursor: 'pointer',
//                         }
//                       : {
//                           border: '0.5vh solid black',
//                           width: '1.8vw',
//                           textAlign: 'center',
//                           borderRadius: '0.5vw',
//                           cursor: 'pointer',
//                         }
//                   }
//                   onClick={(event) => {
//                     let newarr = [...grid];
//                     let cell =
//                       item.border === false
//                         ? {
//                             ...newarr[index1][index2],
//                             state: !grid[index1][index2].state,
//                           }
//                         : { ...newarr[index1][index2], state: false };
//                     newarr[index1][index2] = cell;
//                     setGrid(newarr);
//                     setIndex(!index);
//                   }}
//                   key={Math.random()}
//                 >
//                   {dispname ? item.index : <a>.</a>}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Onclick Shows the progress of each cell */}
//       <button
//         style={{
//           marginLeft: '36rem',
//           borderRadius: '8px',
//           fontSize: '18px',
//           marginTop: '5px',
//         }}
//         onClick={() => setIndex(!index)}
//       >
//         Progress
//       </button>
//       {/*Each cell should have a unique name Onclick Displays Name*/}
//       <button
//         style={{
//           marginLeft: '1.4rem',
//           marginTop: '5px',
//           borderRadius: '8px',
//           fontSize: '18px',
//         }}
//         onClick={() => setDispname(!dispname)}
//       >
//         Display Names
//       </button>
//       {/*Provide a way to search by the name of the cell and show the current state of the cell */}
//       <input
//         type="text"
//         style={{ marginLeft: '1.5rem', borderRadius: '3px', fontSize: '18px' }}
//         onChange={(event) => {
//           event.target.value === ''
//             ? setDisplayname(null)
//             : setDisplayname(event.target.value);
//         }}
//       />
//     </div>
//   );
// };
// export default Grid;
