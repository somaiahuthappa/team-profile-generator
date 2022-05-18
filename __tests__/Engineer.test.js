const Engineer = require('../lib/Engineer');

test("Display github username", () => {
    const githubName = "SamDavis";
    const engineer = new Engineer("Sam", 1, "sam@gmail.com", githubName);

    expect(engineer.github).toBe(githubName);
})

test("get github profile", () => {
    const githubName = "SamDavis";
    const engineer = new Engineer("Sam", 1, "sam@gmail.com", githubName);

    expect(engineer.getGithub()).toBe(githubName);
})

test("return engineer role using getRole()", () => {
    const role = "Engineer";
    const engineer = new Engineer ("Sam", 1, "sam@gmail.com", "SamDavis");

    expect(engineer.getRole()).toBe(role);
})