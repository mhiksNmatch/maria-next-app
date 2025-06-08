PROJECT STRUCTURE
.
├── app/
│   └── page.tsx              # Main entry page that renders all components
├── components/
│   ├── WelcomeCard.tsx       # Welcome message card component
│   ├── Counter.tsx           # Interactive counter component
│   └── StudentInfo.tsx       # Form to collect student name
├── styles/
│   └── globals.css           # Global styles for the app

Components
WelcomeCard.tsx
A reusable card component that displays a welcome message.
.tsx
interface WelcomeCardProps {
  message: string;
}
Props:
message: A string passed to display inside the card.
Usage: Used on the home page to show a greeting or title.
Style: Styled with a pink background, centered text, and rounded corners.

Counter.tsx
A simple stateful component that shows a counter with an increment button.
State:
count: Tracks the current number.
Interaction:
Clicking the Increment button increases the counter.
Usage: Demonstrates React useState() for interactive UI.
Style: Light red background, padding, and rounded corners.

StudentInfo.tsx
A form to collect and display the student’s name.
State:
name: Stores the typed name.
Features:
Text input for the name.
Submit button shows the name in an alert.
Usage: Demonstrates form handling with controlled components in React.
Style: Flexbox layout with pink-themed inputs and button.

Styling (globals.css)
Theme: Pink pastel tones with hot pink accents.
Typography: Uses Arial for clean, soft look.
Responsiveness: All components use flex layout for vertical alignment.

Card Styling:
border-radius for rounded edges.
Background shades of pink to match the aesthetic.

How to Run:
Install dependencies:
npm install
Start the development server:
npm run dev
Open in browser:
http://localhost:3000
