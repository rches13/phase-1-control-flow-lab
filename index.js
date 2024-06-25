function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 2500) {
    return 'No can do.';
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.';
  } else if (ride > 400 && ride <= 2000) {
    return 'That will be twenty bucks.';
  }
}

function ternaryCheckCity(city){
  let result = city === "NYC"? "Ok, sounds good.":"No go.";
  return result;
}

function switchOnCharmFromTip(value){
  switch (value) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}