import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li className={css.contact} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
