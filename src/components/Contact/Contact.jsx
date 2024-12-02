import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { removeContact } from "../../redux/contactsSlice";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <div>
        <button
          onClick={() => dispatch(removeContact(id))}
          className={css.contactBtn}
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default Contact;
