// Grade Calculator

const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// Function to get student scores and calculate their grades
function getStudentScores() {
    rl.question("Enter the number of students: ", (numStudents) => {
        numStudents = parseInt(numStudents); // Convert input to number

        let count = 0;

        function askForScore() {
            if (count < numStudents) {
                rl.question(`Enter the score for student ${count + 1}: `, (score) => {
                    score = parseFloat(score); // Convert score to a number
                    const grade = calculateGrade(score);
                    console.log(`Student ${count + 1}: Score = ${score}, Grade = ${grade}`);
                    count++;
                    askForScore(); // keep asking for the next score
                    
                });
            }
            
             else {
                console.log("All the grades have been successfully calculated.");
             }
            
        }

        // Start asking for scores
        askForScore();
        
    });
}
// Function to calculate letter grade based on the score
function calculateGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    if (score >= 50) return 'E';
    return 'F';
}
// Call the function to start the process
getStudentScores();
