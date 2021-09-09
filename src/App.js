import { Provider } from "react-redux";
import Form from "./components/Form";
import Header from "./components/Header";
import store from "./store/store";
import List from "./components/List";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
