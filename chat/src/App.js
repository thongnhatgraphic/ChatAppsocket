import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes"

function App() {

  const renderPage = (list) => {
    let xhtml = null;
    if ( list.length >= 0 ) {
      xhtml = list.map((page) => {
        return <Route key={page.name} {...page} />
      })
    };
    return xhtml;
  }


  
  return (
    <BrowserRouter>
      <Switch>
        {renderPage(routes)}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
