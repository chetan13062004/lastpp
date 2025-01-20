import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Skills from './Skills'
import Works from './Work'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />

      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Works Section */}
      <Works />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  )
}
