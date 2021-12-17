import { useState } from "react/cjs/react.development";
import phoneService from "../Services/phone";

//ADD CONTACT
const AddContact = ({ showContacts, setShowContacts, setMessage }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  let a;

  const addContact = (e) => {
    e.preventDefault();
    const newContact = {
      name: name,
      number: number,
    };

    if (!name || !number) window.alert("you blind bro ");
    else if (duplicate(number) !== undefined) {
      const cfr = window.confirm(
        `${name} is already in the phonebook. Update details?`
      );
      if (cfr) {
        phoneService.updateContact(a.id, newContact).then((newContact) => {
          setShowContacts(showContacts.concat(newContact));
          setMessage(`${newContact.name} has been updated.`);
          e.target.reset();
          setName("");
          setNumber("");
          phoneService.getContacts().then((contact) => {
            setShowContacts(contact);
          });
        });
      }
    } else {
      phoneService.addContact(newContact).then((newContact) => {
        setShowContacts(showContacts.concat(newContact));
        setMessage(`${newContact.name} has been added.`);
        setTimeout(() => setMessage(null), 3000);
        e.target.reset();
        setName("");
        setNumber("");
      });
    }
  };

  //DUPLICATE NUMBER
  function duplicate(number) {
    return (a = showContacts.find((num) => num.number === number));
  }

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const numHandler = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <form onSubmit={addContact}>
        <label htmlFor="Name">Name </label>
        <input type="text" onChange={nameHandler} />
        <br />
        <label htmlFor="Number">Number </label>
        <input type="number" onChange={numHandler} />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
export default AddContact;
