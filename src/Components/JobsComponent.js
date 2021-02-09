import React, { Component } from "react";
import { Card, Button, Form, FormControl } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../style/styleJob.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {fabrowser} from '@fortawesome/free-solid-svg-icons'

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
      currentCategory: 1,
      orgtableData: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getWorks() {
    axios
      .get(`http://localhost:3050/Works/${this.state.currentCategory}/List`)
      .then((response) => {
        this.setState({ works: response.data });
        const data = response.data;
        const slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: response.data,
          works: slice,
        });
      })
      .catch((error) => {
        console.log(`There was an error: ${error}`);
      });
  }
  getCategories() {
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
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };
  loadMoreData() {
    const data = this.state.orgtableData;
    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      works: slice,
    });
  }
  getCategoryJobs(categoryID) {
    console.log(`This is the ctegory obtained from the dropdown${categoryID}`);
    console.log(this.state.currentCategory);
    axios.get(`http://localhost:3050/Works/${categoryID}/List`).then((res) => {
      console.log(res);
    });
    this.renderJobs();
    console.log(this.state.works);
  }
  componentDidMount() {
    this.getWorks();
    this.getCategories();
    this.renderJobs();
  }
  renderJobs() {
    return this.state.works.map((work) => {
      return (
        <div key={work.Work_ID}>
          <Card className="Job">
     <Card.Header>{work.Work_Title}</Card.Header>
     <Card.Body>
     <Card.Title>{work.Company_Name}</Card.Title>
    <Card.Text>
      {work.Location}
      </Card.Text>
    <Button variant="primary" href={`/Works/${work.Work_ID}/Details`}>Ver mas</Button>
  </Card.Body>
</Card>
        </div>
      );
    });
  }

  render() {
    return (
      
      <div className="padre">
        <Form inline className="Busqueda">
      <FormControl type="text" placeholder="Search" />
      <Button variant="outline-primary">Search</Button>
    </Form>
        <div className="categoria">
          <select name="Categoria" className="form-control">
            {this.state.categories.map((cat) => (
              <option
                key={cat.Category_ID}
                value={cat.Category_Name}
                onClick={() => {
                  this.setState({ currentCategory: cat.Category_ID });
                  this.getWorks();
                  this.getCategoryJobs(cat.Category_ID);
                  this.renderJobs();
                }}
              >
                {cat.Category_Name}
              </option>
            ))}
          </select>
        </div>
        <div className="pt-2">{this.renderJobs()}</div>

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
          activeClassName={"active"}
        />


      </div>
    );
  }
}
