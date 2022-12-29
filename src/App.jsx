import "./App.css";
import FacebookLogin from "react-facebook-login";

function App() {
  const responseFacebook = async (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <h1>React fb login</h1>
      <div className="card">
        <FacebookLogin
          appId="1127752897940428"
          autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      </div>
    </div>
  );
}

export default App;
