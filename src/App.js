import { Customers } from './pages/Customers/Customers'
import Add from './pages/Customers/Add/Add'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import { Reducer } from './redux/reducers/reducer'
const store = createStore(Reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Home />
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/addcustomer" element={<Add />} />
      </Routes>
    </Provider>
  )
}

export default App
