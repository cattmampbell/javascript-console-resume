# Objectives

* You will create a resume that exists entirely within the developer console.

* Create a project folder linked to Github, and inside that folder an index.html file and a Javascript file. Link the JavaScript file to the index.html file.
* Your "resume" will simply be a series of `console.log` statements to print the resume data to the console.
* When you open index.html in the browser, it will be a blank page. That's okay. Your resume will be in the console. (`command + option + I`, or `F12`)
* Your resume should display the following information:
  * Your name.
  * Your career/field.
  * A short description of yourself.
  * A list of your interests.
  * A list of your past positions that includes company/place name, title, short description of what you did.
  * A list of your skills.
* You can make up information if you'd like.
* In your skill list, skills that are "cool" should begin with `BAM:`

## Additional Requirements

* Your name should print in all capital letters, but you must not type it as all capitalized in your code (i.e. you will need to use JavaScript to capitalize it).
* You must have a function called `displayPosition` that takes parameters for company name, job title, and description. The function should `console.log` those three items in a format similar to the example below. You will call `displayPosition` several times with different data.
* You must have a function called `displaySkill` that takes parameters for skill name and a boolean value for whether the skill is cool (true/false). Inside the function, you should print `BAM:` in front of the skill name only if the skill is cool. If you don't have any cool skills, make some up.

## Example Output

* Your resume output should look similar to this:

<hr>

`Name: JOHN DOE` <br />
`Career: Full Stack Engineer / Instructor` <br />
`Description: I like turtles` <br />
<br />
`My Interests:` <br />
`* Fall TV (The best)` <br />
`* Locomotives` <br />
`* Observing awkward situations` <br />
`* Film soundtracks` <br />
<br />
`My Previous Experience:` <br />
`* Math, Chemistry, Physics, Biology, and English tutor at Some School - Tutored students in those areas.` <br />
`* Undergraduate Teaching Assistant at University of Georgia - Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes.` <br />
`* Lead Programmer for iBeacon Experiment at Georgia Museum of Art - Created native iOS virtual tour guide that used iBeacon technology to triangulate position within the museum and give information about a piece.` <br />
<br />
`My Skills:` <br />
`* French` <br />
`* BAM: Trombone` <br />
`* Java` <br />
`* C / C++` <br />
`* BAM: Objective-C / Swift` <br />
`* BAM: Opera Singing` <br />
`* Python` <br />
`* JavaScript` <br />
`* BAM: TypeScript` <br />

<hr>

## Submission

When you are finished, make sure you have committed and pushed your changes to GitHub.