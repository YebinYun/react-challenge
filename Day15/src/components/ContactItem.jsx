import "./ContactItem.css";

function ContactItem({ id, title, contact, onDelete }) {
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ContactItem">
      <div className="title">{title}</div>
      <div className="contact">{contact}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
}

export default ContactItem;
