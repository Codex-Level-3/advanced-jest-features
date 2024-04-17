const sendEmail = require("./emailService");

jest.mock("./emailService");

describe("sendEmail function", () => {
  sendEmail.mockImplementation(() => "mock email sent");
  test("mock sendEmail", () => {
    expect(sendEmail("test@gmail.com", "subject", "body")).toBe(
      "mock email sent"
    );
  });

  test("sendEmail being called with correct parameters", () => {
    expect(sendEmail).toHaveBeenCalledWith("test@gmail.com", "subject", "body");
  });
});
