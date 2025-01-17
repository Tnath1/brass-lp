
import AccordionItem from '../components/AccordionItem'
import Busineses from '../components/Busineses'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Integration from '../components/Integration'
import Nav from '../components/Nav'
import Resources from '../components/Resources'
import Stack from '../components/Stack'
import Team from '../components/Team'

const Home = () => {
  return (
    <div>
    <Nav/>
    <Hero/>
    <Stack/>
    <Features/>
    <Busineses/>
    <Integration/>
    <Team/>
    <Resources/>
    <AccordionItem/>
    </div>
  )
}

export default Home