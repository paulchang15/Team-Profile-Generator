const ProfileQuestions = require('./lib/GenerateProfiles');
const PageTemplate = require('./src/page-template');
const
new ProfileQuestions().createEmployees()
.then((employees) => {
    PageTemplate.generatePage(employees);
})
.then((html) => {
    ProfileQuestions.writeToFile(html);
});