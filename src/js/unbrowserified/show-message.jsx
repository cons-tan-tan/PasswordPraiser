const checkPassword = require("zxcvbn");
const React = require("react");
const ReactDOM = require("react-dom/client");
const Button= require("@mui/material").Button;


const App = () => {
    return <div id="password-praiser-ui"
        style={{
            position: 'absolute',
            width: '0%',
            left: '0px',
            top: '0px',
            zIndex: 2147483550,
        }}>
        <Button variant="contained" color="primary" onClick={() => {
            let result = checkPassword("asasasfgg");
            alert(result.score);
        }}>test</Button>
    </div>
};

const passwordElements = document.querySelectorAll("input[type=password]");
const amount = passwordElements.length;
if (amount > 0) {

    let praiser = document.createElement("div");
    praiser.id = "password-praiser";
    document.body.appendChild(praiser);
    const root = ReactDOM.createRoot(praiser);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

    passwordElements.forEach((value, key, parent) => {
        value.addEventListener("focus", (event) => {
            event.target.value = "password";
            const clientRect = event.target.getBoundingClientRect();
            let praiser_ui = document.getElementById("password-praiser-ui");
            praiser_ui.style.left = clientRect.left + "px";
            praiser_ui.style.top = clientRect.top + "px";
        });
        value.addEventListener("blur", (event) => {
            event.target.value = "";
        });
    });
}
