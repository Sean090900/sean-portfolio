// import Test from './components/Test'
import Hero from './components/Hero'
import './App.css'

function App() {
  // return (<Test />)
  return (
    <Hero
      imageURL="/src/assets/HeroBackground.png"
      title="Sean Dickson"
      subtitle="Software & AI Development Portfolio"
      description="I'm a software engineer with a focus on AI/ML, data pipelines, and scientific tooling. This repository showcases a selection of personal and professional projects that demonstrate how I approach real-world problems — from bioinformatics workflows to classical algorithms."
    />
  )
}

export default App