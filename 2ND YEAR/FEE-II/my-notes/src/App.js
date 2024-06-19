import './App.css';
import React,{useState} from 'react';
import data from './data';
import AddNotes from'./components/AddNotes';
import Notes from './components/Notes';

function App() {
  const [notes,setNotes] = useState(data);

  function remove(desc){
    const newnotes= notes.filter(notes=>notes.desc!== desc);
    setNotes(newnotes);
  }

  return (
    <div className="App">
      <div className="heading">MY-NOTES</div>
      <AddNotes ></AddNotes>
      <Notes notes={notes} del={remove}/>
    </div>
  );
}

export default App;