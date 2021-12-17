const Filter = ({ showContacts, setShowContacts, filtered, setFiltered }) => {
  const filter = (e) => {
    setFiltered(
      showContacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <>
      <input onChange={filter} />
    </>
  );
};

export default Filter;
