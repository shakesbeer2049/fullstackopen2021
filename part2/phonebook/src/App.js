import { useState } from "react";
import "./index.css";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import AddContact from "./components/Add";
import Notification from "./components/Notification";

const App = () => {
  const [showContacts, setShowContacts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [message, setMessage] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  //TODO: CREATE A FORM FOR ADDING CONTACTS :DONE
  //FUNCTION FOR DUPLICATES :DONE
  //FILTER SEARCH BAR : done
  //getdata : done
  // post data: done
  //delete data:

  return (
    <>
      <div className="main-container">
      <h1>Phonebook</h1><hr />
      <Notification message={message} errMessage={errMessage} />
      <div className="search">
      <h2>Search</h2>
      <Filter
        showContacts={showContacts}
        setFiltered={setFiltered}
        filtered={filtered}
      />
      </div>

      <div className="add-contact">
      <h2>Add Contact</h2>
      <AddContact
        showContacts={showContacts}
        setShowContacts={setShowContacts}
        setMessage={setMessage}
      />
      </div>

     <div className="show-contact">
     <Contacts
        showContacts={showContacts}
        setShowContacts={setShowContacts}
        filtered={filtered}
        setFiltered={setFiltered}
        setMessage={setMessage}
        setErrMessage={setErrMessage}
      />
     </div>
      </div>
    </>
      
  );
};

export default App;
