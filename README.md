# Advanced Jest Features

## Objective

Deepen your proficiency with Jest by tackling complex testing scenarios, including asynchronous functions and mocking external dependencies. This assignment will guide you through specific tasks to enhance your understanding of Jest's capabilities in testing real-world applications.

## Function and Rationale

### `fetchData(url)`

The `fetchData` function simulates fetching data from a given URL with a 1-second delay. It returns a promise that resolves to the fetched data.

#### Test Cases:

1. Using .then: This test verifies that the data fetched from the URL matches the expected result using `.then`.
2. Using async/await: This test provides another approach to verify the asynchronous behavior of the fetchData function using `async/await`.

### `sendEmail(to, subject, body)`

The `sendEmail` function simulates sending an email. It returns a string indicating that the email has been sent.

#### Test Cases:

1. Mock sendEmail: This test uses Jest mocking to simulate the `sendEmail` function, returning a mock response.
2. Verify Parameters: This test verifies that the `sendEmail` function is called with the correct parameters when invoked.

## Mocking

Mocking is employed in the tests to isolate specific functionalities and simulate external dependencies, such as the `sendEmail` function. By mocking `sendEmail`, I can test its invocation and parameters without actually sending emails, ensuring that the function behaves as expected in different scenarios.
