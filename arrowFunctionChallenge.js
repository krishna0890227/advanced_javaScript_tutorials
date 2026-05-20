let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];



const subject = "english";
let averageMarks =0;
const averagePoints = (arr, subject) => {
    let count = 0;
    let totalMarks = 0;
    for (let i =0; i<arr.length; i++) {
        if(arr[i].results[subject] !=undefined) {
           totalMarks = totalMarks+ arr[i].results[subject];
        count = count + 1; 
        }
    }
    return totalMarks/count;
}
    
averageMarks = averagePoints(students, subject);
console.log(averageMarks);


// 1 . Declare a variable named averagePoints using the keyword const
// 2. ssign it an arrow function, which should take two parameters named: arr and subject
// 3. The function should have a return statement
// 4. Declare a variable named: averageMarks using the keyword let
// 5. Assign it the return value from calling the function averagePoints, and passing it the students array and one of the following strings: 'maths', 'english', 'cad', 'science', 'art'
// 6. log out the variable averageMarks to see its value
// 7. The function should return the correct value no matter which subject is used.