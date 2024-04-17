const fetchData = require("./dataFetcher");

describe("fetch data function", () => {
  test("fetchData using .then", () => {
    return fetchData("http://example.com").then((data) => {
      expect(data).toBe("Fetched data from http://example.com");
    });
  });

  test("fetchData using async/await", async () => {
    const results = await fetchData("http://example.com");
    expect(results).toBe("Fetched data from http://example.com");
  });
});
