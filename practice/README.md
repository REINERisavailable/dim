# DataCode - Practice Platform for Data Analysts

A standalone LeetCode-style practice platform designed specifically for aspiring data analysts. Practice SQL, Python, and Statistics problems in a beautiful, distraction-free environment.

## Features

- 🎯 **8 Curated Problems** - SQL, Python, and Statistics challenges
- 🔍 **Smart Filtering** - Filter by difficulty (Easy/Medium/Hard) and topic
- 💾 **Progress Tracking** - Your submissions are saved locally
- 💻 **In-Browser Editor** - Write and test code directly in your browser
- 🎨 **Premium Design** - Matching the Data in Motion brand aesthetic
- 📱 **Fully Responsive** - Works perfectly on mobile and desktop

## Quick Start

### Run Locally

```bash
cd data-practice-platform
python3 -m http.server 8080
```

Then open your browser to: `http://localhost:8080`

## Problem Topics

### SQL (3 problems)
- Customer Revenue Analysis
- Find Duplicate Emails
- Top N Products by Sales

### Python (3 problems)
- Moving Average Calculator
- Data Cleaning - Remove Outliers
- Pivot Table Implementation

### Statistics (2 problems)
- Calculate Correlation
- Hypothesis Testing - T-Test

## Tech Stack

- **HTML5** - Semantic structure
- **Tailwind CSS** - Utility-first styling
- **Vanilla JavaScript** - No frameworks, no build process
- **LocalStorage** - Client-side data persistence

## File Structure

```
data-practice-platform/
├── index.html          # Main problems list
├── problem.html        # Problem detail with editor
├── css/
│   └── style.css      # Custom styles
├── js/
│   └── app.js         # Core functionality
└── assets/
    └── images/
        └── Logo.png   # Brand logo
```

## How It Works

1. **Browse Problems** - View all available problems on the main page
2. **Filter & Search** - Find problems by difficulty, topic, or keyword
3. **Solve Problems** - Click a problem to open the code editor
4. **Submit Solutions** - Your code is saved automatically
5. **Track Progress** - See your completion status on the main page

## Design Philosophy

This platform follows the "essential features only" approach:
- No over-engineering
- No unnecessary dependencies
- Fast and lightweight
- Works offline after first load

## Future Enhancements (Optional)

- Add more problems
- Backend integration for code execution
- User authentication
- Leaderboard system
- Video solutions
- Community discussions

## License

Part of the Data in Motion educational platform.

---

Built with ❤️ for aspiring data analysts
