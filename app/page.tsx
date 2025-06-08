// app/page.tsx
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';

export default function Home() {
  return (
    <main className="main-container">
      <h1 className="title">HELLO USER!</h1>
      <p className="subtitle">Welcome to My Cute Website</p>
      <div className="card-container">
        <WelcomeCard message="Hello!" name=" Maria Mhikyla L. Jayno" />
        <Counter />
        <StudentInfo />
      </div>
    </main>
  );
}
