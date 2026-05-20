/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];


// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// Tutoral: I want only those students who have 
// more than 5 years of experience

console.log("Tested---")

let strongSkills = students.filter(student => {
   let hasSkills = student.skills.filter(skill => 
        skill.yrsExperience>=5 );
        return hasSkills.length>0; 
    });
console.log(strongSkills);

// Let's try this complex question into smaller part. 

const yearsOfExperience = skill => skill.yrsExperience>=5 ; 
let hasSkills1 = student => student.skills.filter(yearsOfExperience);
let strongSkills1 = students.filter(hasSkills1);

console.log(strongSkills1);

// Note: always think about how arrow function is working here. 

// Let's try Tutorail 3: find only name of the 


