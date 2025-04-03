//function SelectedContact (props)

import { useState} from "react"
import { useEffect } from "react"

function SelectedContact ({selectedContactId, setSelectedContactId}){
    const [contact, setContact]= useState({})

    useEffect(() => {
        async function selectContact() {
          try {
            const response = await fetch(
              `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            const result = await response.json();
            setContact(result);
          } catch (error) {
            console.error(error);
          }
        }
        selectContact();
      }, []);

    return(
        <>
       <div>{contact.name}</div>
        <div>{contact.email}</div>
        <div>{contact.address?.zipcode}</div>
        <div>{contact.address?.city}</div>
        </>
    )
}


export default SelectedContact