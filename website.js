// SA0001: I BRENDAN DILEO, 000879513 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else. //

// This function is used to alert a message when the user enters the webpage.
// First I have declared a function named 'promptUser', and inside the functions body the 'setTimeout'
// function is called upon to create a delay. This is so the alerted message will show after the user has 
// opened the webpage, instead of before. It then alerts the user a message after the 100 milliseconds.
// I chose this as a starting point for getting comfortable with javascript.
function alertUserWelcome() {
    setTimeout(function() {
        alert("Welcome! This is Brendan's first webiste using JavaScript!");
    }, 100);
}

// This function is used to alert a message shortly after the user has browsed the page.
// First I have declared a function named 'promptUser2', and inside the functions body the 'setTimeout'
// function is called upon to create a delay. The purpose of this is so the user has the oppurtunity to browse
// a little bit before the alert message is shown. It alerts the user a message after the 10000 milliseconds.
function alertUserOptions() {
    setTimeout(function() {
        alert("Checkout some of the options on the page!");
    }, 10000);
}

// **** Helper Functions I have made to try and cleanup code. ****

// This function determines if the user has entered nothing into the textarea. It first removes any extra spaces
// from the value, so that if the user enters abunch of spaces, the function still works. It then uses an if statement
// to determine what the value holds, and returns a String that they didnt enter anything.
function emptyInput(a) {
    a = a.trim();
    if (a === "") {
        return "You didnt enter anything!"
    }
}

// This function converts a value to a number, and rounds a given value to two decimal points.
// It is specifically used for rounding the number of days, but could be useful later in my code aswell.
function roundValue(a) {
    a = Number(a);
    return Math.round(a * 100) / 100;
}

// This function converts the values to numbers, and then calculates the number of years based on number of days and years.
// Uses the Math.floor method to round down so years do not contain a decimal place.
// Specifically used in the function for determining how many years given an entry so I do not have to call upon the math method.
function yearCalculation(a, b) {
    a = Number(a);
    b = Number(b);
    return Math.floor(a / b);
}

// This function converts the values to numbers, and then calculates the number of months based on the number of days entered, years,
// and the average number of days in a month. It uses the Math.floor method to round down, as I do not want months to have a decimal place.
// This function is used to find the number of months from the days given.
function monthCalculation(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    return Math.floor((a % b) / c);
}

// This function will convert the values to numbers, and calculates the number of days that remain after using modulus division
// to take away the number of years, and months from the calculation.
// This function will be used to find the remaining number of days after the claculations for years, and months have taken place.
function daysCalculation(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    return ((a % b) % c);
}

// This function checks if a value entered is a number. I have created this in order to avoid confusion, and eliminate
// the consisten use of the NOT operator.
function isANumber(a) {
    return (!isNaN(a));
}

// This function converts values to numbers, and then adds them together.
// This will be specifically used for the operation function.
function addValues(a, b) {
    a = Number(a);
    b = Number(b);
    return a + b;
}

// This function will convert the values entered into numbers, and then subtract the two numbers.
// Will be specifically used for the operations function, but in case I need to do other subtaction, I felt it was useful.
function subtractValues(a, b) {
    a = Number(a);
    b = Number(b);
    return a - b;
}

// This function will convert two values to numbers, and multiply them by eachother.
// This function will be used in the operators function, but I felt having it as a helper for other use cases would be helpful.
function multiplyValues(a, b) {
    a = Number(a);
    b = Number(b);
    return a * b;
}

// This function will convert two values into numbers, and then divide them by eachother but rounding them too using Math.round.
// Again this function is specifically used for the operations function, however I feel it may be useful in other functions aswell.
function divideValues(a, b) {
    a = Number(a);
    b = Number(b);
    return Math.round(a / b);
}

// This function converts two values into numbers, and the uses the modulo operator to peform remainder division.
// This was is also being used in the operations function, but could be useful elsewhere.
function moduloValues(a, b) {
    a = Number(a);
    b = Number(b);
    return a % b;
}

// This function is used to take a value/number from the user, and if it is between 13, and 17 inclusive,
// it will tell the user it is in the range. Otherwise, if the number is outside of the range it will tell
// the user the number is out of range. If the number is not a number and instead a word or letter,
// it will tell the user that the value is not numeric. I used if-else and else-if statements to determine
// what the user entered, and I also used them to help the user get the number in that range if they wanted to.

// I first declare a function 'group_1_choice_1'
function group_1_choice_1() {
    
    // The variable 'q1UserInput' is assigned to the value entered in the 'q1Input' id, by finding the 
    // value entered into the input on the html page using 'getElementById'.
    let q1UserInput = document.getElementById("q1Input").value;

    // Debug. I wanted to make sure that the value was being assigned correctly and I was doing it right.
    console.log("The user entered: " + q1UserInput);

    // First an if statement checks if the user has entered nothing using the emptyInput method, if it evaluates 
    // to true, the body of the if statement is executed prompting them with a validation message.
    if (emptyInput(q1UserInput)) {
        document.getElementById("q1Output").innerText = emptyInput(q1UserInput);
        return;
    }

    // The if statement uses the 'isNaN' fucntion to determine wether the value saved into 'q1UserInput'
    // is Not a Number. If this statement evaluates to true, the code inside the body of the if statement
    // is excuted.
    if (isNaN(q1UserInput)) {
        document.getElementById("q1Output").innerText = "Whoops! You didnt enter a number!";
    // If the statement evaluates to false, this else block will be executed.
    } else {
        // The nested if statement checks if the value is equal to 0, or between 13, and 17.
        // if it is, the code inside the if statements body will be executed.
        if (q1UserInput == 0 || (q1UserInput >= 13 && q1UserInput <= 17)) {
            document.getElementById("q1Output").innerText = "Nice! Its in the correct range!";
        // If the if statement evaluates to false, the code inside this nested else-if statement will
        // be executed. Each condition validates the value, and prompts the user if the value entered is too high
        // or too low, to give an idea of how to get their number in the right range.
        } else if (q1UserInput >= 1 && q1UserInput < 13) {
            document.getElementById("q1Output").innerText = "Sorry! Not in the correct range! Try a higher number!";
        } else if (q1UserInput > 17 && q1UserInput < 100) {
            document.getElementById("q1Output").innerText = "Sorry! Not in the correct range! Try a lower number!";
        } else {
            document.getElementById("q1Output").innerText = "Sorry! Not in the correct range! Too high of a number!";
        }
    }
}

// This function is used to convert a user entered integer, into the years, months, and days equivalent. 
// I declared the variables for years, months, and days, as the question gave those as a hint before hand.
// This then helped me in actually doing the calculations.

// I start by declaring the funtcion 'group_1_choice_2'.
function group_1_choice_2() {
    // The variable 'q1UserInput2' is assigned to the value entered in the 'q1Input2' id, by finding the
    // value entered into the input on the html page using 'getElementById'.
    let q1UserInput2 = document.getElementById("q1Input2").value;
    
    // First an if statement checks wether the user has entered nothing/only spaces using the emptyInput method, 
    // if it evaluates to true, the body of the if statement is executed prompting them with a validation message.
    // If evaluated to false, the body is not executed.
    if (emptyInput(q1UserInput2)) {
        document.getElementById("q1Output2").innerText = emptyInput(q1UserInput2);
        return;
    }

    // Variables are declared outside of the validation and calculations to avoid scope issues. The variables
    // declared for for average number of days in a year, number of months in a year, and number of days in a month.
    let years = 365.25;
    let months = 12;
    let days = 30.44;

    // The if-else statements act as the validation for the input. The first if statement checks if the value
    // entered is Not a Number using 'isNaN', or if the value entered is less than 0. If this condition evaluates 
    // to true, the body of the if statement is executed.
    if (isNaN(q1UserInput2) || (q1UserInput2 < 0)) {
        document.getElementById("q1Output2").innerText = "Your input was not a number, or it was a negative number!";
    // The else-if statement checks if the value entered is equal to 0, if the condition evaluates to true, the body
    // of the statement is executed.
    } else if (q1UserInput2 == 0) {
        document.getElementById("q1Output2").innerText = "Your input was a 0! 0 years, 0 months, 0 days!";
    // If both the if, and else-if conditions evaluate to false, the else statements body is executed.
    } else {
        // This is where the calculation will take place to determine the number of years, months, and days 
        // determined by the user entered value. The calculations use the corresponding method explained above,
        // to peform the calculations for the values.
        let yearsCalculated = yearCalculation(q1UserInput2, years);
        let monthsCalculated = monthCalculation(q1UserInput2, years, days);
        let daysRemainingCalculated = daysCalculation(q1UserInput2, years, days);
        let daysRemainingRounded = roundValue(daysRemainingCalculated);

        // Debug. Initially values were not showing for me as they should have. Using this I ended up finding the problem was
        // that I forgot the brackets.
        console.log("Calculations: " + yearsCalculated, monthsCalculated, daysRemainingCalculated, daysRemainingRounded);
        
        // Depending on the calculations, and the values saved into the variables for the calculations.
        // The 'q1Output2' id is assigned to the concatenated string holding the calculated values.
        document.getElementById("q1Output2").innerText = "Assuming on average there are " + years + " days in a year, " + months + " months in a year, and " + days + " days in a month."
        + " Given the number provided, there will be " + yearsCalculated + " years, " + monthsCalculated + " months, and " + daysRemainingRounded + " days!";
    }
}

// This function is used to check if a value entered is a vowel, is sometimes a vowel, or is not a vowel. This function
// is without the use of regular expressions, or reduce/replace/replaceAll/include/etc methods. I used loops because
// the question stated that you could only use loops, giving me the idea this question needed to be anwsered with a while,
// or for loop. I had a feeling right from the start I needed to loop through an array. My intention was to create flags
// like we do in Java to tell the prorgram if a vowel was found, which in return would exit a loop.

// I start by declaring a function 'group_2_choice_1'.
function group_2_choice_1() {

    // The variable 'q2UserInput' is assigned to the value entered in the 'q2Input' id, by finding the
    // value entered into the input on the html page using 'getElementById'.
    let q2UserInput = document.getElementById("q2Input").value;
    
    // A while loop checks wether the user has entered nothing/only spaces using the emptyInput method, 
    // if it evaluates to true, the body of the while loop is executed prompting them with a validation message.
    // If evaluates to false, the body is not executed, and skipped executing the next code.
    while (emptyInput(q2UserInput)) {
        document.getElementById("q2Output").innerText = emptyInput(q2UserInput);
        return;
    }
    
    // To avoid problems with case sensitity, the value entered is forced to lower case using the 'toLowerCase()' function.
    q2UserInput = q2UserInput.toLowerCase();

    // Debug. I wanted to make sure that after taking the value, the toLowerCase() was actually putting it to lowercase.
    // At first it was not, I forgot to use the brackets after the function name.
    console.log("Put to lowercase? " + q2UserInput);

    // I create an array of vowels named 'vowels' is declared specifiying what will be considered as valid vowels.
    let vowels = ["a", "e", "i", "o", "u"];
    // I create an array of vowels sometimes defined as vowels is declared as 'sometimesVowel' specifiying that 'y' is sometimes a vowel.
    let sometimesVowel = ["y"];
    // I declare a boolean flag as 'vowelFlag', and initialized to false as default. This will act as a flag depedning on
    // if the user entry contains a vowel, or not.
    let vowelFlag = false;
    // I declare a boolean flag as 'yFlag', and initialized to false as default. This will act as another flag depending on
    // if the user entry contains a 'y', or not.
    let yFlag = false;
    // I create a variable 'count' which is initialized and assigned to 0 for the purpose of controlling the while loop. It will hold as
    // a control variable to check each value/character in the value entered by the user assigned to 'q2userInput'.
    let count = 0;

    // I initialize a while loop, that checks the condition 'isANumber' defined above, which checks if the value entered is a number.
    // If the condition evaluates to true, meaning the value entered is a number, the body of the while loop is executed, and the function
    // is exited returning the string to the 'q2Output' id using 'return'. If the condition evaluates to false, meaning the value entered 
    // is not a number, the body of this loop is not executed, and the code following this loop is executed.
    while (isANumber(q2UserInput)) {
        document.getElementById("q2Output").innerText = "A number cannot be a vowel!";
        return;
    }
    // I initialize another while loop, that checks the condition 'count < q2UserInput.length && !vowelFlag && !yFlag',
    // the 'count' is used as a loop control variable, which will iterate through the characters of the length of 'q2UserInput2'
    // as long as count is less than the length of the value entered, and 'vowelFlag' and 'yFlag' are evaluated to true. This means
    // that the loop will continue to iterate through until no vowels have been encountered.
    while (count < q2UserInput.length && (!vowelFlag && !yFlag)){
        // Inside each iteration, a variable 'letter' is assigned to a postision of the character in the length of 'q2UserInput'
        // with a postision of 'count'.
        let letter = q2UserInput[count];

        // Debug. Here I inteded to make sure that the letter was actually being assigned to a single letter from the input.
        console.log("Correctly assigned: " + letter);

        // I initialize a nested while loop, that declares a control variable set to 0. The condition 
        // 'i < vowels.length && !(vowelFlag = letter === vowels[i])' is checked to determine if 'i' is less than the length of the 'vowels' array,
        // and checks the if the current value of 'letter' is the same as one of the vowels in the 'vowels' array, which is then assigned to the
        // 'vowelFlag' boolean value as a comparison. The comparison is negated using the NOT operator, which will end the loop if a vowel has been found.
        // The loop is then incremented 'i++' to continue to check for vowels if none have been found yet.
        for (let i = 0; i < vowels.length && !(vowelFlag = letter === vowels[i]); i++);
        // This statement assigns the comparison result of current value of 'letter' to 'yFlag' if a 'y' is found.
        // If a 'y' is found, 'yFlag' will be assigned to true, if a 'y' is not found, 'yFlag' will remain flase.
        yFlag = letter === "y";

        // Debug. Wanted to check if that line was working and if y was found, it was actually being reassigned to true.
        console.log("y was found? " + yFlag);

        // 'count', which is the while loop control variable for checking each letter is continously incremented by 1
        // which will continue to increment and loop until 'count' is no longer less than the length of 'q2UserInput' for the 
        // purpose of checking each letter in the value.
        count++;
    }

    // This expression uses a ternary operator instead of an if-else statement. The The 'q2Output' id is assigned to the ternary operator
    // which initially checks if the 'vowelFlag' variable holds true, if it does 'q2Output' is assigned to "A vowel has been found!", if 'vowelFlag' holds
    // false, the following condition is evaluated. If 'yFlag' holds true, 'q2Output' is assigned to " y is sometimes a vowel!", if 'yFlag' holds
    // false, 'q2Output' is assigned to "Not a vowel", as both 'vowelFlag' and 'yFlag' were false, meaning neither a vowel or sometimes vowel
    // had been found.
    document.getElementById("q2Output").innerText = vowelFlag ? "A vowel has been found!" : (yFlag ? "y is sometimes a vowel!" : "Not a vowel!")
}

// This function is used to determine the sum of a number by splitting the number up. If the sum is greater than 9, 
// then it will continue to split the number up until the sum is less than 9. Again I cannot use any if statements as the question
// says to use loops, so like the last function I need to use a while loop for this. My goal is to loop until the sum is less than 9, but keeping
// in mind the question does not specify the use of only posisitve numbers, so negative numbers will be included too.

// I start by declaring a function 'group_2_choice_2'.
function group_2_choice_2() {

    // The variable 'q2UserInput2' is assigned to the value entered in the 'q2Input2' id, by finding the
    // value entered into the input on the html page using 'getElementById'.
    let q2UserInput2 = document.getElementById("q2Input2").value;

    // First a while loop checks the condition that user has entered nothing/only spaces using the emptyInput method, 
    // if it evaluates to true, the body of the loop is executed prompting them with a validation message.
    // If evaluates to false, the body is not executed, and is skipped, executing the next code.
    while (emptyInput(q2UserInput2)) {
        document.getElementById("q2Output2").innerText = emptyInput(q2UserInput2);
        return;
    }

    // I initialize a while loop, which checks the condition '(iANumber(q2UserInput2) && (q2UserInput2 % 1 === 0 ))', which means the condition
    // will evaluate to true if the value entered is a number, and if the number is a integer. The condition will evaluate to false if the value
    // is not a number, or if it is not an integer.
    while (isANumber(q2UserInput2) && (q2UserInput2 % 1 == 0 )) {
        
        // Debug. I wanted to check that the while loop was working how I inteded it to.
        console.log("Inside while loop: " + q2UserInput2)

        // A variable 'absNum' is declared an assigned to the absolute value of the user entry by using the 'Math.abs()' function.
        let absNum = Math.abs(q2UserInput2);
        // A variable 'sumOfNums' is declared and assigned to 0 as default.
        let sumOfNums = 0;

        // I initialize a inner while loop, that checks the condition 'absNum !== 0', if the condition evaluates to true, meaning the absolute
        // value of the user input is not 0, and if the condition evaluates to false, this means the absolute value is 0, which means the body of
        // the while loop will be skipped, and not executed.
        while (absNum !== 0) {
            // A variable 'lastNumber' is initialized, and assigned to the remainder of 'absNum' / 10. The remainder divison '%' is used to
            // locate the last number of the value saved into the 'absNum' variable.
            let lastNumber = absNum % 10;

            // Debug. Wanted to make sure that the modulo operator was working and actually getting that last digit.
            console.log("Last number from the absolute value: " + lastNumber);

            // 'sumOfNums' is then assigned to the value of adding the value saved into number, which would be the last digit
            // for the purpose of adding up all of the digits found in the value.
            sumOfNums = sumOfNums + lastNumber;
            // 'absNum' is then assigned to the value of 'absNum / 10' which removes the next last number, and uses the 'Math.floor()' function
            // to remove any decimal places rounding down. The purpose is to restore the value into 'absNum', and continue on with the loop to 
            // keep seperating the last number, and adding it to the sum.
            absNum = Math.floor(absNum / 10);

            // Debug. Initially I used the modulo operator here, which is why i needed to troubleshoot again.
            // I ended up finding that I should be dividing, and not using the modulo operator here.
            console.log("Last number again: " + absNum)
        }

        // I initialize another inner-outer while loop, that checks the condition 'sumOfNums > 9'. If this condition evaluates to true, meaning the
        // sum is greater than 9, the sum needs to be broken/divided down more so it is only one digit.
        while (sumOfNums > 9) {
            // A variable 'sumOfNums2' is initialized and set to 0 which will be assigned to the sum of the number that has a sum of 9 or more.
            let sumOfNums2 = 0;
            // I intiialzie an inner while loop, that checks the condition 'sumOfNums !== 0', meaning the loop continues until this condition 
            // evaluates to false, in other words the sum of the numbers is 0.
            while (sumOfNums != 0) {
                // The variable 'sumOfNums2' is assigned to the current value of 'sumOfNums2' + the remainder of when 'sumOfNums' is divided by 10.
                // This will take the last digit of 'sumOfNums' and add it to the value of 'sumOfNums2' with the intention of getting a single digit
                // sum.
                sumOfNums2 = sumOfNums2 + sumOfNums % 10;
                // 'sumOfNums' is then reassigned to the value when dividing 'sumOfNums' by 10, and rounds down using the 'Math.floor()' function.
                // The purpose is to re-remove the last digit and being assigned back to 'sumOfNums'
                sumOfNums = Math.floor(sumOfNums / 10);
            }
            // The value of 'sumOfNums2' is then assigned to 'sumOfNums' with the purpose of creating the single digit sum after the loop.
            sumOfNums = sumOfNums2;

            // Debug. I wanted to make sure that the sum was being correctly assigned and calculated if it was greater than 9.
            console.log("Correct sum? " + sumOfNums);
        }

        // The 'q2Output2' id is assigned to the value of the 'sumOfNums' variable which will hold a single digit sum value.
        // The following 'return' statement exits the function so that the following data validation line is not executed.
        document.getElementById("q2Output2").innerText = sumOfNums;
        return;
    }
    // The 'q2Output2' id is assigned to the string which validates the users entry. This line connects to the first while loop which makes sure
    // the user has entered a valid integer.
    document.getElementById("q2Output2").innerText = "Bad Input! Must be a number, specifically a integer number! Please try again!";
}


// This function for a valid mathematical operation. Right away Switch cases popped into my mind. Whenever I hear the user chooses an operation,
// or chooses something atleast, I ussually go to switch cases. I could have used if, if-else statements, but I felt a switch case would be a better
// fit. I plan to create an array that have all of the valid operators, and then loop through both the input and array to check which one they have chosen.
// I also will need to remove the spaces if the user includes them, as the question mentions that regardless of spacing the equation should be valid.

// I start by declaring a function 'group_3_choice_2'.
function group_3_choice_2() {

    // The variable 'q3UserInput' is assigned to the value entered in the 'q3Input' id, by finding the
    // value entered into the input on the html page using 'getElementById'.
    let q3UserInput = document.getElementById("q3Input").value;
    // An array of operators named 'validOprators' is declared specifiying what will be considered as valid operators for an equation.
    let validOperators = ['+', '-', '*', '/', '%']

    // First a if statement checks the condition that user has entered nothing/only spaces using the emptyInput method, 
    // if it evaluates to true, the body of the if statement is executed prompting them with a validation message.
    // If evaluates to false, the body is not executed, and is skipped, executing the next code.
    if (emptyInput(q3UserInput)) {
        document.getElementById("q3Output").innerText = emptyInput(q3UserInput);
        return;
    }

    // The value assigned to 'q3UserInput' is being re-assigned but without any spaces for easier manipulation. 
    // The removing of spaces is done by using the 'replace()' function, and a regular expression where '//' starts the
    // expressions pattern, 'g' means it will remove all of what is intended to remove in the value, and '""' means any 
    // spaces will be removed from the value. This ensures spacing does not effect the equation.
    q3UserInput = q3UserInput.replace(/ /g, "");

    // Debug. I wanted to make sure that the input was being reassigned using the replace and regular expression.
    // At first it was only removing one space, so that is why I added the 'g'.
    console.log("Implemented Regular Expression: " + q3UserInput);

    // A variable 'equation' is initialized representing the equation that the user has entered. Since you cannot determine each index
    // of the equation entered, the equation the user entered is broken up into an array using the 'split()' method, and uses a regular expression
    // where the '/ /' start and end the expression, and anything inside the '[]' are split into their own sections of the equations array depending
    // on which one of them is present in the equation. This allowed me to access each value by indexing.
    let equation = q3UserInput.split(/([+\-*\/%])/);

    // Debug. I wanted to make sure that the split was working as I wanted it to.
    console.log("Correctly split input: " + equation);

    // A variable 'numOfOperators' is initialized and assigned to 0 as default which will act as the counter variable for the number of operations
    // a user has entered into their equation for data validation.
    let numOfOperators = 0;
    
    // A for loop is initialized, where a control variable 'i' is set to 0, the condition is that 'i < q3UserInput.length', and for each iteration,
    // 'i' is incremented by 1.
    for (let i = 0; i < q3UserInput.length; i++) {
        // This nested if statement checks if an operator from the 'operators' array is present in a postision of the 'q3userInput' using the
        // 'includes()' function. If an operator is found, the variable 'numOfOperators' is incremented by 1.
        if (validOperators.includes(q3UserInput[i])) {
            numOfOperators++;

            // Debug. Needed to make sure the number of operators was actually being increased if more than one was present.
            console.log("Number of operators: " + numOfOperators);
        }
    }

    // A if statement is initiliazed and checks the conditions 'numOfOperators === 1 && equation.length === 3' which means the number of operators
    // is only one, and the length of the 'equation' array is 3, so that there are not more than one operators, and the equation does not exceed the
    // simplicity requested by the question requirements.
    if (numOfOperators === 1 && equation.length === 3) {
        // A variable anwser is initialzed but not assigned to a value as the expected value will come from which operation the user has given.
        let anwser;

        // This nested if statement checks the conditions '!isANumber(Number(equation[0])) && isANumber(Number(equation[2]))' by checking the first (0) 
        // and third (2) postisions of the 'equation' array to make sure they are numbers, and not a letter, or operation sign.
        // They are converted to numbers using the '(Number)' so if they are valid numbers, the equations take them as numbers.
        if (isANumber(Number(equation[0])) && isANumber(Number(equation[2]))) {

            // Debug. At first I had [1] and [2] so my while loop was not working. This is the reason for thus debug line.
            // Ended up finding out that I forgot arrays start at an index of 0!
            console.log("Inside while loop: " + equation[0], equation[2]);

            // A switch case is initialized, and takes the value at second postision (1) of the array, which is the operation sign. This will
            // determine which case is executed.
            switch(equation[1]) {
                // If the operation sign chosen is '+', the '+' case is executed and the calculations for addition is performed taking the 
                // first (0) and third (2) postisions of the 'equation' array 'equation[0] and equation[2]' and using the addValues method.
                case '+':
                    anwser = addValues(equation[0], equation[2]);
                    break;
                // If the operation sign chosen is '-', the '-' case is executed and the calculations for subtraction is performed taking the 
                // first (0) and third (2) postisions of the 'equation' array 'equation[0] and equation[2]' and using the subtractValues method.
                case '-':
                    anwser = subtractValues(equation[0], equation[2]);
                    break;
                // If the operation sign chosen is '*', the '*' case is executed and the calculations for multiplication is performed taking the 
                // first (0) and third (2) postisions of the 'equation' array 'equation[0] and equation[2]' using the multiplyValues method.
                case '*':
                    anwser = multiplyValues(equation[0], equation[2]);
                    break;
                // If the operation sign chosen is '/', the '/' case is executed and the calculations for divison is performed taking the 
                // first (0) and third (2) postisions of the 'equation' array 'equation[0] and equation[2]' using the divideValues method.
                case '/':
                    anwser = divideValues(equation[0], equation[2]);
                    break;
                // If the operation sign chosen is '%', the '%' case is executed and the calculations for modulus is performed taking the 
                // first (0) and third (2) postisions of the 'equation' array 'equation[0] and equation[2]' and using the moduloValues method.
                case '%':
                    anwser = moduloValues(equation[0], equation[2]);
                    break;
                // If an invalid operation is chosen, the 'default' case will be executed and he 'q3Output' id is assigned to the string
                // prompting the user the error, as no operation sign was found.
                default:
                    document.getElementById("q3Output").innerText = "Invalid Formula! You entered an invalid Operator! Please try again!";
                    break;
            }
            // After the result of the anwser has been assigned, 'q3Output' id is assigned to the value stored in anwser.
            document.getElementById("q3Output").innerText = anwser;
        // The else statement will be executed if the if statements conditions svaluate to false, meaning the values for the equation are not numbers
        // 'q3Output' id is assigned to the string prompting the user the error.
        } else {
            document.getElementById("q3Output").innerText = "Invalid Formula! Please try again!";
        }
    // This else statement will be executed if the formula does not meet the conditions in the if statement. This means the number of operations is less than,
    // or greater than 1, and the 'equation' array consists of more than 3 seperate values. 'q3Output' id is assigned to the string prompting the user the error.
    } else {
        document.getElementById("q3Output").innerText = "Invalid Formula! You entered a word or sentence, or something else went wrong! Please try again!";
    }
}