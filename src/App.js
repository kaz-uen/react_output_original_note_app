import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar
        // onAddNote={onAddNote}
        // onDeleteNote={onDeleteNote}
        // notes={notes}
        // activeNote={activeNote}
        // setActiveNote={setActiveNote}
      />
      <Main
      // activeNote={getActiveNote()} onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
