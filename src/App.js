import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './components/Movies';
import NavBar from './components/common/NavBar';
import Customers from './components/Customer';
import Rentals from './components/Rental';
import NotFound from './components/NotFound';
import MovieForm from './components/MovieForm';
import LoginForm from './components/common/LoginForm';

function App() {
  return (
    <>
    <NavBar/>
    <main className="container">
      <Switch>
      <Route path="/movies/:id" component={MovieForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/customers" component={Customers}></Route>
      <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>
      <Redirect from="/" exact to="/movies"></Redirect>
      <Redirect to="/not-found"></Redirect>
      </Switch>
    </main>
    </>
  );
}

export default App;
