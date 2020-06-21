import "./style/index.scss";

const id = location.pathname.split("/")[2];
const url = `http://localhost:8080/users/${id}`;

function changeElementsContent(name, content) {
  const e = document.getElementsByClassName(name)[0];
  e.innerHTML = content;
}

function addChildElement(parent, type, content) {
  const parentElement = document.getElementsByClassName(parent)[0];
  const childElement = document.createElement(type);
  const childContent = document.createTextNode(content);
  childElement.appendChild(childContent);
  parentElement.appendChild(childElement);
  return childElement;
}

const getUserInformation = () => {
  const information = fetch(url, {
    method: "GET",
  }).then((response) => response.json());

  information.then((data) => {
    const { name, age, avatar, description } = data;

    const imageElement = document.getElementsByTagName("img")[0];
    imageElement.setAttribute("src", avatar);

    changeElementsContent("name", name);
    changeElementsContent("age", age);

    addChildElement("description", "h3", "ABOUT ME");
    addChildElement("description", "p", description);
  });
};
function constructItem(year, title, description) {
  const li = document.createElement("li");
  const index = document.createElement("span");
  const content = document.createElement("div");
  const contentTitle = document.createElement("h4");
  const contentDescription = document.createElement("p");
  index.innerHTML = year;
  contentTitle.innerHTML = title;
  contentDescription.innerHTML = description;
  li.appendChild(index);
  li.appendChild(content);
  content.appendChild(contentTitle);
  content.appendChild(contentDescription);
  return li;
}
const getUserEducation = () => {
  const educationInformation = fetch(`${url}/educations`, {
    method: "GET",
  }).then((response) => response.json());

  educationInformation.then((data) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of data) {
      const { year, title, description } = item;
      const li = constructItem(year, title, description);
      document
        .getElementsByClassName("education-information")[0]
        .appendChild(li);
    }
  });
};

getUserInformation();
getUserEducation();
