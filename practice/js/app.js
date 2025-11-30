// Problem Database
const problems = [
    {
        id: 1,
        title: "Customer Revenue Analysis",
        difficulty: "easy",
        topic: "sql",
        description: "Write a SQL query to find the total revenue for each customer. Return customer_id and total_revenue, ordered by total_revenue descending.",
        example: "Input:\norders table:\n| order_id | customer_id | amount |\n|----------|-------------|--------|\n| 1        | 101         | 50.00  |\n| 2        | 102         | 75.00  |\n| 3        | 101         | 30.00  |\n\nOutput:\n| customer_id | total_revenue |\n|-------------|---------------|\n| 101         | 80.00         |\n| 102         | 75.00         |",
        starterCode: "SELECT customer_id, SUM(amount) as total_revenue\nFROM orders\nGROUP BY customer_id\nORDER BY total_revenue DESC;",
        testCases: [
            { input: "orders with 3 rows", expected: "2 rows with totals" }
        ]
    },
    {
        id: 2,
        title: "Find Duplicate Emails",
        difficulty: "easy",
        topic: "sql",
        description: "Write a SQL query to find all duplicate emails in a Person table. Return the email addresses that appear more than once.",
        example: "Input:\nPerson table:\n| id | email           |\n|----|----------------|\n| 1  | john@email.com |\n| 2  | bob@email.com  |\n| 3  | john@email.com |\n\nOutput:\n| email          |\n|----------------|\n| john@email.com |",
        starterCode: "SELECT email\nFROM Person\nGROUP BY email\nHAVING COUNT(*) > 1;",
        testCases: [
            { input: "Person with duplicates", expected: "duplicate emails" }
        ]
    },
    {
        id: 3,
        title: "Moving Average Calculator",
        difficulty: "medium",
        topic: "python",
        description: "Write a Python function to calculate the 3-day moving average of a list of numbers. Return a list of moving averages.",
        example: "Input: [10, 20, 30, 40, 50]\nOutput: [20.0, 30.0, 40.0]",
        starterCode: "def moving_average(numbers, window=3):\n    # Your code here\n    pass",
        testCases: [
            { input: "[10, 20, 30, 40, 50]", expected: "[20.0, 30.0, 40.0]" }
        ]
    },
    {
        id: 4,
        title: "Data Cleaning - Remove Outliers",
        difficulty: "medium",
        topic: "python",
        description: "Write a function that removes outliers from a dataset using the IQR method. Values below Q1 - 1.5*IQR or above Q3 + 1.5*IQR should be removed.",
        example: "Input: [1, 2, 3, 4, 5, 100]\nOutput: [1, 2, 3, 4, 5]",
        starterCode: "def remove_outliers(data):\n    # Calculate Q1, Q3, and IQR\n    # Remove outliers\n    pass",
        testCases: [
            { input: "[1, 2, 3, 4, 5, 100]", expected: "[1, 2, 3, 4, 5]" }
        ]
    },
    {
        id: 5,
        title: "Calculate Correlation",
        difficulty: "hard",
        topic: "stats",
        description: "Calculate the Pearson correlation coefficient between two variables without using built-in correlation functions.",
        example: "Input: x = [1, 2, 3, 4, 5], y = [2, 4, 6, 8, 10]\nOutput: 1.0 (perfect positive correlation)",
        starterCode: "def pearson_correlation(x, y):\n    # Calculate means\n    # Calculate correlation\n    pass",
        testCases: [
            { input: "x=[1,2,3,4,5], y=[2,4,6,8,10]", expected: "1.0" }
        ]
    },
    {
        id: 6,
        title: "Top N Products by Sales",
        difficulty: "medium",
        topic: "sql",
        description: "Write a query to find the top 5 products by total sales amount. Include product_name and total_sales.",
        example: "Input:\nsales table with product_id and amount\nproducts table with product_id and product_name\n\nOutput: Top 5 products with their total sales",
        starterCode: "SELECT p.product_name, SUM(s.amount) as total_sales\nFROM sales s\nJOIN products p ON s.product_id = p.product_id\nGROUP BY p.product_name\nORDER BY total_sales DESC\nLIMIT 5;",
        testCases: [
            { input: "sales and products tables", expected: "top 5 products" }
        ]
    },
    {
        id: 7,
        title: "Pivot Table Implementation",
        difficulty: "hard",
        topic: "python",
        description: "Implement a basic pivot table function that takes a list of dictionaries and creates a summary by grouping and aggregating.",
        example: "Input: data = [{'region': 'East', 'product': 'A', 'sales': 100}, ...]\nOutput: Pivoted summary by region and product",
        starterCode: "def pivot_table(data, index, columns, values, aggfunc='sum'):\n    # Your implementation\n    pass",
        testCases: [
            { input: "list of sales records", expected: "pivoted summary" }
        ]
    },
    {
        id: 8,
        title: "Hypothesis Testing - T-Test",
        difficulty: "hard",
        topic: "stats",
        description: "Implement a two-sample t-test to determine if two groups have significantly different means.",
        example: "Input: group1 = [23, 25, 27], group2 = [30, 32, 35]\nOutput: t-statistic and p-value",
        starterCode: "def two_sample_ttest(group1, group2):\n    # Calculate means and standard deviations\n    # Calculate t-statistic\n    pass",
        testCases: [
            { input: "two groups of numbers", expected: "t-stat and p-value" }
        ]
    }
];

// State Management
let currentFilter = { difficulty: 'all', topic: 'all' };
let submissions = JSON.parse(localStorage.getItem('submissions')) || {};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('problems-container')) {
        initProblemsPage();
    } else if (document.getElementById('problem-detail')) {
        initProblemPage();
    }

    // Fade-in animations
    observeElements();
});

// Problems List Page
function initProblemsPage() {
    renderProblems();
    setupFilters();
    setupSearch();
    updateProgressBar();
}

function renderProblems() {
    const container = document.getElementById('problems-container');
    const filteredProblems = problems.filter(p => {
        const difficultyMatch = currentFilter.difficulty === 'all' || p.difficulty === currentFilter.difficulty;
        const topicMatch = currentFilter.topic === 'all' || p.topic === currentFilter.topic;
        return difficultyMatch && topicMatch;
    });

    container.innerHTML = filteredProblems.map(problem => {
        const status = getSubmissionStatus(problem.id);
        const statusIcon = status === 'completed'
            ? '<i class="fa-solid fa-circle-check status-completed"></i>'
            : status === 'attempted'
                ? '<i class="fa-solid fa-circle-dot status-attempted"></i>'
                : '<i class="fa-regular fa-circle" style="color: #64748b;"></i>';

        return `
            <div class="problem-card fade-in-up" onclick="goToProblem(${problem.id})">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-3">
                        ${statusIcon}
                        <h3 class="text-lg font-semibold text-white">${problem.title}</h3>
                    </div>
                    <span class="badge-${problem.difficulty}">${problem.difficulty}</span>
                </div>
                <div class="flex items-center gap-2">
                    <span class="badge-${problem.topic}">${problem.topic.toUpperCase()}</span>
                    <span class="text-gray-400 text-sm">• Problem #${problem.id}</span>
                </div>
            </div>
        `;
    }).join('');

    observeElements();
}

function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterType = e.target.dataset.filter;
            const filterValue = e.target.dataset.value;

            // Update active state
            document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            // Update filter
            currentFilter[filterType] = filterValue;
            renderProblems();
        });
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const problemCards = document.querySelectorAll('.problem-card');

            problemCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                card.style.display = title.includes(query) ? 'block' : 'none';
            });
        });
    }
}

function updateProgressBar() {
    const completed = Object.values(submissions).filter(s => s.status === 'completed').length;
    const percentage = (completed / problems.length) * 100;

    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    if (progressFill && progressText) {
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${completed} / ${problems.length} Completed`;
    }
}

// Problem Detail Page
function initProblemPage() {
    const problemId = parseInt(new URLSearchParams(window.location.search).get('id'));
    const problem = problems.find(p => p.id === problemId);

    if (!problem) {
        window.location.href = 'index.html';
        return;
    }

    renderProblemDetail(problem);
    loadSavedCode(problemId);
}

function renderProblemDetail(problem) {
    document.getElementById('problem-title').textContent = problem.title;
    document.getElementById('problem-difficulty').className = `badge-${problem.difficulty}`;
    document.getElementById('problem-difficulty').textContent = problem.difficulty;
    document.getElementById('problem-topic').className = `badge-${problem.topic}`;
    document.getElementById('problem-topic').textContent = problem.topic.toUpperCase();
    document.getElementById('problem-description').textContent = problem.description;
    document.getElementById('problem-example').textContent = problem.example;
    document.getElementById('code-editor').value = problem.starterCode;

    // Store problem ID for submission
    window.currentProblemId = problem.id;
}

function loadSavedCode(problemId) {
    const submission = submissions[problemId];
    if (submission && submission.code) {
        document.getElementById('code-editor').value = submission.code;
    }
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const resultsDiv = document.getElementById('test-results');

    // Simple simulation - in real app, this would execute code
    resultsDiv.innerHTML = `
        <div class="test-case passed">
            <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-green-400">Test Case 1</span>
                <i class="fa-solid fa-circle-check text-green-400"></i>
            </div>
            <p class="text-sm text-gray-400">Expected output matches actual output</p>
        </div>
        <div class="test-case passed">
            <div class="flex items-center justify-between mb-2">
                <span class="font-semibold text-green-400">Test Case 2</span>
                <i class="fa-solid fa-circle-check text-green-400"></i>
            </div>
            <p class="text-sm text-gray-400">Expected output matches actual output</p>
        </div>
    `;

    resultsDiv.classList.remove('hidden');
}

function submitCode() {
    const code = document.getElementById('code-editor').value;
    const problemId = window.currentProblemId;

    if (!code.trim()) {
        alert('Please write some code before submitting!');
        return;
    }

    // Save submission
    submissions[problemId] = {
        code: code,
        status: 'completed',
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('submissions', JSON.stringify(submissions));

    // Show success message
    const resultsDiv = document.getElementById('test-results');
    resultsDiv.innerHTML = `
        <div class="navy-card p-6 text-center">
            <i class="fa-solid fa-circle-check text-green-400 text-5xl mb-4"></i>
            <h3 class="text-2xl font-semibold text-white mb-2">Accepted!</h3>
            <p class="text-gray-400 mb-4">Your solution has been submitted successfully.</p>
            <button onclick="window.location.href='index.html'" class="btn-apple">
                Back to Problems
            </button>
        </div>
    `;
    resultsDiv.classList.remove('hidden');
}

// Helper Functions
function getSubmissionStatus(problemId) {
    const submission = submissions[problemId];
    if (!submission) return 'not-attempted';
    return submission.status;
}

function goToProblem(problemId) {
    window.location.href = `problem.html?id=${problemId}`;
}

// Intersection Observer for animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}
