test("Check if McKay is returned from API", async () => {
  const response = await fetch("http://localhost:3000/mckay");
  const name = await response.text();
  expect(name).toBe("Hello McKay");
});
