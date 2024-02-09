
//creating using document api
// const h1 = document.createElement("h1");
// h1.innerText= "Hello DOM!";
// const bold = document.createElement("b");
// bold.innerText = "Hi this is bold text";

// const container = document.getElementById("container");
// container.append(h1);
// container.append(bold);


//creating element using react api
//At the intial development stages of react people used to 
//like this using cdn's import that code and performing like this

console.log(React);
const bold = React.createElement("b", { className: "bold1"},"This is bold");
const breakk = React.createElement("br",null);
const span = React.createElement("span",{ className:"span1"},"Span1");
const parent = React.createElement("div", {id:"test"},bold,breakk, span)

//To show it on webpage we use React-dom method render

ReactDOM.render(parent,document.getElementById("container"));

//Now in modern days we are using CRA template (create react app)
