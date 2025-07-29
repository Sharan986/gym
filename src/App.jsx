
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
import { HelmetProvider } from 'react-helmet-async'
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
import BackBeginner from './Beginner/BackBeginner'
import ShouldersBeginner from './Beginner/ShouldersBeginner'
import LegsBeginner from './Beginner/LegsBeginner'
import ArmsBeginner from './Beginner/ArmsBeginner'
import ChestIntermediate from './Intermediate/ChestIntermediate'
import BackIntermediate from './Intermediate/BackIntermediate'
import ShouldersIntermediate from './Intermediate/ShouldersIntermediate'
import ArmsIntermediate from './Intermediate/ArmsIntermediate'
import LegsIntermediate from './Intermediate/LegsIntermediate'
import Membership from './pages/Membership'
import Protein from './Supplements/Protein'
import Muesli from './Supplements/Muesli'
import PreWorkout from './Supplements/PreWorkout'
import PeanutButter from './Supplements/PeanutButter'
import BCAA from './Supplements/BCAA'
import Vitamins from "./Supplements/Vitamins"
import Fishoil from './Supplements/Fishoil'
import Oats from './Supplements/Oats'
import WeightGainers from './Supplements/WeightGainer'
import Gallery from './Gallery/Gallery'
import One from './Gallery/One'
import Fitness from './Gallery/Fitness'
import Creatine from './Supplements/Creatine'
import GYM from './Gallery/GYM'
import Running from './Gallery/Running'
import Armsadvance from './Advance/Arms'
import ShouldersAdvanced from './Advance/Sholders'
import BackAdvanced from './Advance/Back'
import LegsAdvanced from './Advance/Legs'
import ChestAdvanced from './Advance/Chest'

const App = () => {
  return (
   <>
   <HelmetProvider>
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
      <Route path="/WorkoutGuide/Beginner/Back" element={<BackBeginner />} />
      <Route path="/WorkoutGuide/Beginner/Shoulders" element={<ShouldersBeginner />} />
      <Route path="/WorkoutGuide/Beginner/Legs" element={<LegsBeginner />} />
      <Route path="/WorkoutGuide/Beginner/Arms" element={<ArmsBeginner />} />
      <Route path="/WorkoutGuide/Intermediate/Chest" element={<ChestIntermediate />} />
      <Route path="/WorkoutGuide/Intermediate/Back" element={<BackIntermediate />} />
      <Route path="/WorkoutGuide/Intermediate/Shoulders" element={<ShouldersIntermediate />} /> 
      <Route path="/WorkoutGuide/Intermediate/Arms" element={<ArmsIntermediate />} />
      <Route path="/WorkoutGuide/Intermediate/Legs" element={<LegsIntermediate />} />
      <Route path="/WorkoutGuide/Advance/Chest" element={<ChestAdvanced />} />
      <Route path="/WorkoutGuide/Advance/Back" element={<BackAdvanced />} />
      <Route path="/WorkoutGuide/Advance/Shoulders" element={<ShouldersAdvanced />} />
      <Route path="/WorkoutGuide/Advance/Arms" element={<Armsadvance />} />
      <Route path="/WorkoutGuide/Advance/Legs" element={<LegsAdvanced />} />
      <Route path="/Membership" element={<Membership />} />
      <Route path="/Supplement/Protein" element={<Protein />} />
      <Route path="/Supplement/Preworkout" element={<PreWorkout />} />
      <Route path="/Supplement/PeanutButter" element={<PeanutButter />} />
      <Route path="/Supplement/Vitamins" element={<Vitamins/>} />
      <Route path="/Supplement/WeightGainer" element={<WeightGainers/>} />
      <Route path="/Supplement/Creatine" element={<Creatine />} />
      <Route path="/Supplement/BCAA" element={<BCAA />} />
      <Route path="/Supplement/Fishoil" element={<Fishoil />} />
      <Route path="/Supplement/Oats" element={<Oats />} />
      <Route path="/Supplement/Muesli" element={<Muesli />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/item/:Yoga" element={<One />} />
      <Route path="/item/:Fitness" element={<Fitness />} />
      <Route path="/item/:GYM" element={<GYM />} />
      <Route path="/item/:Running" element={<Running />} />

      
      
    </Routes>

    
   </div>
   </HelmetProvider>
   </>
  )
}

export default App
