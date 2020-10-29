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
let whichArray = [];
const evenOrOdd = function (numberArray) {

    for (let i = 0; i < numberArray.length; i++) {

        if (numberArray[i] % 2 === 0) {
            whichArray.push("Even")
        }
        else {
            whichArray.push("Odd")
        }


    }
    return whichArray;
    console.log(whichArray);


}


const arrayOfNumber = [4, 4, 5, 6, 7]
const whichIsIt = evenOrOdd(arrayOfNumber)
console.log(whichIsIt);

// work on this to return an array of evens and odds
//Double Functions
const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]
const filteredWords = words.filter((word) => {
    return !word.startsWith("k")

}
)
console.log(filteredWords)
const sentence = (wordsInArray) => {
    return wordsInArray.join(" ")
}
const sentenceWithoutK = sentence(filteredWords)
console.log(sentenceWithoutK)
//Sven
const chanceOfCatchingFish = () => {
    let chance = Math.random() * 3
    if (chance <= 1) {
        console.log("Sven hooked a Tuna")
    }
    else {
        console.log("Sven came up empty-handed")
    }
}
chanceOfCatchingFish();

