# React + TypeScript + Vite

I created this demo with **React** + **TypeScript** + **Vite** and installed Tailwind CSS as a vite plugin. This is the most seamless way to integrate Tailwind CSS with frameworks like React so I added the @tailwindcss/vite plugin to the vite configuration.

**TypeScript** was chosen for its ability to catch errors early and improve code maintainability. With static typing, it helps prevent bugs, improves developer productivity through better autocompletion and refactoring, and makes the codebase more scalable—especially useful in team projects.

**Tailwind CSS** provides utility-first styling that speeds up development and keeps styling consistent. It avoids writing custom CSS for common patterns, which helps reduce bloat and makes the UI easier to maintain and customize responsively.

I retrieved skip data from the API using built-in fetch.

## Running the app locally

You need to clone the repo, navigate to the root folder and run `npm install` to intall dependencies. To see the app locally in your browser, run `npm run dev`
![app](https://github.com/asabahebwa/rem-waste-project/blob/master/src/assets/skipapp.png)

## Testing

I added unit tests using **React Testing Library** and **Jest**. Use `npm run test` to run tests normally in the terminal. To run tests in watch mode, run `npm run test:watch`, to see the code coverage, you need to run `npm run test:coverage`.

I used **React Testing Library** because it encourages testing components in a way that reflects how users actually interact with the app. It focuses on testing UI behavior rather than implementation details, which leads to more robust, maintainable tests that are less likely to break with refactors.

**Jest** was chosen as the test runner and assertion library because it's fast, easy to configure with React, and has built-in features like mocking and code coverage. It integrates seamlessly with React Testing Library and provides a solid foundation for writing both unit and integration tests.

Together, they offer a modern, developer-friendly setup for writing reliable front-end tests.
![test coverage](https://github.com/asabahebwa/rem-waste-project/blob/master/src/assets/testcoverage.png)
