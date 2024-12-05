import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

function ContactList() {
  console.log("ContactList rendered");
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul>
        {filteredContacts.map((item) => {
          return <Contact key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
}

export default ContactList;
