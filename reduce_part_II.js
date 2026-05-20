const teamMember = [
    { 
        name: "harry",
        profession: "Developer",
        experienceYear: 2,
    },
    { 
        name: "Shyam",
        profession: "Designer",
        experienceYear: 4,
    },
     { 
        name: "sita",
        profession: "Developer",
        experienceYear: 1,
    },
    { 
        name: "SK",
        profession: "Designer",
        experienceYear: 3,
    }
]


// totaling a specific object property. 
let totalExp = teamMember.reduce((acc, curr) => acc + curr.experienceYear, 0);
console.log(totalExp);

//Grouping by property, and total it 

let outputExp = teamMember.reduce((acc, curr) => {

    let key =curr.profession;

    if(!acc[key]) {
        acc[key] = curr.experienceYear;
    } else {
        acc[key] +=curr.experienceYear;
    }

    return acc;
}, {})

console.log(outputExp);