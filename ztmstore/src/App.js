import { Routes, Route } from 'react-router-dom'
import Home from "./Routes/home/Home";
import NavBar from "./Components/navbar/NavBar.jsx"
import Shop from "./Components/shop/Shop.jsx";
import SignIn from "./Routes/sign-in/SignIn.jsx"

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
   </Routes>
  );
}

export default App;

