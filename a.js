"user strict";

const color = prompt("Clolor?");

switch (color) {
  case 'red':
    console.log('stop!');
    break;

  case 'yellow':
    console.log('slow');
    break;
  
  case 'blue':
    console.log('go!');
  
  default:
    console.log('fuck!!!!')
}