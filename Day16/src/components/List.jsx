import "./List.css";
import ContactItem from "./ContactItem";
import { memo } from "react";

const List = ({ contacts, onDelete }) => {
  return (
    <div className="List">
      <h3>Contact List</h3>

      <div className="contact_wrapper">
        {contacts.map((contact) => {
          return (
            <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default memo(List);
