import "./style/index.scss";

// eslint-disable-next-line no-restricted-globals
const id = location.pathname.split("/")[2];
const url = `http://localhost:8080/users/${id}`;
