// Array of 30 quiz questions (10 easy, 10 medium, 10 hard) with difficulty levels
var quizQuestions = [
    // EASY QUESTIONS (10)
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Making Language"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Which HTML tag is used for creating a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "What does JS stand for?",
        options: [
            "JavaStyle",
            "JustScript",
            "JavaScript",
            "JoinScript"
        ],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: [
            "<paragraph>",
            "<para>",
            "<p>",
            "<text>"
        ],
        correct: 2,
        difficulty: "easy"
    },
    {
        question: "How do you create a heading in HTML?",
        options: [
            "<heading>Title</heading>",
            "<h1>Title</h1>",
            "<head>Title</head>",
            "<title>Title</title>"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "Which CSS property is used to change background color?",
        options: [
            "bg-color",
            "background-color",
            "color-bg",
            "background"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the correct syntax to create a variable in JavaScript?",
        options: [
            "variable x = 5;",
            "var x = 5;",
            "v x = 5;",
            "declare x = 5;"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "Which HTML tag is used to insert an image?",
        options: [
            "<image>",
            "<img>",
            "<picture>",
            "<photo>"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How do you add a comment in JavaScript?",
        options: [
            "<!-- comment -->",
            "// comment",
            "' comment",
            "# comment"
        ],
        correct: 1,
        difficulty: "easy"
    },

    // MEDIUM QUESTIONS (10)
    {
        question: "Which CSS property is used to change text color?",
        options: [
            "text-color",
            "font-color",
            "color",
            "text-style"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "Which symbol is used for ID selectors in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
            "msg('Hello World');",
            "alert('Hello World');",
            "alertBox('Hello World');",
            "msgBox('Hello World');"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = 'red', 'green', 'blue'",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "How do you select an element with the class 'example' in CSS?",
        options: [
            "#example",
            "*example",
            ".example",
            "@example"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "Which method adds one or more elements to the end of an array?",
        options: [
            "shift()",
            "push()",
            "pop()",
            "unshift()"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the correct way to link an external CSS file?",
        options: [
            "<link rel='stylesheet' href='style.css'>",
            "<style src='style.css'>",
            "<css href='style.css'>",
            "<script src='style.css'>"
        ],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function myFunc() { }",
            "def myFunc() { }",
            "create function myFunc() { }",
            "func myFunc() { }"
        ],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
            "The current object",
            "The window object",
            "The document object",
            "The HTML element"
        ],
        correct: 0,
        difficulty: "medium"
    },
    {
        question: "Which property gets or sets the HTML content of an element?",
        options: [
            "textContent",
            "innerHTML",
            "innerText",
            "html()"
        ],
        correct: 1,
        difficulty: "medium"
    },

    // HARD QUESTIONS (10)
    {
        question: "Which company developed JavaScript?",
        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Mozilla"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the purpose of the 'use strict' statement in JavaScript?",
        options: [
            "Makes code run faster",
            "Enables strict mode which enforces stricter parsing and error handling",
            "Compiles the code",
            "Encrypts the code"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        options: [
            "There is no difference",
            "'==' compares value only, '===' compares value and type",
            "'===' is faster than '=='",
            "'==' is used for strings, '===' is for numbers"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What does the CSS property 'box-sizing' do?",
        options: [
            "Specifies the size of the browser box",
            "Defines how the total width and height of an element is calculated",
            "Sets the padding of an element",
            "Determines the element's z-index"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is a closure in JavaScript?",
        options: [
            "A function that closes the program",
            "A function that has access to variables from another function's scope",
            "A way to end a loop",
            "A method to close a connection"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the purpose of the 'async' keyword in JavaScript?",
        options: [
            "Makes code run asynchronously",
            "Declares a function that returns a Promise",
            "Speeds up code execution",
            "Prevents errors"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is event delegation in JavaScript?",
        options: [
            "Delegating events to other developers",
            "A technique where a single listener handles events for multiple elements",
            "An event that happens multiple times",
            "Events that are delegated to the parent element"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the difference between 'null' and 'undefined' in JavaScript?",
        options: [
            "They are the same",
            "null is an intentional absence of value, undefined is unintentional",
            "undefined is an intentional absence of value, null is unintentional",
            "null is for objects, undefined is for variables"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the CSS specificity order (from lowest to highest)?",
        options: [
            "Element > Class > ID",
            "ID > Class > Element",
            "Class > Element > ID",
            "Element > ID > Class"
        ],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "What does 'hoisting' refer to in JavaScript?",
        options: [
            "Lifting elements up on the page",
            "Moving declarations to the top of their scope before code execution",
            "Pulling data from a database",
            "Creating a variable at the top level"
        ],
        correct: 1,
        difficulty: "hard"
    }
];