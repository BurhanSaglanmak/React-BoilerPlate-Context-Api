import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { MyProvider } from "./components/context-api/MyContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./fonts/fonts.css"
import Home from "./components/Home/Home";
import NotFound from "./components/404Page/NotFound";
import "./components/scss/main.css"
import FormPage from "./components/formPage/FormPage";

function App() {
  function BasicLayout() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />

      </>
    )
  }

  return (
    <MyProvider >
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<BasicLayout />}>
            <Route path="/" element={< Home />} />
            <Route path="/form-page" element={< FormPage />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;