export const kataRound = (price: number): number => {
  let cents: number = price * 100;
  if(cents % 5 === 0) { return price;}
  cents += (5-cents % 5);
  return cents / 100;
}
