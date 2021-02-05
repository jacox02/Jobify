import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
require("dotenv").config();

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={client}
    redirectUri={window.location.origin}
  >
    <App domain={domain} client={client} />
  </Auth0Provider>,
  document.getElementById("root")
);
