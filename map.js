// Let's Learn JavaScript Mapping 
// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

// Task 1: use map method and display Jason's Skills
// Memory: map works as like a for loop. 
// map needs return statement. 

console.log("Test page! ")
let nameSkill = students.map(student => {
    if (student.name === "Jason") 
        {  return [
        student.name, 
        student.skill
    ] }
} )

console.log(nameSkill);

// The result gives two udefind. To remove this, we need to use find method. 

let nameSkill2= students.find(student => {
    if (student.name === "Jason") {
        return [
            student.name, 
            student.skill
        ]
    }
})
console.log(nameSkill2)