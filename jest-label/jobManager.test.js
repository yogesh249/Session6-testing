const { addJob, jobArray, resetState } = require("./jobManager");

beforeEach(() => {
  resetState();
});

test("addJob() adds a job and returns the new job object", () => {
  const job = addJob("Software Engineer", "Tech Corp", 100000, "San Francisco");

  expect(job).toEqual({
    title: "Software Engineer",
    company: "Tech Corp",
    salary: 100000,
    location: "San Francisco",
  });

  expect(jobArray).toHaveLength(1);
});

test("addJob() returns false if any parameter is missing", () => {
  expect(addJob("Software Engineer", "Tech Corp", 100000)).toBe(false); // Missing location
  expect(addJob()).toBe(false); // Missing all parameters
});

test("addJob() returns false for invalid data types", () => {
  expect(addJob(123, "Tech Corp", 100000, "San Francisco")).toBe(false); // Title should be a string
  expect(addJob("Software Engineer", "Tech Corp", "Salary", "San Francisco")).toBe(false); // Salary should be a number
  expect(addJob("Software Engineer", "Tech Corp", -50000, "San Francisco")).toBe(false); // Salary should be positive
});