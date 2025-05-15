import './App.css'
import AboutMeSection from './components/AboutMeSection'
import EducationSection from './components/EducationSection'
import HeroHeader from './components/HeroHeader'
import Navbar from './components/Navbar'
import ProjectList from './components/ProjectList'

function App() {

  return (
    <>
      <Navbar />
      <HeroHeader />
      <ProjectList />
      <EducationSection />
      <AboutMeSection />
    </>
  )
}

export default App
