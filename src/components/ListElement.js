import { useState } from "react";
import { connect } from "react-redux";
import { deleteRate } from "../actions/appActions";

import Form from "./Form";

const ListElement = ({ deleteRate, author, comment, id, rate }) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toggleElements = () => setIsVisibleForm((prev) => !prev);
  const handleDeleteButton = () => {
    deleteRate({ id });
  };

  const formOrButtonElement = isVisibleForm ? (
    <Form
      author={author}
      callback={toggleElements}
      comment={comment}
      id={id}
      rate={rate}
    />
  ) : (
    <button onClick={toggleElements}>edit rate</button>
  );
  return (
    <li>
      <p>Autor oceny: {author}</p>
      <p>Ocena: {rate} </p>
      <p>Komentarz: {comment}</p>
      {formOrButtonElement}
      <button onClick={handleDeleteButton}>delete</button>
    </li>
  );
};

const connectActionsToProps = {
  deleteRate,
};
const ListConsumer = connect(null, connectActionsToProps)(ListElement);

export default ListConsumer;
