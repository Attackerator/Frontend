

export const rollManyDice = (num, sides) => {
  let total = 0;
  let rolls = num;
  for(var i=0; i < rolls; i++){
    total = total+randomRoll(sides);
  }
  return total;
};

export const randomRoll= (sides) => {
  return Math.floor(Math.random() * sides) + 1;
};
