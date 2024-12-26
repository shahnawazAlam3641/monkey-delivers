import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={appStore}>
      <div className=" overflow-x-hidden overflow-y-auto ">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
