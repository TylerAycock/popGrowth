//p0 = population
//pg = percent growth
//aug = (inhabitants coming or leaving each year)
//pop = (population to surpass)

const nbYear = (pO, pg, aug, pop) => {
  let percent = pg / 100;
  years = 0;
  while (pO < pop) {
    pO = pO + pO * percent + aug;
    years++;
  }
  return years;
};

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
