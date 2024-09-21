// Create a fun JavaScript program that generates pet profiles using literals and template literals. This will help you understand how to use different types of literals in JavaScript effectively.

// #### Instructions

// 1. **Create a Pet Profile Using Standard String Literals**:
//    - Use the given variables to create a string describing the pet.
//    - Use concatenation with standard string literals.

// 2. **Create a Pet Profile Using Template Literals**:
//    - Rewrite the pet profile using template literals.
//    - Include multi-line text and embedded expressions.

// 3. **Console Output**:
//    - Print both versions of the pet profile to the console.

// 4. **Bonus Challenge**:
//    - Add more variables (like `petHobbies`, `petFavoriteFood`) and include them in the pet profile.

// #### Expected Output

// When you run this code you should see three different pet profiles printed to the console: one using standard string literals, one using template literals, and the bonus one with additional details.

// This challenge helps you grasp the practical use of literals in JavaScript, contrasting the simplicity and enhanced readability offered by template literals against standard string concatenation methods. 

// Starter Code
let petName = 'Buddy';
let petAge = 5;
let petType = 'Dog';
let favoriteToy = 'Rubber Bone';

// Your code to generate pet profile using string literals goes here.
let petProfile1 = 'Pet Name:' + petName + ' ' + 'Pet Age:' + petAge + ' ' + 'Type of pet:' + petType + ' ' + 'Favorite toy:' + favoriteToy;
console.log(petProfile1);

// Your code to generate pet profile using template literals goes here.
let petProfile2 = `Pet Name:${petName} Pet Age:${petAge} Type of pet:${petType} Favorite Toy:${favoriteToy}`;
console.log(petProfile2);

// Bonus Challenge
let petHobbies = 'Swimming';
let petFavoriteFood = 'Salmon';
let petProfile3 = `Pet Name:${petName} Pet Age:${petAge} Type of pet:${petType} Favorite Toy:${favoriteToy} Pet Hobbies:${petHobbies} Favorite food:${petFavoriteFood}`;
console.log(petProfile3);