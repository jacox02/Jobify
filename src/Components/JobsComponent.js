import React, { Component } from "react";
import { Card, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../style/styleJob.css";
import {
  faHome,
  faBriefcase,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/StylePagination.css";

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
        this.renderJobs(data);
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
            <Card.Header className="titulo">
              <FontAwesomeIcon icon={faBriefcase} /> {work.Work_Title}
            </Card.Header>
            <Card.Body>
              <Card.Title>{work.Company_Name}</Card.Title>
              <Card.Text>
                <FontAwesomeIcon icon={faMapMarkedAlt} /> {work.Location}
              </Card.Text>
              <Button
                className="VerMas"
                variant="outline-secondary"
                href={`/Works/${work.Work_ID}/Details`}
              >
                Ver mas
              </Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>Category: {this.state.currentCategory}</div>
        <div className="pt-2">
          <div className="padre">
            <Row>
              <Col>
                <Form inline className="Busqueda">
                  <FormControl
                    className="BarSearch"
                    type="text"
                    placeholder="Search"
                  />
                  <Button variant="outline-secondary">Search</Button>
                </Form>
              </Col>
              <Col>
                <div className="categoria">
                  <select name="Categoria" className="form-control">
                    {this.state.categories.map((cat) => (
                      <option
                        key={cat.Category_ID}
                        value={cat.Category_Name}
                        onClick={() => {
                          this.setState({ currentCategory: cat.Category_ID });
                          this.getWorks();
                        }}
                      >
                        {cat.Category_Name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>
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
        </div>
      </div>
    );
  }
}
