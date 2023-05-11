let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
       count++;
       break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
       count--;
       break;
    case 7:
    case 8:
    case 9:
        break;
  }
  let s="Hold";
  if (count>0){
    s='Bet';
  }
  return count +" "+s;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
