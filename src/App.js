import React from "react";
//import Post from "./components/post";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "mike",
    lName: "sammer",
    email: "michaelsammer@you.com",
    age: 55,
    onlineStatus: true
  }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts" //{1}
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}
export default App;
