
import './App.css'
import Navbar from './components/Navbar';
import SignupForm from './components/Signup'
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tweets from './components/Tweets';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<SignupForm />} />
          <Route path='/tweet' element={<Tweets />}></Route>
          <Route path="*" element={<Error />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
