import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import InteractiveExplainer from '@/components/InteractiveExplainer'
import SuccessStories from '@/components/SuccessStories'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import NewsFeed from '@/components/NewsFeed'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <InteractiveExplainer />
        <SuccessStories />
        <Process />
        <Testimonials />
        <NewsFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
