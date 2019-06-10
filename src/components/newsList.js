import React from "react";
import "../App.css";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=b99c0da026fc4d09a37683fdb3c0f15b";
    var req = new Request(url);
    fetch(req)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
          console.log("alid 01", req);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  //   var url =
  //     "https://newsapi.org/v2/top-headlines?" +
  //     "country=us&" +
  //     "apiKey=b99c0da026fc4d09a37683fdb3c0f15b";
  //   var req = new Request(url);
  //   console.log(req);
  //   fetch(req).then(function(response) {
  //     console.log(response.json());
  //   });
  render() {
    const { error, isLoaded, items } = this.state;
    console.log("alid033", items);
    console.log("alllltltttt", this.state.items[0]);
    console.log("aman", items.author);
    const alid = this.state.items.map(item => (
      // <li key={Math.random()}>{item.author}</li>
      <div className="News-block">
        <div>
          <img className="img-size" src={item.urlToImage} alt="placeholder" />
        </div>
        <div className="News-text">
          <h4 className="News-title">{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
      // {console.log(item, "yo broo oo")}
      // {/* <p>{item.url}</p>
      // <p>{item.description}</p> */}
    ));
    return <div className="News-list">{alid}</div>;
  }
}

export default NewsList;
