
import Navbar from './components/Navbar'
import Num from './Sections/Num'
import Header from './Sections/Header'
import Services from './pages/Services'
import Trainers from './pages/Trainers'
import Facilities from './pages/Facilities'
import Join from "./components/Join"
import Footer from './components/Footer'
import Testimonials from './pages/Testimonials'
import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Supplement from './pages/Supplement'
import ScrollToTop from './components/ScrollToTop'
import JoinUs from './pages/JoinUs'
import ServicesDetail from './pages/ServicesDetail'
import TrainersPage from './pages/TrainersPage'
import WorkoutGuide from './Exercises/WorkoutGuide'
import Beginner from './Exercises/Beginner'
import Intermediate from './Exercises/Intermediate'
import Advance from './Exercises/Advance'
import ChestBeginner from './Beginner/ChestBeginner'
const App = () => {
  return (
   <>
   <div className="bg-[#070915] overflow-hidden">
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/ServicesDetail" element={<ServicesDetail />} />
      <Route path="/trainers" element={<Trainers />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/join" element={<Join />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/Supplement" element={<Supplement />} />
      <Route path="/JoinUs" element={<JoinUs />} />
      <Route path="TrainersPage" element={<TrainersPage />} />
      <Route path="/WorkoutGuide" element={<WorkoutGuide />} />
      <Route path="/WorkoutGuide/Beginner" element={<Beginner />} />
      <Route path="/WorkoutGuide/Intermediate" element={<Intermediate/>} />
      <Route path="/WorkoutGuide/Advance" element={<Advance />} />
      <Route path="/WorkoutGuide/Beginner/Chest" element={<ChestBeginner />} />
    </Routes>
    
   </div>
  
   </>
  )
}

export default App