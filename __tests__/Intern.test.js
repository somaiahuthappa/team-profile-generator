const Intern = require('../lib/Intern');

test("gets school name", () => {
    const schoolName = "UofT";
    const intern = new Intern ("Sam", 2, "sam@gmail.com", schoolName);

    expect(intern.school).toBe(schoolName);
})

test("get school using getSchool()", () => {
    const schoolName = "UofT";
    const intern = new Intern ("Sam", 2, "sam@gmail.com", schoolName);

    expect(intern.getSchool()).toBe(schoolName);
})

test("retur intern role using getRole()", () => {
    const role = "Intern";
    const intern = new Intern ("Sam", 1, "sam@gmail.com", "UofT");

    expect(intern.getRole()).toBe(role);
})