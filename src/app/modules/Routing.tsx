import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Gallery from './Gallery';
import Customers from './Customers';
import Testimonials from './Testimonials';
import Charity from './Charity';
import Services from './Services';

export default function Routing(){
    return (
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="services" Component={Services}></Route>
          <Route path="gallery" Component={Gallery}></Route>
          <Route path="customers" Component={Customers}></Route>
          <Route path="testimonials" Component={Testimonials}></Route>
          <Route path="charity" Component={Charity}></Route>
          <Route path="contact" Component={Contact}></Route>
        </Routes>
      </Router>
    );
}