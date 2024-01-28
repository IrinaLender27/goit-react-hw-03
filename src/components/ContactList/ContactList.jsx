import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
export const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {visibleContacts.map((visibleContact) => (
        <li className={css.contact} key={visibleContact.id}>
          <Contact contact={visibleContact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
