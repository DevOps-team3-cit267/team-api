test('Check if Max is returned from API', async () => {
    const response = await fetch('http://localhost:3000/Max');
    const name = await response.text();
    expect(name).toBe("Max");
});
