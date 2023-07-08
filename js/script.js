// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


const checkDogs = function (dogsJulia, dogsKate){
  const dogsJuliaNew =    dogsJulia.slice(1,-2);
  const dogs = dogsJuliaNew.concat(dogsKate);
  dogs.forEach(function (age, i){
    age >= 3 ? console.log(`Dog number ${i +1} is an adult and is ${age} years old.`) : console.log(`Dog number ${i +1} is still a puppy 🐶`)
 });
};

checkDogs([3,5,2,12,7], [4,1,15,8,3]);
checkDogs([9,16,6,8,3], [10,5,6,1,4]);

const calcAverageHumanAge = function (ages) {
	const humanAge = ages.map((age) => age <= 2 ? age * 2 : age * 4).filter((age) => age > 18);
	const averageHumanAge = humanAge.reduce((acc, cur) => acc + cur, 0) / humanAge.length;
 
	 console.log(humanAge);
	 console.log(averageHumanAge);
 };
 
 calcAverageHumanAge([5,2,4,1,15,8,3]);
 calcAverageHumanAge([16,6,10,5,6,1,4]);