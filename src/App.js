import React, { Component } from "react";
import "./App.css";
import { List, Map } from "immutable";
import Voting from "./components/Voting";

const pair = List.of("Trainspotting", "28 Days Later");
const tally = Map({ Trainspotting: 4, "28 Days Later": 3 });
// export default class App extends Component {
//   render() {
//     return <Voting pair={pair} tally={tally} hasVoted="Trainspotting" />;
//   }
// }

// export default class App extends React.Component {
//   console.log(this)
//   render() {
//     return React.cloneElement(this.props.children, {
//       pair: pair,
//       tally: tally
//     });
//   }
// }

export default function App(props) {
  console.log(props.children);
  return React.cloneElement(props.children, { pair, tally });
}
