import {BrowserRouter,Route, Switch} from "react-router-dom";
import Container from '@material-ui/core/Container';
import Header from "./Components/Header";
import HomePage from './Pages/HomePage';
import FavoriteGifs from "./Pages/FavoriteGifs";
function App() {
  return (<Container>
        <BrowserRouter>
          <Header />
          <Switch>
          <Route exact path="/favorite">
              <FavoriteGifs />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </BrowserRouter>
        </Container>
  );
}
export default App;