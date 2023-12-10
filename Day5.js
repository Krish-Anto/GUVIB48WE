
//a) Write a constructor for the class Movie, which takes a 
String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies 
in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with 
the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”



class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        // Set rating to "PG" by default if not provided
        this.rating ="PG";
    }

    
     getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Create an instance of the Movie class with the specified details for "Casino Royale"
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Print the details of the created movie
console.log("Title:", casinoRoyale.title);
console.log("Studio:", casinoRoyale.studio);
console.log("Rating:", casinoRoyale.rating);

//Write a “person” class to hold all the details.
class Person {
    constructor(firstName, lastName, age, gender, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails() {
        return `Name: ${this.getFullName()}, Age: ${this.age}, Gender: ${this.gender}, Email: ${this.email}`;
    }
}


//write a class to calculate the uber price.

class UberPrice {
    constructor(distance, duration) {
        this.distance = distance; // in miles
        this.duration = duration; // in minutes
        this.surgeMultiplier = surgeMultiplier;
    }

    calculateFare() {
        // Basic fare calculation (adjust as needed)
        const baseFare = 2.5;
        const perMileRate = 1.5;
        const perMinuteRate = 0.2;

        const totalFare = (baseFare + perMileRate * this.distance + perMinuteRate * this.duration) ;

        return totalFare.toFixed(2);
    }
var fare = new UberPrice(2,3);

console.log(fare.calculateFare());

}




