import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

export const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <div className={css.contact}>
      <div className={css.contactData}>
        <p>
          <IoPerson className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)} type="button">
        Delate
      </button>
    </div>
  );
};
