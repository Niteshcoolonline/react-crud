import NavBar from './components/NavBar'
import CodeForMonika from './components/CodeForMonika'
import AddUser from './components/AddUser'
import AllUser from './components/AllUsers'
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import NotFound from './components/NotFound';
import EditUser from './components/EditUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/' component={CodeForMonika}/>
            <Route exact path='/add' component={AddUser}/>
            <Route exact path='/all' component={AllUser}/>
            <Route exact path="/edit/:id" component={EditUser} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
