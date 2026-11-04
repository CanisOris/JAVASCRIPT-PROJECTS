# JavaScript Projects

A collection of apps, websites, and exercises from my JavaScript coursework at The Tech Academy. These projects explore JavaScript fundamentals, DOM manipulation, browser storage, forms, animation, asynchronous requests, jQuery, and React.

[Browse the project website](https://canisoris.github.io/JAVASCRIPT-PROJECTS/)

## Contents

- [Apps and websites](#apps-and-websites)
- [Course challenges and assignments](#course-challenges-and-assignments)
- [AJAX](#ajax)
- [jQuery](#jquery)
- [React](#react)
- [Basic JavaScript projects](#basic-javascript-projects)
- [Running locally](#running-locally)
- [Connect](#connect)

## Apps and websites

| Project | Description | Technologies |
| --- | --- | --- |
| [ToDo App](todo_app/index.html) | Add and remove tasks, with array-based event listener creation and persistent browser storage using `localStorage` and JSON. | HTML, CSS, JavaScript, JSON |
| [Classic Subs](JQuery/index.html) | A themed website for a classic car-to-submarine conversion company. | HTML, CSS, JavaScript, jQuery |
| [My Dogs Slideshow](Basic%20JavaScript%20Projects/Project9_countdown_slideshow/slideshow.html) | A slideshow of my dogs, with additional CSS sizing to fit containers of different sizes. | HTML, CSS, JavaScript |
| [Pizza Project Upgrade](Advanced%20JavaScript%20Projects/Pizza_Project/pizza.html) | A space-themed pizza order form that calculates the total and produces a receipt. | HTML, CSS, JavaScript |
| [Tic-Tac-Toe: Ren & Stimpy Steel Cage Battle](Advanced%20JavaScript%20Projects/TicTacToe/TicTacToe.html) | A customized tic-tac-toe game featuring a Ren & Stimpy cage match theme. | HTML, CSS, JavaScript |
| [Calculator](Advanced%20JavaScript%20Projects/calculator.html) | A customized functional calculator. | HTML, CSS, JavaScript |

The links above open source files on GitHub. To interact with the apps, use the [project website](https://canisoris.github.io/JAVASCRIPT-PROJECTS/) or run the repository locally.

## Course challenges and assignments

### Individual exercises

| Exercise | Focus |
| --- | --- |
| [Elements Challenge](AJAX/EllementsChallenge.html) | Inspect the referring page through the DOM document object. |
| [JavaScript Console Debug](Advanced%20JavaScript%20Projects/running-javascript-colsole.html) | Practice running and debugging JavaScript in the browser console. |
| [Window Object](Advanced%20JavaScript%20Projects/winObj.html) | Use URL search parameters and hashes to jump to a target on the page. |
| [Form Validation](Advanced%20JavaScript%20Projects/html_2.html) | Validate form input. |
| [Attributes](Advanced%20JavaScript%20Projects/html_3.html) | Set initial value attributes, retrieve them, and compare them with new input values. |
| [Arrow and Non-Arrow Functions](Advanced%20JavaScript%20Projects/html_3_Arrow.html) | Read name values from a form using different function styles. |

### Challenge collections

The [course challenges page](A-JAVASSCRIPT-COURSE/challenges.html) collects exercises covering viewport units, fades, forms, a pop-up contact form, animation, zoom effects, bookmarks, slideshows, and sticky elements.

Additional work is available in the [course assignments](A-JAVASSCRIPT-COURSE/assignments.html) and [advanced exercises](Advanced%20JavaScript%20Projects/html_1.html), including switch statements, `getElementsByClassName`, canvas drawing, and canvas color gradients.

## AJAX

The [AJAX projects](AJAX/index.html) explore loading content and working with JSON:

- **Get Quote:** Retrieve a random quote from a list on another page.
- **Get Current Weather:** Request weather JSON from a URL and format the response for display.
- **[Sign-up Form](AJAX/ajax_basic.html):** A basic AJAX form exercise.
- **[Elements Challenge](AJAX/EllementsChallenge.html):** Inspect the document referrer.

The referrer exercise has a known limitation: the referrer value may be empty, so it does not consistently identify the previous page.

## jQuery

- [Classic Subs](JQuery/index.html): A themed website using jQuery.
- [jQuery Challenge](JQuery/jqChallenge.html): A collection of jQuery exercises.

## React

The [React projects](React_Projects/index.html) introduce rendering, button interactions, component properties, and fade effects.

| Exercise | Focus |
| --- | --- |
| [React 1](React_Projects/React_1.html) | Get React running and test rendering. |
| [React 2](React_Projects/React_2.html) | Display results from button interactions. |
| [React 3](React_Projects/React_3.html) | Inspect debugging information and properties. |
| [React 4](React_Projects/React_4.html) | Build a fade effect. |

## Basic JavaScript projects

The [basic projects directory](Basic%20JavaScript%20Projects/index.html) contains ten groups of code assignments.

| Project | Topics |
| --- | --- |
| [1. Expressions and Alerts](Basic%20JavaScript%20Projects/Project1_expressions_alert/index.html) | Expressions and alert messages. |
| [2. Functions](Basic%20JavaScript%20Projects/Project2_functions/index.html) | Defining and calling functions. |
| [3. Math Operators](Basic%20JavaScript%20Projects/Project3_math_operators/index.html) | Arithmetic and mathematical operations. |
| [4. Dictionaries](Basic%20JavaScript%20Projects/Project4_dictionaries/index.html) | Objects and key-value pairs. |
| [5. Comparisons and Type Coercion](Basic%20JavaScript%20Projects/Project5_comparisons_type_coercion/index.html) | Comparisons, types, and coercion. |
| [6. Ternary Operators and Constructors](Basic%20JavaScript%20Projects/Project6_ternary__operators_constructors/index.html) | Conditional expressions and constructors. |
| [7. Scope and Time Functions](Basic%20JavaScript%20Projects/Project7_scope_time_function/index.html) | Variable scope and time-related functions. |
| [8. String Methods](Basic%20JavaScript%20Projects/Project8_string_methods/index.html) | Working with strings. |
| [9. Countdown and Slideshow](Basic%20JavaScript%20Projects/Project9_countdown_slideshow/index.html) | Countdown timers, slideshows, and script loading. |
| [10. Loops and Arrays](Basic%20JavaScript%20Projects/Project10_loops_arrays/index.html) | Iteration and array operations. |

Project 9 also includes an [asynchronous script](Basic%20JavaScript%20Projects/Project9_countdown_slideshow/js1/async.js), an [async and defer assignment](Basic%20JavaScript%20Projects/Project9_countdown_slideshow/Async_Defer_Assi.html), a [debugging exercise](Basic%20JavaScript%20Projects/Project9_countdown_slideshow/debug-code.html), a [slideshow](Basic%20JavaScript%20Projects/Project9_countdown_slideshow/slideshow.html), and a [developer tools assignment](Basic%20JavaScript%20Projects/Project9_countdown_slideshow/dev-tools-assi.html).

## Running locally

1. Clone the repository:

   ```sh
   git clone https://github.com/CanisOris/JAVASCRIPT-PROJECTS.git
   ```

2. Serve the **parent folder** of `JAVASCRIPT-PROJECTS` with a local static web server. For example, if Python is installed, run this from the folder where you cloned the repository:

   ```sh
   python -m http.server 8000
   ```

3. Open `http://localhost:8000/JAVASCRIPT-PROJECTS/` in your browser and choose a project.

Serving the parent folder preserves the `/JAVASCRIPT-PROJECTS/` asset paths used by the pages. Some examples load external libraries or services and require an internet connection. The weather example may also request location access.

## Connect

**Matthew Stewart**

- [GitHub](https://github.com/CanisOris)
- [LinkedIn](https://www.linkedin.com/in/stewart-matthew-profile/)
- [Portfolio](https://canisoris.github.io/Portfolio/)
