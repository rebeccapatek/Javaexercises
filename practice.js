///Create a function to calculate someone'e age in dog years
// let ageOfPerson = 56
// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7
//     console.log(ageInDogYears)
// }

// calculateAgeInDogYears(ageOfPerson)

// Up above the function performs the calculation and then logs the result but it does not return a value

// A pure function means that a function does its job and returns a value

const calculateAgeInDogYears = (ageOfPerson) => {
    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge);

//Best in Show
const favoriteDog = (breed) => {
    const sent = "My favorite kind of dog is a " + `${breed}`
    return sent
}
const breedSentence = favoriteDog("golden retriever")

const dogOrCat = (animalNoise) => {
    let emptySentence = ""
    if (animalNoise === "meow") {
        emptySentence = "I like cats"

    }
    else {
        emptySentence = `${breedSentence}`
    }
    return emptySentence

}
const newSentenceWithIf = dogOrCat("tweet");
console.log(newSentenceWithIf);

//Addition
const addTwo = (a, b) => {
    const sum = a + b
    return sum
}
const theAnswer = addTwo(8, 9);
console.log(theAnswer);

const addThree = (a, b, c) => {
    const sum = a + b + c
    return sum
}
const theNewAnswer = addThree(8, 9, 10);
console.log(theNewAnswer);

//Self -Driving Cars

const go = (direction, speed) => {

    let sentence = ""
    if (speed > 75) {
        sentence = "SLOW DOWN!!!!"

    }
    else {
        sentence = "The car is moving " + `${direction}` + " at " + `${speed}` + "mph."
    }
    return sentence
}



const theSentenceWithParameters = go("forward", 80)
console.log(theSentenceWithParameters);

//Evens or Odds
const evenOrOdd = (numberArray) => {
    for (let num of numberArray) {
        const decide = num % 2
        if (decide === 0) {
            return ("Even")
        }
        else {
            return ("Odd")
        }
    }

}


const arrayOfNumber = [4, 4, 5, 6, 7]
const whichIsIt = evenOrOdd(arrayOfNumber)
console.log(whichIsIt);
// work on this to return an array of evens and odds


