const addFive = require("./addFive");

test("should return  the number plus 5", () => {
    expect(addFive(1)).toBe(6)
});
