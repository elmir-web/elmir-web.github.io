import "./App.scss";

import LandingOne from "./Landing-One/Landing-One";
import LandingTwo from "./Landing-Two/Landing-Two";
import LandingThree from "./Landing-Three/Landing-Three";
import LandingFour from "./Landing-Four/Landing-Four";

// let elementTemp;
// let test = 10;

function App() {
  // if (test === 10) {
  //   elementTemp = <LandingTwo />;
  // }

  return (
    <div className="App">
      <LandingOne />
      <LandingTwo />
      <LandingThree />
      <LandingFour />
      {/* {elementTemp} */}
    </div>
  );
}

export default App;
