import Form from "./components/Form";
import { connect } from "react-redux";

import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <p>WITAJ REDUX</p>
        <List />
      </div>
    </Provider>
  );
}

export default App;
