const Tester = require("../lib/Tester");

test("Can set speciality via constructor argument", () => {
  const testValue = 100;
  const e = new Tester("Foo", 1, "test@test.com", testValue);
  expect(e.speciality).toBe(testValue);
});

test('getRole() should return "Tester"', () => {
  const testValue = "Tester";
  const e = new Tester("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get speciality via getSpeciality()", () => {
  const testValue = 100;
  const e = new Tester("Foo", 1, "test@test.com", testValue);
  expect(e.getSpeciality()).toBe(testValue);
});
