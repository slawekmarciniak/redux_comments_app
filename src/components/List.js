import { connect } from "react-redux";
import Element from "./Element";

const List = ({ rates }) => {
  const ratesElements = rates.map((rate) => <Element key={rate} {...rate} />);
  return <ul>{ratesElements}</ul>;
};

const connectExample = (store) => ({
  rates: store.rates,
  //   users: store.users (gdyby byli)
});

const ListConsumer = connect(connectExample)(List);

export default ListConsumer;
