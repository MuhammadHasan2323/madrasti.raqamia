import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      <ProgressBar />
      <Navbar />
      <Hero />
      <WhyUs />
      <SocialProof />
      <HowItWorks />
      <About />
      <Services />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
