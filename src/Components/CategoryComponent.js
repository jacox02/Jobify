import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/styleWorkDetail.css";

const axios = require("axios");
export default class CategoriesComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      Works: [],
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  getWorkDetails() {
    axios
      .get(`http://localhost:3050/Works/${this.props.match.params.id}/List`)
      .then((response) => {
        this.setState({ Works: response.data })
        const data = response.data
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            orgtableData :response.data,
            Works:slice
        })
      })
      .catch((err) => {
        return err;
      });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadMoreData()
    });

};
  loadMoreData() {
const data = this.state.orgtableData;

const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
this.setState({
  pageCount: Math.ceil(data.length / this.state.perPage),
  Works:slice
})

}
  componentDidMount() {
    this.getWorkDetails();
    console.log(this.props.match.params.id);
  }
  renderCat() {
    return this.state.Works.map((work) => {
        return (
            <div> Categoria: {work.Category_Name}
          <div key={work.Work_ID}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{work.Work_Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {work.Company_Name}
                </Card.Subtitle>
                <Card.Text>{work.Location}</Card.Text>
                <Card.Link>
                  <Card.Link href={`/Works/${work.Work_ID}/Details`}>
                    Ver mas
                  </Card.Link>
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          
          </div>
        );
      });
      
  }
  render(){
      return <div>
          <div>
            {this.renderCat()}
          </div>
          <Link className="btn btn-light btn-lg btn-block" to={`/Works/${this.props.match.params.id}/All`}>
              All Jobs
          </Link>
      </div>
  }
}
