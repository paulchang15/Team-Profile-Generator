const ProfileQuestions = require('./lib/GenerateProfiles');
const PageTemplate = require('./src/page-template');
const GenerateProfiles = require('./lib/GenerateProfiles')
new ProfileQuestions().createEmployees()
.then((employees) => {
    PageTemplate.generatePage(employees);
})
.then((html) => {
    ProfileQuestions.writeToHTML(html);
});