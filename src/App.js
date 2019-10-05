import React from "react";
//import Post from "./components/post";
import Header from "./components/header";
import Headline from "./components/headline";

import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions";

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
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;

    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    };
    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts" //{1}
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
