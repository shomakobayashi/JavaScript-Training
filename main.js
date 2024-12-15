"user strict"

let command;

do { 
  command = Number(prompt('menu 1, 2, 3 or 0 to exit'));
  if (command == 0) {
    console.log('Exited');
  } else {
    console.log(`Menu ${command} prosecced.`);
  }
} while (command !== 0);

//for → while →dowhile
