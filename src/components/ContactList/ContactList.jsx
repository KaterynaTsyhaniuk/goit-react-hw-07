import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const selectNameFilter = useSelector((state) => state.filters.name);

  console.log("Contacts:", selectContacts);
  console.log("Filter:", selectNameFilter);
  const filteredData = selectContacts.filter((item) =>
    item.name.toLowerCase().includes(selectNameFilter)
  );
  return (
    <div>
      <ul>
        {filteredData.map((item) => {
          return <Contact key={item.id} {...item} />;
        })}
      </ul>
    </div>
  );
}

export default ContactList;
