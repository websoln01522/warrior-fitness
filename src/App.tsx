import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Clock, 
  MapPin, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  Award, 
  Users, 
  ChevronRight, 
  Menu, 
  X,
  Stethoscope,
  Sparkles,
  Baby,
  Smile,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg shadow-sky-200">
            <Heart className="text-white w-6 h-6 fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl leading-none text-brand-navy">
              Affection
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-blue leading-none mt-1">
              Dental Care
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-slate-600 hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-premium btn-primary py-2 px-6">
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-navy" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-brand-blue"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-premium btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-100/50 -skew-x-12 translate-x-1/4 -z-10" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle">Premium Oral Healthcare</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-navy leading-[1.1] mb-6">
            Your Smile Deserves <span className="text-brand-blue">Expert Care</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Experience advanced dental treatments with a gentle touch. At Affection Dental Care, we combine technology with comfort for your perfect smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-premium btn-primary">
              Book Appointment <Calendar className="w-4 h-4 ml-1" />
            </a>
            <a href="tel:+919687056003" className="btn-premium btn-secondary">
              <Phone className="w-4 h-4 mr-1 text-brand-blue" /> +91 96870 56003
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                    alt="Patient" 
                    className="w-full h-full rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />)}
                <span className="font-bold text-brand-navy ml-1">4.8</span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">1,000+ Happy Patients</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-200/30 rounded-full blur-3xl -z-10" />
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-100 border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop" 
              alt="Dental Care" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-brand-navy">Safety Guaranteed</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">ISO Certified Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="relative"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-50 rounded-full -z-10" />
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop" 
              alt="Clinic" 
              className="rounded-2xl shadow-xl mt-8"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" 
              alt="Treatment" 
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white p-6 rounded-2xl shadow-xl shadow-sky-200">
             <div className="text-center">
               <span className="block text-3xl font-extrabold italic">10+</span>
               <span className="text-[10px] uppercase font-bold tracking-widest">Years Exp.</span>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="section-subtitle">Since 2014</span>
          <h2 className="section-title">Compassionate Dental Care <span className="text-brand-blue">For Every Family</span></h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            At Affection Dental Care, we believe everyone deserves a healthy, confident smile. Our clinic is designed to provide a calm, anxiety-free environment where patients of all ages can receive professional oral healthcare.
          </p>
          <div className="space-y-4 mb-10">
            {[
              "Patient-first personalized care",
              "Advanced sterilization and hygiene protocols",
              "Experienced and gentle dental professionals",
              "Affordable treatment with transparent pricing"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-sky-100 text-brand-blue rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <a href="#services" className="btn-premium btn-primary">
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Teeth Cleaning",
      desc: "Comprehensive prophylaxis to remove plaque, tartar, and surface stains."
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Root Canal",
      desc: "Painless laser-assisted root canal treatments to save your natural teeth."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Dental Implants",
      desc: "Permanent and durable tooth replacement solutions with a natural look."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Braces & Aligners",
      desc: "Orthodontic solutions including invisible aligners for a straighter smile."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Smile Makeover",
      desc: "Customized cosmetic plans to enhance the aesthetic appearance of your smile."
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Kids Dentistry",
      desc: "Shedding the fear of dentists with kid-friendly treatments and games."
    }
  ];

  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">Specialized <span className="text-brand-blue">Treatments</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">From routine checkups to complex cosmetic surgeries, we offer a full range of modern dental services.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 group hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-sky-50 text-brand-blue rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <button className="text-brand-blue font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    { icon: <Users />, title: "Experienced Doctors", desc: "Highly qualified dental surgeons with years of expertise." },
    { icon: <Sparkles />, title: "Modern Equipment", desc: "Equipped with the latest digital dental technologies." },
    { icon: <Heart />, title: "Comfortable Clinic", desc: "A soothing atmosphere designed for patient relaxation." },
    { icon: <ShieldCheck />, title: "Hygienic Environment", desc: "Strict 7-step sterilization following international standards." }
  ];

  return (
    <section id="why-choose-us" className="py-24 px-6 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="section-subtitle !text-brand-blue">Excellence</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Why Patients Trust <br /><span className="text-brand-blue">Affection Dental</span></h2>
          <p className="text-slate-400 mb-12 text-lg">
            We focus on outcome-based dentistry. Our goal isn't just to fix a problem, but to ensure long-term oral health and patient satisfaction.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((f, i) => (
              <div key={i} className="space-y-3">
                <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center">
                  {f.icon}
                </div>
                <h4 className="font-bold text-lg">{f.title}</h4>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="relative rounded-[40px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
              alt="Doctor Training" 
              className="w-full grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden xl:block">
             <div className="bg-white text-brand-navy p-10 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-4">
                   <div className="text-4xl font-extrabold text-brand-blue">98%</div>
                   <div className="text-[10px] uppercase font-bold tracking-widest leading-tight">Patient <br />Satisfaction</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Our Home</span>
          <h2 className="section-title">The <span className="text-brand-blue">Clinic</span> Experience</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={img} 
                alt="Clinic Interior" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Rahul Deshmukh", text: "Truly the best dental experience I've had. The doctor was very patient and explained everything clearly. Painless root canal!", stars: 5 },
    { name: "Sneha Patel", text: "Taking my kids to a dentist used to be a nightmare until we found Affection Dental. The staff is so friendly and good with children.", stars: 5 },
    { name: "Amit Shah", text: "Cleanest clinic in Fatehgunj. Very professional and the equipments are high tech. Highly recommend for implants.", stars: 5 }
  ];

  return (
    <section id="reviews" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />)}
          </div>
          <h2 className="section-title">What Our <span className="text-brand-blue">Patients Say</span></h2>
          <p className="text-slate-500">4.8 Average Rating • 1,000+ Reviews Across Platforms</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm relative"
            >
              <div className="absolute top-10 right-10 text-slate-100 text-6xl font-serif">“</div>
              <div className="flex gap-1 mb-6">
                 {[...Array(r.stars)].map((_, j) => <Star key={j} className="w-3 h-3 text-orange-400 fill-orange-400" />)}
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed relative z-10">"{r.text}"</p>
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-brand-blue flex items-center justify-center font-bold text-xs">
                  {r.name.charAt(0)}
                </div>
                <div>
                   <h5 className="font-bold text-sm text-brand-navy leading-none">{r.name}</h5>
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Schedule Your <span className="text-brand-blue">Smile Consult</span></h2>
            <p className="text-slate-500 mb-10">Fill out the form below and our team will get back to you within 2 business hours for confirmation.</p>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-blue outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-blue outline-none transition-all" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Treatment Type</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-blue outline-none transition-all appearance-none">
                    <option>Teeth Cleaning</option>
                    <option>Root Canal</option>
                    <option>Dental Implants</option>
                    <option>Checkup</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Preferred Date</label>
                  <input type="date" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-blue outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-navy uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-blue outline-none transition-all" />
              </div>
              <button className="btn-premium btn-primary w-full py-5">
                Request Appointment
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="h-[400px] rounded-[40px] overflow-hidden border-8 border-slate-50 shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.669!2d73.190!3d22.330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf46c2f9d5ef%3A0xe543df65d836269b!2sAffection%20Dental%20Care!5e0!3m2!1sen!2sin!4v1716100000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8">
               <div className="glass-card p-6 rounded-3xl">
                  <div className="w-10 h-10 bg-sky-50 text-brand-blue rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">Our Location</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">GF 21, Saffron Complex, Fategunj, Vadodara, 390008</p>
               </div>
               <div className="glass-card p-6 rounded-3xl">
                  <div className="w-10 h-10 bg-sky-50 text-brand-blue rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">Call Us</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">+91 96870 56003</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/919687056003"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center shadow-green-200"
    >
      <MessageCircle className="w-8 h-8 fill-white/20" />
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <Heart className="text-white w-5 h-5 fill-white/20" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg leading-none text-brand-navy">
                  Affection
                </span>
                <span className="text-[8px] uppercase font-bold tracking-[0.2em] text-brand-blue mt-1">
                  Dental Care
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Providing premium dentistry with a patient-first approach. Focused on hygiene, comfort, and results.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-blue hover:border-brand-blue transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h5 className="font-extrabold text-brand-navy mb-6 uppercase text-xs tracking-widest">Clinic Info</h5>
             <ul className="space-y-4 text-sm text-slate-500 font-medium">
               <li className="flex gap-3"><Clock className="w-4 h-4 text-brand-blue shrink-0" /> Mon - Sat: 9AM - 8PM</li>
               <li className="flex gap-3"><MapPin className="w-4 h-4 text-brand-blue shrink-0" /> Saffron Shopping Center, Fatehgunj</li>
               <li className="flex gap-3"><Phone className="w-4 h-4 text-brand-blue shrink-0" /> +91 96870 56003</li>
             </ul>
          </div>

          <div>
             <h5 className="font-extrabold text-brand-navy mb-6 uppercase text-xs tracking-widest">Quick Links</h5>
             <ul className="grid grid-cols-2 gap-4 text-sm text-slate-500 font-medium">
               <li><a href="#about" className="hover:text-brand-blue">About</a></li>
               <li><a href="#services" className="hover:text-brand-blue">Services</a></li>
               <li><a href="#gallery" className="hover:text-brand-blue">Gallery</a></li>
               <li><a href="#reviews" className="hover:text-brand-blue">Reviews</a></li>
               <li><a href="#contact" className="hover:text-brand-blue">Contact</a></li>
               <li><a href="#" className="hover:text-brand-blue">FAQ</a></li>
             </ul>
          </div>

          <div>
            <h5 className="font-extrabold text-brand-navy mb-6 uppercase text-xs tracking-widest">Our Mission</h5>
            <div className="bg-white p-6 rounded-3xl border border-slate-100">
               <p className="text-xs text-slate-500 italic leading-loose">
                 "To provide the highest standard of oral healthcare in a caring and empathetic manner, making dental visits something patients look forward to."
               </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Affection Dental Care. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 text-sky-600">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Hygienic Safe</span>
             </div>
             <div className="flex items-center gap-1 text-sky-600">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Certified</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative overflow-x-hidden selection:bg-brand-blue selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      
      {/* Banner Stats */}
      <section className="py-20 bg-brand-blue">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
            <div>
               <div className="text-4xl font-extrabold mb-2 underline decoration-white/20">4.8</div>
               <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Google Rating</div>
            </div>
            <div>
               <div className="text-4xl font-extrabold mb-2 underline decoration-white/20">10+</div>
               <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Years Exp.</div>
            </div>
            <div>
               <div className="text-4xl font-extrabold mb-2 underline decoration-white/20">24/7</div>
               <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Emergency Care</div>
            </div>
            <div>
               <div className="text-4xl font-extrabold mb-2 underline decoration-white/20">1k+</div>
               <div className="text-[10px] uppercase font-black tracking-widest opacity-80">Smiles Made</div>
            </div>
         </div>
      </section>

      <WhyChooseUs />
      <Gallery />
      <Reviews />

      {/* Floating Section CTA */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto bg-brand-blue rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-sky-200">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-[shimmer_5s_infinite_linear]" />
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="relative z-10"
           >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Ready For A <span className="underline decoration-white/30">Lighter Smile?</span></h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Join our patient family today. Book your consultation and experience the difference at Affection Dental Care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href="#contact" className="px-10 py-5 bg-white text-brand-blue font-extrabold rounded-full hover:scale-105 transition-all shadow-xl">Book Free Consultation</a>
                 <a href="https://wa.me/919687056003" className="px-10 py-5 bg-brand-navy text-white font-extrabold rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2">
                    WhatsApp Us <ArrowRight className="w-4 h-4 text-brand-blue" />
                 </a>
              </div>
           </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
      <WhatsAppButton />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}} />
    </div>
  );
}
