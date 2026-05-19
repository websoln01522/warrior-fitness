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
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Zap,
  Music,
  Dumbbell,
  Wind,
  Apple,
  Video,
  Flower2,
  Users2
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
    { name: "Programs", href: "#programs" },
    { name: "Schedule", href: "#schedule" },
    { name: "Success Stories", href: "#transformations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-rose-100 py-3 shadow-sm" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center shadow-lg shadow-rose-200">
            <Zap className="text-white w-6 h-6 fill-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl leading-none text-brand-black">
              FITJIYO
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-pink leading-none mt-1">
              FITNESS
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold transition-colors ${isScrolled ? "text-slate-600" : "text-white/90 hover:text-white"}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-premium btn-primary py-2 px-6">
            Book Free Trial
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isScrolled ? "text-brand-black" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            className="md:hidden bg-white border-b border-rose-100 overflow-hidden shadow-xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-700 hover:text-brand-pink"
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-premium btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Book Free Trial
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
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2000&auto=format&fit=crop" 
          alt="Confident woman working out" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/50 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="section-subtitle !text-brand-pink">Female Exclusive Fitness Studio</span>
          <h1 className="text-5xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6">
            Strong Women. <br /><span className="text-brand-pink text-glow-pink">Stronger Together.</span>
          </h1>
          <p className="text-lg text-white/80 mb-10 max-w-lg leading-relaxed">
            Transform your fitness journey in a safe & empowering space designed exclusively for women. Join Vadodara's premium fitness community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contact" className="btn-premium btn-primary text-base px-10 py-5">
              Book Free Trial <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#about" className="btn-premium bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 px-10 py-5">
              Join Fitjiyo Today
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-200">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                    alt="Member" 
                    className="w-full h-full rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />)}
                <span className="font-bold text-white ml-1">4.9</span>
              </div>
              <p className="text-xs text-white/60 uppercase tracking-widest font-semibold">87+ Google Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>

      <WhatsAppButton />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           className="relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-soft-pink rounded-full -z-10" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop" 
              alt="Women workout together" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute bottom-10 -right-8 glass-card p-8 rounded-3xl shadow-2xl">
             <div className="text-center">
               <span className="block text-4xl font-extrabold italic text-brand-pink">100%</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Female Safe Space</span>
             </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="section-subtitle">Since Day One</span>
          <h2 className="section-title">A Community That <span className="text-brand-pink">Empowers Your Journey</span></h2>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Fitjiyo Fitness isn't just a gym; it's a supportive sanctuary where women build confidence and strength. We provide a judgment-free environment designed to help you reach your goals while feeling safe and celebrated.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: "Safe Environment", desc: "100% Female-only studio space." },
              { title: "Expert Coaching", desc: "Supportive trainers who care." },
              { title: "Body Positivity", desc: "Focus on wellness and strength." },
              { title: "Energetic Vibe", desc: "Every session is a celebration." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-rose-100 text-brand-pink rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <h4 className="font-bold text-brand-black">{item.title}</h4>
                </div>
                <p className="text-sm text-slate-500 ml-7">{item.desc}</p>
              </div>
            ))}
          </div>
          <a href="#programs" className="btn-premium btn-primary">
            Explore Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    { icon: <Zap className="w-8 h-8" />, title: "HIIT Training", desc: "High-intensity intervals for maximum fat burn and endurance." },
    { icon: <Music className="w-8 h-8" />, title: "Zumba Classes", desc: "Dance your way to fitness with high-energy Latin rhythms." },
    { icon: <Flower2 className="w-8 h-8" />, title: "Yoga Sessions", desc: "Find balance and flexibility with our guided yoga flows." },
    { icon: <Dumbbell className="w-8 h-8" />, title: "Weight Training", desc: "Build functional strength with female-focused lifting plans." },
    { icon: <Users2 className="w-8 h-8" />, title: "Dance Fitness", desc: "Fun, upbeat choreography to keep you moving and smiling." },
    { icon: <Zap className="w-8 h-8" />, title: "Power Garba", desc: "A unique fusion of fitness and tradition for full-body tone." },
    { icon: <Wind className="w-8 h-8" />, title: "Pilates", desc: "Core-strengthening movements for a lean and balanced physique." },
    { icon: <Users className="w-8 h-8" />, title: "Personal Training", desc: "1-on-1 attention tailored to your specific fitness goals." },
    { icon: <Apple className="w-8 h-8" />, title: "Nutrition Coaching", desc: "Expert guidance for sustainable healthy eating habits." },
    { icon: <Video className="w-8 h-8" />, title: "Virtual Classes", desc: "Join our community from the comfort of your own home." }
  ];

  return (
    <section id="programs" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Our Expertise</span>
          <h2 className="section-title">Premium <span className="text-brand-pink">Fitness Programs</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Diverse classes and specialized training designed to keep you motivated and seeing results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-rose-50 group hover:shadow-xl hover:shadow-rose-100/50 transition-all text-center"
            >
              <div className="w-16 h-16 bg-rose-50 text-brand-pink rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-brand-pink group-hover:text-white transition-colors">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-black mb-3">{p.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                {p.desc}
              </p>
              <button className="text-brand-pink font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 mx-auto group-hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Heart className="w-6 h-6" />, title: "Safe & Private", desc: "Fully exclusive female environment." },
    { icon: <Users2 className="w-6 h-6" />, title: "Fun Community", desc: "Make supportive friends for life." },
    { icon: <Award className="w-6 h-6" />, title: "Pro Equipment", desc: "State-of-the-art modern gym tools." },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Timing", desc: "Batches that fit your busy schedule." }
  ];

  return (
    <section id="why-us" className="py-24 px-6 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-pink/5 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="section-subtitle !text-brand-pink">The Difference</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Why Choose <br /><span className="text-brand-pink">Fitjiyo Fitness</span></h2>
          <p className="text-slate-400 mb-12 text-lg">
            We focus on more than just physical changes. We build confidence, strength, and a positive mindset within a thriving community of women.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {reasons.map((r, i) => (
              <div key={i} className="space-y-3">
                <div className="w-12 h-12 bg-brand-pink/20 text-brand-pink rounded-xl flex items-center justify-center">
                  {r.icon}
                </div>
                <h4 className="font-bold text-lg">{r.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1574680077505-ef7da635eaa3?q=80&w=1000&auto=format&fit=crop" 
              alt="Community workout" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-pink/10 mix-blend-overlay" />
          </div>
          <div className="absolute -bottom-6 lg:-bottom-12 -left-6 lg:-left-12">
             <div className="bg-brand-pink p-8 py-10 rounded-[2rem] shadow-2xl">
                <div className="flex items-center gap-4 text-white">
                   <div className="text-5xl font-black italic">4.9/5</div>
                   <div className="text-[10px] uppercase font-bold tracking-widest leading-tight">Google Store <br />Satisfaction</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Schedule = () => {
  const sessions = [
    { time: "06:00 AM - 10:00 AM", title: "Morning Energy", days: "Mon - Sat", type: "Multiple Classes" },
    { time: "11:00 AM - 01:00 PM", title: "Ladies Special", days: "Mon - Fri", type: "Yoga & Pilates" },
    { time: "04:00 PM - 08:30 PM", title: "Evening Power", days: "Mon - Sat", type: "HIIT & Zumba" },
    { time: "08:00 AM - 12:00 PM", title: "Weekend Blast", days: "Sun", type: "Special Workshops" }
  ];

  return (
    <section id="schedule" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Timetables</span>
          <h2 className="section-title">Find Your <span className="text-brand-pink">Perfect Slot</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-rose-50/50 border border-rose-100 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-white text-brand-pink rounded-full flex items-center justify-center shadow-sm mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-extrabold text-brand-black mb-1">{s.title}</h4>
              <p className="text-brand-pink font-bold text-sm mb-4">{s.time}</p>
              <div className="mt-auto pt-6 border-t border-rose-100 w-full">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{s.days}</p>
                <p className="text-[10px] text-slate-400 font-medium">{s.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformations = () => {
  const stories = [
    { label: "Strength", value: "Muscle Tone", time: "3 Months", image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=600&auto=format&fit=crop" },
    { label: "Wellness", value: "Weight Loss", time: "5 Months", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop" },
    { label: "Endurance", value: "Stamina", time: "4 Months", image: "https://images.unsplash.com/photo-1549576490-b0b4831da60a?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <section id="transformations" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Real Results</span>
          <h2 className="section-title">Empowerment <span className="text-brand-pink">Stories</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-xl aspect-[4/5]"
            >
              <img 
                src={s.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Transformation"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-pink mb-2 block">{s.label}</span>
                <h3 className="text-3xl font-black italic">{s.value}</h3>
                <p className="text-sm font-medium text-white/70 mt-2">Achieved in {s.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: "Sunita M.", text: "Initially, I was intimidated by the gym, but Fitjiyo changed that. It’s more than just a workout; it’s where I found my confidence again.", stars: 5 },
    { name: "Riya Patel", text: "The personal attention here is unmatched. It feels like a boutique experience where every trainer knows your name and your goals.", stars: 5 },
    { name: "Karishma G.", text: "I love that I can just be myself here. No judgment, just pure energy and a community of incredible women pushing each other.", stars: 5 }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our <span className="text-brand-pink">Members Feel</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass-card p-10 rounded-[2.5rem] relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-pink group-hover:w-full group-hover:opacity-5 transition-all duration-500" />
              <div className="flex gap-1 mb-6">
                 {[...Array(r.stars)].map((_, j) => <Star key={j} className="w-3 h-3 text-orange-400 fill-orange-400" />)}
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed text-lg">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 text-brand-pink flex items-center justify-center font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <div>
                   <h5 className="font-bold text-brand-black">{r.name}</h5>
                   <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Happy Member</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1518611012118-2969c63b002f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596715949111-0fa36d140645?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-subtitle">Life at Fitjiyo</span>
          <h2 className="section-title">The <span className="text-brand-pink">Studio</span> Gallery</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="aspect-square rounded-3xl overflow-hidden shadow-lg border border-rose-100"
            >
              <img 
                src={img} 
                alt="Studio activity" 
                className="w-full h-full object-cover transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
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
            <span className="section-subtitle">Contact Us</span>
            <h2 className="section-title">Start Your <span className="text-brand-pink">Transformation</span></h2>
            <p className="text-slate-500 mb-10 text-lg">Claim your free trial session today. Our team will reach out to you within 30 minutes to confirm your slot.</p>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-black uppercase tracking-widest">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-pink outline-none transition-all placeholder:text-slate-300" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-black uppercase tracking-widest">Phone Number</label>
                <input type="tel" placeholder="+91" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-pink outline-none transition-all placeholder:text-slate-300" />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-black uppercase tracking-widest">Interest</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-pink outline-none transition-all appearance-none">
                    <option>Free Trial Class</option>
                    <option>Zumba Classes</option>
                    <option>Weight Training</option>
                    <option>HIIT Sessions</option>
                    <option>Yoga Sessions</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-black uppercase tracking-widest">Preffered Time</label>
                  <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:border-brand-pink outline-none transition-all appearance-none">
                    <option>Morning Batches</option>
                    <option>Ladies Noon Batch</option>
                    <option>Evening Batches</option>
                  </select>
                </div>
              </div>
              <button className="btn-premium btn-primary w-full py-5 text-base rounded-[1.5rem]">
                Claim Free Trial Now
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="flex-1 bg-slate-50 rounded-[3rem] p-8 border border-rose-100 overflow-hidden relative min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.669!2d73.190!3d22.330!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf46c2f9d5ef%3A0xe543df65d836269b!2sKarelibagh%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1716100000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                className="absolute inset-0 grayscale contrast-125 opacity-70"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
               <div className="glass-card p-8 rounded-[2rem]">
                  <div className="w-10 h-10 bg-rose-50 text-brand-pink rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-brand-black uppercase text-[10px] tracking-widest mb-2">Our Location</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Sardar Chatralay, Patel Marg, Opp. Krishna Beauty Clinic, Karelibagh, Vadodara</p>
               </div>
               <div className="glass-card p-8 rounded-[2rem]">
                  <div className="w-10 h-10 bg-rose-50 text-brand-pink rounded-xl flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h4 className="font-extrabold text-brand-black uppercase text-[10px] tracking-widest mb-2">Contact</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-bold">+91 91060 21677</p>
                  <p className="text-xs text-slate-400 mt-1">info@fitjiyo.com</p>
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
      href="https://wa.me/919106021677"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    >
      <MessageCircle className="w-8 h-8 fill-white/20" />
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-soft-pink">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
              <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center">
                <Zap className="text-white w-6 h-6 fill-white/20" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-2xl leading-none text-brand-black">
                  FITJIYO
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-brand-pink mt-1">
                  FITNESS
                </span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Vadodara's most loved female-exclusive fitness studio. Empowering women through science-backed training and community spirit.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white border border-rose-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-pink hover:border-brand-pink transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
             <h5 className="font-extrabold text-brand-black mb-6 uppercase text-xs tracking-widest text-center md:text-left">Working Hours</h5>
             <ul className="space-y-4 text-sm text-slate-500 font-medium text-center md:text-left">
               <li className="flex gap-3 justify-center md:justify-start"><Clock className="w-4 h-4 text-brand-pink shrink-0" /> Mon - Sat: 06:00 AM - 08:30 PM</li>
               <li className="flex gap-3 justify-center md:justify-start"><Clock className="w-4 h-4 text-brand-pink shrink-0" /> Sun: Morning Special Batches</li>
               <li className="flex gap-3 justify-center md:justify-start"><MapPin className="w-4 h-4 text-brand-pink shrink-0" /> Karelibagh, Vadodara</li>
             </ul>
          </div>

          <div>
             <h5 className="font-extrabold text-brand-black mb-6 uppercase text-xs tracking-widest text-center md:text-left">Programs</h5>
             <ul className="grid grid-cols-2 gap-4 text-sm text-slate-500 font-medium text-center md:text-left">
               <li><a href="#" className="hover:text-brand-pink">HIIT Class</a></li>
               <li><a href="#" className="hover:text-brand-pink">Zumba</a></li>
               <li><a href="#" className="hover:text-brand-pink">Yoga</a></li>
               <li><a href="#" className="hover:text-brand-pink">Pilates</a></li>
               <li><a href="#" className="hover:text-brand-pink">Weight Loss</a></li>
               <li><a href="#" className="hover:text-brand-pink">Garba Gym</a></li>
             </ul>
          </div>

          <div>
            <h5 className="font-extrabold text-brand-black mb-6 uppercase text-xs tracking-widest text-center md:text-left">Our Philosophy</h5>
            <div className="bg-white p-8 rounded-[2rem] border border-rose-100 relative">
               <div className="absolute -top-3 left-8 text-6xl text-rose-100 font-serif leading-none italic select-none">“</div>
               <p className="text-xs text-slate-500 italic leading-loose relative z-10 text-center md:text-left uppercase tracking-wider font-bold">
                 "WE BELIEVE THAT WHEN A WOMAN UNLOCKS HER STRENGTH, SHE TRANSFORMS NOT JUST HER BODY, BUT HER ENTIRE WORLD."
               </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-rose-200/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Fitjiyo Fitness. Vadodara's Female-Only Studio.
          </p>
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Safe Space</span>
             </div>
             <div className="flex items-center gap-1 text-slate-400">
                <Award className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Top Rated</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="selection:bg-brand-pink selection:text-white bg-white">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      
      {/* Visual Stat Banner */}
      <section className="py-20 bg-brand-pink">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            <div>
               <div className="text-5xl font-black mb-1">4.9</div>
               <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-80">Google Rating</div>
            </div>
            <div>
               <div className="text-5xl font-black mb-1">87+</div>
               <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-80">Real Reviews</div>
            </div>
            <div>
               <div className="text-5xl font-black mb-1">100%</div>
               <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-80">Female Only</div>
            </div>
            <div>
               <div className="text-5xl font-black mb-1">500+</div>
               <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-80">Active Members</div>
            </div>
         </div>
      </section>

      <WhyChooseUs />
      <Schedule />
      <Transformations />
      
      <section className="py-24 px-6 bg-soft-pink">
         <div className="max-w-6xl mx-auto bg-brand-black rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10"
            >
               <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Ready to Start Your <br /><span className="text-brand-pink italic">Transformation?</span></h2>
               <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
                 Don't wait for tomorrow. Your safe, supportive, and energetic fitness community is waiting for you in Karelibagh.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#contact" className="btn-premium btn-primary py-5 px-12 text-base shadow-2xl shadow-rose-900/40">Claim Free Trial Session</a>
                  <a href="https://wa.me/919106021677" className="btn-premium bg-white text-brand-black hover:bg-slate-50 py-5 px-12 text-base">
                    Contact via WhatsApp
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
