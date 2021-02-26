import React, { Component } from "react";
import { Card, Button, Form, FormControl, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../style/styleJob.css";
import {
  faBriefcase,
  faMapMarkedAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      Description: "",
      UserInfo: {},
      searchParam: "",
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  getWorks() {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/Works/${this.state.currentCategory}/List`
      )
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
      .get(`${process.env.REACT_APP_API_URL}/Works/Categories`)
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
    if (this.state.works.length == 0) {
      return <h1>No hay ningun trabajo de esta categoria :c FIX TTHIS </h1>;
    } else {
      return this.state.works.map((work) => {
        return (
          <div key={work.Work_ID}>
            <Card className="Job  position-relative shadow p-3 mb-5 bg-body rounded">
              <Card.Header className="titulo">
                <FontAwesomeIcon icon={faBriefcase} /> {work.Work_Title}
              </Card.Header>
              <Card.Body>
                <Card.Title>{work.Company_Name}</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faMapMarkedAlt} /> {work.Location}
                </Card.Text>
                <Card.Text className="cortar">{work.Description}</Card.Text>
                <Button
                  className="VerMas"
                  variant="outline-secondary"
                  size="sm"
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
  }

  render() {
    return (
      <div>
        <div className="pt-2"></div>
        <div className="padre">
          <Row>
            <Col>
              <Form inline className="Busqueda">
                <FormControl
                  className="BarSearch"
                  type="text"
                  placeholder="React developer"
                  onChange={(e) => {
                    if (e.target.value.length == 1) {
                      axios
                        .get(`${process.env.REACT_APP_API_URL}/Works/1/List`)
                        .then((response) => {
                          this.setState({
                            works: response.data,
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    } else {
                      this.setState({
                        searchParam: e.target.value,
                      });
                    }
                  }}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    if (this.state.searchParam.length < 1) {
                      axios
                        .get(`${process.env.REACT_APP_API_URL}/Works/1/List`)
                        .then((response) => {
                          this.setState({
                            works: response.data,
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    } else {
                      axios
                        .get(
                          `${process.env.REACT_APP_API_URL}/Works/${this.state.searchParam}/jobList`
                        )
                        .then((response) => {
                          this.setState({
                            works: response.data,
                          });
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </Col>

            <Col>
              <div className="categoria">
                <select
                  name="Categoria"
                  className="form-control"
                  onChange={(e) => {
                    console.log(e.target.value);
                    axios
                      .get(
                        `${process.env.REACT_APP_API_URL}/Works/${e.target.value}/List`
                      )
                      .then((response) => {
                        this.setState({ works: response.data });
                      })
                      .catch((error) => {
                        console.log(error);
                      });
                  }}
                >
                  {this.state.categories.map((cat) => (
                    <option key={cat.Category_ID} value={cat.Category_ID}>
                      {cat.Category_Name}
                    </option>
                  ))}
                </select>
              </div>
            </Col>
          </Row>
          <div className="pt-2">{this.renderJobs()}</div>
          <ReactPaginate
            className="Paginate"
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
    );
  }
}
