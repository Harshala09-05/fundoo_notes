import React from 'react';
import { createContext, useState,useEffect } from 'react';
import { getAllNotes } from '../Pages/Dashboard';
import { getNotes } from '../Services/dataService';
export const DataContext = createContext(null);


export default function DataProvider({children}) {

    const [notes, setNotes] = useState([]);
    const [archiveNotes, setArchiveNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    useEffect(() => {
        getAllNotes();
    }, [])
    

      const getAllNotes = async () => {
        try {
            let response = await getNotes();  // Fetching notes using the service
            setNotes(response.data);  // Assuming the response has a data field with the notes
            console.log("Data", response);
        } catch (error) {
            console.error("Failed to fetch notes", error);
        }
    }; 
      


  return (
      <DataContext.Provider value={{
          notes,
          setNotes,
          archiveNotes,
          setArchiveNotes,
          deletedNotes,
          setDeletedNotes,
          getAllNotes
      }}>
         {children} 
    </DataContext.Provider>
  )
}
