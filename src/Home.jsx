import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
function Home() {
  const [state, setState] = useState("");
  const responseFacebook = async (response) => {
    console.log(response);
    setState(JSON.stringify(response));
  };
  return (
    <div className="App">
      <h1>React fb login</h1>
      <div className="card">
        <FacebookLogin
          appId="1127752897940428"
          // autoLoad={true}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
        />
      </div>
      <pre>{state}</pre>
    </div>
  );
}

export default Home;
