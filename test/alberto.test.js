test('Check if alberto is returned from API', async () => {
    const response = await fetch('http://localhost:3000/alberto');

    const name = await response.text();

    expect(name).toBe("alberto");
});