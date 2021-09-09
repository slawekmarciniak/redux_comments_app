import { connect } from "react-redux";
import ListElement from "./ListElement";

const List = ({ rates }) => {
  const ratesElements = rates.map((rate) => (
    <ListElement key={rate.id} {...rate} />
  ));
  return <ul>{ratesElements}</ul>;
};

const connectExample = (store) => ({
  rates: store.rates,
  //   users: store.users (gdyby byli)
});

const ListConsumer = connect(connectExample)(List);

export default ListConsumer;
