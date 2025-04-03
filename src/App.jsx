import { useState } from 'react'
import './App.css'
import './Components/ContactList.jsx'
import ContactList from './Components/ContactList.jsx'
import ContactRow from './Components/ContactRow'
import SelectedContact from './Components/SelectedContact.jsx'


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div><SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/></div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App
