const Manager = require('../lib/Manager')

test ("show phone number", () => {
    const phoneNumber = "123";
    const manager = new Manager ("Sam", 1, "sam@gmail.com", phoneNumber);

    expect(manager.officeNumber).toBe(phoneNumber);
})


test("get office number using getOfficeNumber()", () => {
    const phoneNumber = "123";
    const manager = new Manager ("Sam", 2, "sam@gmail.com", phoneNumber);

    expect(manager.getOfficeNumber()).toBe(phoneNumber);
})

test("get role using getRole()", () => {
    const role = "Manager";
    const manager = new Manager ("Sam", 2, "sam@gmail.com", "123");

    expect(manager.getRole()).toBe(role);
})