import "./List.css";
import ContactItem from "./ContactItem";
import { memo, useContext } from "react";
import { contentStateContext, contentDispatchContext } from "../App";

const List = () => {
  const contacts = useContext(contentStateContext);

  return (
    <div className="List">
      <h3>Contact List</h3>

      <div className="contact_wrapper">
        {contacts.map((contact) => {
          return <ContactItem key={contact.id} {...contact} />;
        })}
      </div>
    </div>
  );
};

export default memo(List);
