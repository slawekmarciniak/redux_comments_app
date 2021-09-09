import { useState } from "react";
import { connect } from "react-redux";
import { addRate, editRate } from "../actions/appActions";

const Form = ({
  addRate,
  editRate,
  author = "",
  comment = "",
  id,
  rate = "",
  callback,
}) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const handleChangeAuthor = (event) => setAuthorInput(event.target.value);
  const handleChangeRate = (event) => setRateInput(event.target.value);
  const handleChangeComment = (event) => setCommentInput(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!authorInput.length) {
      console.log("error, please add author");
      return;
    }
    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    id ? editRate(rateObject) : addRate(rateObject);
    if (id) {
      callback();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          author:
          <input
            onChange={handleChangeAuthor}
            type="text"
            value={authorInput}
          />
        </label>
      </div>

      <div>
        rate
        <label>
          :
          <input onChange={handleChangeRate} type="number" value={rateInput} />
        </label>
      </div>

      <div>
        <label>
          comment:
          <input
            onChange={handleChangeComment}
            type="text"
            value={commentInput}
          />
        </label>
      </div>
      <button type="submit">{id ? "save" : "add"}</button>
    </form>
  );
};

const connectActionsToProps = {
  addRate,
  editRate,
};

const FormConsumer = connect(null, connectActionsToProps)(Form);

export default FormConsumer;
