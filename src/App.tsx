import Hero from './components/Hero'
import Project from './components/Project'

function App() {
  return (
    <>
      <Hero
        intro="Hi, I'm Sean!"
        description="I'm a software engineer building AI systems."
        buttonText="View my work"
      />
      <Project 
        projectTitle="Fake Project 1"
        projectSubtitle="The subtitle for the project..."
        projectDescription="This is the description for Fake Project 1."
      />
    </>
  )
}

export default App