import './App.css';
import QuestionShowPage from './components/QuestionShowPage';
import {QuestionIndexPage} from './components/QuestionIndexPage';

function App() {
  return (
    <div className="App">
      <QuestionShowPage />
      <QuestionIndexPage />
    </div>
  );
}

export default App;