import { useState } from 'react'
import './App.css'
import './Components/ContactList.jsx'
import ContactList from './Components/ContactList.jsx'
import ContactRow from './Components/ContactRow'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App
