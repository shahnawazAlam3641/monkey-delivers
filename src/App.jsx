import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/common/Header";
import appStore from "./utils/appStore";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Provider store={appStore}>
      <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-auto ">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </Provider>
  );
}

export default App;
