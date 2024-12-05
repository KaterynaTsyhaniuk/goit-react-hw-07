import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectLoading } from "../redux/contactsSlice";
import Loader from "./Loader/Loader";
function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const error = useSelector(selectError);
  return (
    <div>
      <h1>Phonebook</h1>
      {error && <p> Error: {error}</p>}
      <ContactForm />
      <SearchBox />
      {loading ? <Loader /> : <ContactList />}
    </div>
  );
}

export default App;
