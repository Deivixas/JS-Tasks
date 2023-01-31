/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

const movie = {
  title: "avatar",
  director: "James Cameron",
  budget: 2000000,
};

if (2000000 < 100000000) {
  wasExpensive = "true";
} else {
  wasExpensive = "false";
}

console.log(wasExpensive);
