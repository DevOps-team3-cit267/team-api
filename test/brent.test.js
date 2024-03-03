test("Check if Brent is returned from API", async () => {
  const response = await fetch("http://localhost:3000/brent");
  const name = await response.text();
  expect(name).toBe("Hello Brent");
});
