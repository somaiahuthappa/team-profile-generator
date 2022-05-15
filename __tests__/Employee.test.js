const Employee = require('../lib/Employee')

test("creates Employee object", () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe("object");
})

test("defines employee name", () => {
    const name = "Sam";
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
})

test("defines employee id", () => {
    const id = 1;
    const employee = new Employee ("Sam", id);

    expect(employee.id).toBe(id);
})

test("defines employee email", () => {
    const email = "sam@gmail.com";
    const employee = new Employee("Sam", 2, email);

    expect(employee.email).toBe(email);
})

test("gets employee name through getName()", () => {
    const name = "Sam";
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
})

test("gets id using getId()", () => {
    const id = 1;
    const employee = new Employee ("Sam", id);

    expect(employee.getId()).toBe(id);
})

test("get employee email using getEmail()", () => {
    const email = "sam@gmail.com";
    const employee = new Employee("Sam", 1, email);

    expect(employee.getEmail()).toBe(email);
})

test("get employee role using getRole()", () => {
    const role = "Employee";
    const employee = new Employee ("Sam", 1, "sam@gmail.com");

    expect(employee.getRole()).toBe(role);
})