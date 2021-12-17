import axios from "axios";

const phoneUrl = "http://localhost:3001/persons";

const getContacts = () => {
  const req = axios.get(phoneUrl);
  return req.then((res) => res.data);
};

const addContact = (newContact) => {
  const req = axios.post(phoneUrl, newContact);
  return req.then((res) => res.data);
};

const delContact = (id) => {
return axios.delete(`${phoneUrl}/${id}`)
  
};

const updateContact = (id,newContact) => {
  const req = axios.put(`${phoneUrl}/${id}`,newContact)
  return req.then(res => res.data)
}

export default { getContacts, addContact, delContact, updateContact };
