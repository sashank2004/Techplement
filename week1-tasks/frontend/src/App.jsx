import './App.css'
import Appbar from './Appbar'
import QuoteOfDay from './QuoteOfDay'
import SearchByAuthor from './SearchByAuthor'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
function App() {
  return (
  <div>
    <Router>
      <Appbar/>
      <Routes>
      <Route path={"/"} element={<QuoteOfDay/>} />
      <Route path={"/author"} element={<SearchByAuthor/>} />      
      </Routes>
    </Router>   
  </div>
  )
}
export default App
