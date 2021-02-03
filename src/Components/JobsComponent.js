import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ReactPaginate from 'react-paginate'

const axios = require("axios");
export default class JobsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      categories: [],
      wcategory: [],
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 10,
      currentPage: 0
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getWorks() {
    axios
      .get("http://localhost:3050/Works/List")
      .then((response) => {
        this.setState({ works: response.data })
        const data = response.data
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            orgtableData :response.data,
            works:slice
        })
        
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }

  getCategoties(){
    axios
      .get("http://localhost:3050/Works/Categories")
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
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
  works:slice
})

}


  sortJobs() {}
  renderJobs() {
    return this.state.works.map((work) => {
      return (
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
      );
    });
  }

  componentDidMount() {
    this.getWorks();
    this.getCategoties()
  }
  render() {
    return (
      <div>
         <select name="Categoria" className="form-control form-control-sm" >

          {this.state.categories.map(e => (
           <option key={e.Category_ID} value={e.Category_Name}>{e.Category_Name}</option> ))}
          </select>

        <div>{this.renderJobs()}</div>
        
        <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
      </div>
    );
  }
}
