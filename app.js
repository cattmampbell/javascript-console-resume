let myFirstName = "Matthew";
let myMiddleName = "Allen";
let myLastName = "Campbell";
let myFullName = myFirstName + " " + myLastName; // String concatenation of 'myFirstName' and 'myLastName'.

// Variables ('myCareerA' and 'myCareerB') that make up career. 
let myCareerA = "(Aspiring) Full Stack Engineer";
let myCareerB = "Independent Contractor at Amazon";

let myDescription = "I love pizza.";

// An object ('meMatthew') of my basic info.
let meMatthew = {
    name: myFullName,
    career: myCareerA + " / " + myCareerB,
    description: myDescription
};

// An array of my interests.
let myInterests = ["Music", "Space & Science", "Woodworking", "Arduino & Raspberry Pi", "My lovely wife, Olivia and our cat, Toast"];

// An array of my previous experience.
let myExperience = [
    "",
    "",
    ""
];

console.log("Name: " + meMatthew.name); // Should print: "Name: Matthew Campbell".
console.log("Career: " + meMatthew.career); // Should print: "Career: Full Stack Engineer / Independent Contractor at Amazon".
console.log("Description: " + meMatthew.description); // Should print: "Description: I love pizza."

console.log("My Interests: "); 
for(let i = 0; i < myInterests.length; i++) {
    console.log("*   " + myInterests[i]); // Should print each item in 'myInterests'.
};

console.log("My Previous Experience: ");
for(let i = 0; i < myExperience.length; i++) {
    console.log("*  " + myExperience[i]); // Should print each item in 'myExperience'.
};

