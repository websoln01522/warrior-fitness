import { motion, useScroll, useTransform } from "motion/react";
import { 
  Instagram, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  Dumbbell, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Menu,
  X,
  Facebook,
  Twitter,
  ChevronRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
    { name: "Features", href: "#features" },
    { name: "Memberships", href: "#membership" },
    { name: "Transformations", href: "#transformations" },
    { name: "Trainers", href: "#trainers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-matte-black/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-neon-red rounded-sm flex items-center justify-center rotate-45">
            <Dumbbell className="text-white w-6 h-6 -rotate-45" />
          </div>
          <span className="font-heading font-black text-2xl tracking-tighter uppercase italic">
            Warrior <span className="text-neon-red">Fitness</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-neon-red transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a href="#membership" className="btn-premium btn-primary py-2 px-6">
            Join Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-matte-black border-b border-white/10 py-10 px-6 flex flex-col items-center gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold hover:text-neon-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#membership" className="btn-premium btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
            Join Now
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={scrollRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
          alt="Warrior Athlete" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 text-center px-6 max-w-4xl"
      >
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block py-1 px-4 bg-neon-red/10 border border-neon-red/30 rounded-full text-neon-red text-xs font-bold tracking-[0.3em] uppercase mb-6"
        >
          Unleash Your Inner Power
        </motion.span>
        <h1 className="text-6xl md:text-8xl font-black uppercase italic leading-[0.9] mb-6">
          Train Like A <span className="text-neon-red neon-text-glow">Warrior</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light tracking-wide">
          Elite Equipment • Expert Trainers • Real Results. Vadodara's fast-growing premium fitness destination.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-premium btn-primary w-full sm:w-auto">
            Start Free Trial
          </a>
          <a href="#membership" className="btn-premium btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
            View Plans <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-neon-red/50 z-10" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-neon-red/50 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop" 
            alt="Gym Interior" 
            className="rounded-sm relative z-0 grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -left-10 bg-neon-red p-8 hidden md:block">
            <span className="block text-4xl font-black italic">5.0</span>
            <span className="text-xs uppercase tracking-tighter opacity-80">Google Rating</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8">
            The <span className="text-neon-red">Warrior</span> Fitness Culture
          </h2>
          <p className="text-lg text-white/70 mb-8 leading-relaxed font-light">
            Warrior Fitness is one of Vadodara’s fastest-growing premium gyms, known for its high-energy environment, modern equipment, and supportive trainers dedicated to real fitness transformations.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-neon-red w-5 h-5 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-sm uppercase">Energetic Vibe</h4>
                <p className="text-xs text-white/50">Motivating atmosphere for peak performance.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-neon-red w-5 h-5 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-sm uppercase">Expert Coaching</h4>
                <p className="text-xs text-white/50">Supportive trainers for every level.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-neon-red w-5 h-5 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-sm uppercase">Clean Safety</h4>
                <p className="text-xs text-white/50">Spacious, clean, and safe environment.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-neon-red w-5 h-5 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-sm uppercase">Community</h4>
                <p className="text-xs text-white/50">Join a family of fitness warriors.</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-3 text-neon-red font-bold uppercase tracking-widest text-sm hover:gap-5 transition-all">
            Learn More About Us <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Imported Equipment",
      desc: "Train on world-class, premium imported strength machines designed for bio-mechanical precision."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Functional Zone",
      desc: "Dedicated spacious area for cross-training, bodyweight drills, and functional movements."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Modern Cardio Zone",
      desc: "High-end fleet of treadmills and ellipticals with clean, spacious training environments."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Friendly Trainers",
      desc: "Our supportive and motivating certified trainers treat you like family while pushing your limits."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Personalized Support",
      desc: "Receive customized workout support and diet guidance tailored to your transformation goals."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Positive Atmosphere",
      desc: "Experience a high-energy, motivational fitness culture that keeps you coming back for more."
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Elite <span className="text-neon-red">Features</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Design for performance. Built for warriors. Experience Vadodara’s most modern training facility.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group transition-all"
            >
              <div className="text-neon-red mb-6 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold uppercase italic mb-3">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  const plans = [
    {
      name: "Starter Warrior",
      price: "1,999",
      features: ["Gym floor access", "Locker facility", "Standard assessment"],
      recommended: false
    },
    {
      name: "Pro Warrior",
      price: "3,499",
      features: ["Full gym access", "Strength + Cardio zones", "1 PT Session/mo", "Diet Plan"],
      recommended: true
    },
    {
      name: "Elite Transformation",
      price: "5,999",
      features: ["All access", "Priority PT guidance", "Advanced assessments", "Personalized Supplements Guide"],
      recommended: false
    }
  ];

  return (
    <section id="membership" className="py-24 px-6 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Choose Your <span className="text-neon-red">Vessel</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Transparent pricing for elite training. No hidden fees. Just results.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {plans.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative glass-card p-10 flex flex-col ${p.recommended ? "border-neon-red/50 py-16 bg-white/[0.07]" : ""}`}
            >
              {p.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-red text-white py-1 px-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-black uppercase italic mb-2 tracking-widest">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-bold text-neon-red">₹</span>
                <span className="text-5xl font-black leading-none">{p.price}</span>
                <span className="text-xs text-white/30 uppercase">/ Month</span>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-neon-red shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button className={`btn-premium transition-all ${p.recommended ? "btn-primary" : "btn-secondary"}`}>
                Begin Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformations = () => {
  return (
    <section id="transformations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Real <span className="text-neon-red">Results</span></h2>
            <p className="text-white/50 max-w-xl">Every story in this gallery represents sweat, discipline, and the Warrior mindset. You could be next.</p>
          </div>
          <button className="flex items-center gap-2 py-3 px-8 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/5">
            View All Stories <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop" 
              alt="Transformation One" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 h-[600px] grayscale group-hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <span className="text-neon-red text-xs font-bold uppercase tracking-widest mb-1 block">Weight Loss Expert</span>
              <h4 className="text-2xl font-black uppercase italic">Hardik's Journey</h4>
              <p className="text-white/60 text-sm">Lost 22kg in 6 Months</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-sm h-[300px]">
             <img 
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop" 
              alt="Transformation Two" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="relative group overflow-hidden rounded-sm h-[300px]">
             <img 
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" 
              alt="Transformation Three" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative group overflow-hidden rounded-sm h-[300px] lg:col-span-2">
             <img 
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop" 
              alt="Transformation Four" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Trainers = () => {
  const trainers = [
    {
      name: "Rahul Sharma",
      role: "Head Strength Coach",
      exp: "10+ Years",
      img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Priya V.",
      role: "Transformation Specialist",
      exp: "6+ Years",
      img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Amit Patel",
      role: "Functional Training",
      exp: "8+ Years",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="trainers" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Elite <span className="text-neon-red">Commanders</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Certified experts dedicated to push you beyond your limits. Real science, real sweat.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-sm"
            >
              <img 
                src={t.img} 
                alt={t.name} 
                className="w-full aspect-[4/5] object-cover group-hover:scale-110 transition-transform duration-700 grayscale contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 w-full p-8 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-neon-red text-xs font-bold uppercase tracking-widest block mb-1">{t.role}</span>
                <h4 className="text-2xl font-black uppercase italic mb-1">{t.name}</h4>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <Clock className="w-3 h-3" /> {t.exp} Professional Experience
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Vikram Mehta",
      text: "Great atmosphere and clean space. Best gym vibe in Harni area. The trainers are very supportive and push you to do your best every day.",
      stars: 5
    },
    {
      name: "Sneha Kapadia",
      text: "Supportive and motivating trainers! Wide range of modern equipment. I've been training here for 3 months and the results are incredible.",
      stars: 5
    },
    {
      name: "Rohan Deshmukh",
      text: "Best gym vibe and perfect training environment. Premium equipment that you won't find anywhere else in Vadodara. Highly recommend Warrior Fitness.",
      stars: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-neon-red fill-neon-red" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-4">Rated <span className="text-neon-red">Top Class</span></h2>
          <p className="text-white/50">Trusted by over 1,000+ members in Vadodara. 174+ Five-star Google Reviews.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                   {[...Array(r.stars)].map((_, j) => <Star key={j} className="w-3 h-3 text-neon-red fill-neon-red" />)}
                </div>
                <p className="text-white/70 italic text-lg leading-relaxed mb-8">“{r.text}”</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-neon-red flex items-center justify-center font-black text-xs italic">
                  {r.name.charAt(0)}
                </div>
                <div>
                   <h5 className="font-bold text-sm uppercase">{r.name}</h5>
                   <span className="text-[10px] text-white/30 uppercase tracking-widest italic">Google Reviewer</span>
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
    <section id="contact" className="py-24 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8">Join The <span className="text-neon-red">Vanguard</span></h2>
            <p className="text-white/60 mb-10 text-lg">Have questions? Want to book a trial? Reach out and we'll get you started on your transformation journey.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full bg-matte-black border border-white/10 p-4 rounded-sm focus:border-neon-red outline-none transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full bg-matte-black border border-white/10 p-4 rounded-sm focus:border-neon-red outline-none transition-colors" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full bg-matte-black border border-white/10 p-4 rounded-sm focus:border-neon-red outline-none transition-colors" />
              <textarea placeholder="Tell us your goals" rows={5} className="w-full bg-matte-black border border-white/10 p-4 rounded-sm focus:border-neon-red outline-none transition-colors" />
              <button className="btn-premium btn-primary w-full md:w-auto">
                Send Inquiry
              </button>
            </form>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-neon-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2">Location</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    4th Floor, Siddheshwar Paradise, Harni, Vadodara, Gujarat 390024
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-neon-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2">Contact</h4>
                  <p className="text-white/50 text-sm">+91 84600 55933</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="h-full min-h-[400px] border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.669527962164!2d73.2201083759367!3d22.32832814188737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcf46c2f9d5ef%3A0xe543df65d836269b!2sWarrior%20Fitness!5e0!3m2!1sen!2sin!4v1716100000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/918460055933"
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center neon-glow"
    >
      <MessageCircle className="w-8 h-8 fill-white/20" />
    </motion.a>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-20">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-neon-red rounded-sm flex items-center justify-center rotate-45">
              <Dumbbell className="text-white w-4 h-4 -rotate-45" />
            </div>
            <span className="font-heading font-black text-xl italic uppercase tracking-tighter">
              Warrior <span className="text-neon-red">Fitness</span>
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Experience Vadodara's fast-growing premium fitness destination. Transformation is more than just working out—it's about becoming a warrior.
          </p>
          <div className="flex gap-4">
             <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-sm hover:border-neon-red transition-colors text-white/50 hover:text-neon-red">
               <Instagram className="w-4 h-4" />
             </a>
             <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-sm hover:border-neon-red transition-colors text-white/50 hover:text-neon-red">
              <Facebook className="w-4 h-4" />
             </a>
             <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-sm hover:border-neon-red transition-colors text-white/50 hover:text-neon-red">
              <Twitter className="w-4 h-4" />
             </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-12 flex-grow justify-end">
          <div>
            <h5 className="font-black italic uppercase text-xs tracking-widest mb-6">Quick Links</h5>
             <ul className="space-y-4 text-sm text-white/40 uppercase font-medium">
               <li><a href="#about" className="hover:text-neon-red">About</a></li>
               <li><a href="#membership" className="hover:text-neon-red">Plans</a></li>
               <li><a href="#trainers" className="hover:text-neon-red">Trainers</a></li>
               <li><a href="#contact" className="hover:text-neon-red">Contact</a></li>
             </ul>
          </div>
          <div>
            <h5 className="font-black italic uppercase text-xs tracking-widest mb-6">Resources</h5>
             <ul className="space-y-4 text-sm text-white/40 uppercase font-medium">
               <li><a href="#" className="hover:text-neon-red">Blog</a></li>
               <li><a href="#" className="hover:text-neon-red">Guidelines</a></li>
               <li><a href="#" className="hover:text-neon-red">FAQ</a></li>
             </ul>
          </div>
          <div>
            <h5 className="font-black italic uppercase text-xs tracking-widest mb-6">Training Hours</h5>
             <ul className="space-y-2 text-sm text-white/40 font-medium">
               <li className="flex justify-between"><span>Mon - Sat:</span> <span className="text-white">6AM - 10PM</span></li>
               <li className="flex justify-between"><span>Sunday:</span> <span className="text-white">Closed</span></li>
             </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-widest text-white/20">
          © 2026 Warrior Fitness Harni. All Rights Reserved. Designed for Warriors.
        </p>
        <span className="text-[10px] uppercase tracking-[0.4em] font-black italic text-white/60">
          Stay Hard <span className="text-neon-red">•</span> Stay Motivated
        </span>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <About />
        <Features />
        
        {/* Simple Stats Banner */}
        <div className="py-20 border-y border-white/5 bg-matte-black overflow-hidden whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 text-6xl md:text-8xl font-black italic uppercase opacity-10"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-8">
                Transformation <Star className="w-12 h-12 fill-current" /> Discipline <Zap className="w-12 h-12 fill-current" /> Warrior <Dumbbell className="w-12 h-12 fill-current" />
              </span>
            ))}
          </motion.div>
        </div>

        <Membership />
        <Transformations />
        <Trainers />
        <Reviews />
        
        {/* Banner CTA */}
        <section className="py-24 px-6 relative overflow-hidden bg-neon-red">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-black/10 skew-x-[-20deg] translate-x-1/2" />
          <div className="max-w-7xl mx-auto relative z-10 text-center">
             <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8">Your Transformation Starts Today</h2>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact" className="px-10 py-5 bg-white text-neon-red font-black uppercase tracking-widest text-sm hover:scale-105 transition-all">Book Free Trial</a>
                <a href="https://wa.me/918460055933" target="_blank" rel="noreferrer" className="px-10 py-5 border-2 border-white text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-neon-red transition-all flex items-center gap-2">
                   Contact on WhatsApp <MessageCircle className="w-5 h-5" />
                </a>
             </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
