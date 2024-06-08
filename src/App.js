import { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState();
  console.log(activeNote)

  const onAddNote = () => {
    const newNote = {
      id: Math.floor(Math.random() * 1e5),
      title: "タイトル",
      content: "",
      modDate: new Date(),
      isActive: false,
    };
    console.log(newNote)

    setNotes([...notes, newNote]);
  };

  const onDeleteNote = (id) => {
    const isConfirm = window.confirm("本当に削除しますか？");
    if(isConfirm) setNotes(notes.filter(note => note.id !== id));
  };

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  };

  const onUpdateNote = (targetNote, key, value) => {
    console.log(targetNote)
    console.log(key)
    console.log(value)
    const note = {
      ...targetNote,
      [key]: value,
      modDate: new Date(),
    };
    const otherNotes = notes.filter(note => note.id !== activeNote);
    setNotes([...otherNotes, note ])
  }


  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        notes={notes}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default App;
