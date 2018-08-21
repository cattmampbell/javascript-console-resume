let firstName = "Matthew";
let middleName = "Allen";
let lastName = "Campbell";
let fullName = firstName + " " + middleName + " " + lastName;
let fullNameCaps = fullName.toUpperCase(); // Should modify string to ALL CAPS.

// Calls displayDescription() Function
displayDescription(fullNameCaps, "(Aspiring) Full Stack Developer / Photo Studio Associate", "I like pizza");

// Function that accepts x3 arguments (Name, Career, Description), formats accordingly and prints them to the Console. 
function displayDescription(myName, myCareer, myDescription) {
    console.log("Name: " + myName);
    console.log("Career: " + myCareer);
    console.log("Description: " + myDescription + ".");
}

// My Interests:
console.log("My Interests: ");
// Calls displayInterests() Function
displayInterests("Music"); // 1) Should print - Music
displayInterests("Space & Science"); // 2) Should print - Space & Science
displayInterests("Making Things & Woodworking"); // 3) Should print - Making Things & Woodworking
displayInterests("Arduino & Raspberry Pi"); // 4) Should print - Arduino & Raspberry Pi
displayInterests("Spending time with my lovely wife, Olivia and our cat, Toast"); // 5) Should print - Spending time with my lovely wife, Olivia and our cat, Toast

// Function that accepts x1 argument (Interest), formats accordingly and prints to the Console.
function displayInterests(myInterest) {
    console.log("*  " + myInterest); 
}

// My Previous Experiences:
console.log("My Previous Experiences: ");
// Calls the displayPosition() Function
// 969 Creative
displayPosition("969 Creative", "Photo Studio Associate", "Provided quality images for Amazon.com by following standards and procedures of the Style Guide");
// Amazon
displayPosition("Amazon", "Fulfillment Center Associate", "Ensured all incoming product / inventory was stored correctly in the appropriate locations according to Standard Work");
// Radco Residential (Radius Mountain Creek)
displayPosition("Radco Residential (Radius Mountain Creek)", "Maintenance Technician", "Guaranteed excellent living conditions for all tenants by performing necessary repairs");

// Function that accepts x3 arguments (Company Name, Job Title and Job Description), formats accordingly and prints them to the Console. 
function displayPosition(companyName, jobTitle, jobDescription) {
    console.log("*  " + companyName + ", " + jobTitle + " - " + jobDescription + ". ");
};

// My Skills:
console.log("My Skills: ");
// Calls dispaySkill() Function
displaySkill("Playing Drums", true); // 1) Should print - BAM: Playing Drums
displaySkill("HTML5", false); // 2) Should print - HTML5
displaySkill("CSS3", false); // 3) Should print - CSS3
displaySkill("Bootstrap 4.0", true); // 4) Should print - BAM: Bootstrap 4.0
displaySkill("JavaScript", true); // 5) Should print - BAM: JavaScript
displaySkill("Soldering", true); // 6) Should print - BAM: Soldering
displaySkill("Arduino Programming", true); // 7) Should print - BAM: Arduino Programming
displaySkill("Markdown", false); // 8) Should print - Markdown
displaySkill("Git / GitHub", false); // 9) Should print - Git / GitHub
displaySkill("Audio Engineering", true); // 10) Should print - BAM: Audio Engineering

// Function that accepts x2 arguments (Skill Name / Boolean Value), formats accordingly and prints them to the Console. 
function displaySkill(mySkill, bamBam) {
    if(bamBam == true) { // If (bamBam) true ...BAM: and 'mySkill'.
        console.log("*  BAM: " + mySkill);
    } else if(bamBam == false) {
        console.log("*  " + mySkill); // Else If (bamBam) false ...just 'mySkill'.
    };
}