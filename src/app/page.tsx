"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Icônes simples pour éviter les dépendances
const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Bars3Icon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XMarkIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const TechStack = {
  languages: [
    { name: "Java", logo: "/java.png" },
    { name: "Python", logo: "/python.png" },
    { name: "PHP", logo: "/laravel.webp" },
    { name: "SQL", logo: "/sql.webp" },
    { name: "React", logo: "/react.webp" },
  ],
  databases: [
    { name: "PostgreSQL", logo: "/postgres-logo.png" },
    { name: "MySQL", logo: "/mysql.png" },
    { name: "Oracle", logo: "/oracle.png" },
    { name: "MongoDB", logo: "/mongo.webp" },
    { name: "CouchDB", logo: "/couchedb.png" },
  ],
  bigData: [
    { name: "Hadoop", logo: "/haddop.jpeg" },
    { name: "PySpark", logo: "/pyspark.webp" },
    { name: "Machine Learning", logo: "/machine-learning.jpg" },
  ],
  tools: [
    { name: "Git", logo: "/git.webp" },
    { name: "GitHub", logo: "/GitHub-Emblem.png" },
    { name: "GitLab", logo: "/gitlab.webp" },
    { name: "Docker", logo: "/docker.jpeg" },
    { name: "Spring", logo: "/spring-logo.png" },
  ],
};

const projects = [
  {
    title: "SenMarket - Marketplace E-commerce",
    description: "Marketplace complète avec API Spring Boot et interface React. Plateforme de vente en ligne avec gestion des vendeurs, produits, commandes et paiements sécurisés.",
    tech: ["Spring Boot", "React", "MySQL", "API REST"],
    github: "https://github.com/Birame-Owens/senmarket-api-front",
    image: "/react.webp"
  },
  {
    title: "Hackathon Musée des Civilisations",
    description: "Participation au hackathon du Musée des Civilisations Noires de Dakar. Développement d'une solution innovante pour la digitalisation et la promotion du patrimoine culturel sénégalais.",
    tech: ["JavaScript", "HTML/CSS", "Innovation"],
    github: "https://github.com/Birame-Owens/hackatonmusee",
    image: "/git.webp"
  },
  {
    title: "Plateforme E-Learning Concree",
    description: "Présentation d'un projet de plateforme d'apprentissage en ligne innovante. Solution complète pour la formation digitale avec suivi des apprenants et gestion des contenus pédagogiques.",
    tech: ["E-Learning", "Pédagogie digitale", "UX/UI"],
    image: "/concree.jpg"
  },
  {
    title: "Plateforme de transfert d'argent",
    description: "Développement d'une plateforme de transfert d'argent sécurisée en Java/JEE pour mon mémoire de fin de licence. Architecture robuste avec gestion des transactions et sécurité avancée.",
    tech: ["Java", "JEE", "Sécurité"],
    image: "/java.png"
  },
  {
    title: "Application de gestion immobilière",
    description: "Système complet de gestion immobilière avec ASP.NET. Gestion des biens, locataires, contrats de bail, paiements et maintenance des propriétés.",
    tech: ["ASP.NET", "C#", "SQL Server"],
    image: "/sql.webp"
  },
  {
    title: "Plateforme de collecte de données",
    description: "Conception et développement d'une plateforme web professionnelle avec back-office sécurisé utilisant Laravel. Système de collecte, traitement et analyse de données avec tableau de bord interactif.",
    tech: ["Laravel", "PHP", "MySQL", "Dashboard"],
    image: "/laravel.webp"
  },
];

const NavItem = ({ href, children, description }: { href: string; children: React.ReactNode; description: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative">
      <a 
        href={href} 
        className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all duration-300 font-medium flex items-center gap-1 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        <ChevronDownIcon />
      </a>
      {isHovered && (
        <div className="absolute top-8 left-0 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-3 min-w-48 z-50">
          <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mounted, setMounted] = useState(false);

const certifications = [
  {
    title: "Google IT Support Professional",
    issuer: "Google",
    date: "2025",
    description: "Certification professionnelle en support IT couvrant la gestion du matériel, des systèmes d'exploitation, du dépannage et du support client.",
    image: "/google-it-service.png",
    credentialUrl: "#"
  }
];

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      const isDark = savedMode === 'true';
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      // Detect system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
  }, [isDarkMode, mounted]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg dark:bg-slate-900/95 z-50 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3 sm:py-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle menu"
                >
                  {sidebarOpen ? <XMarkIcon /> : <Bars3Icon />}
                </button>
                <h1 className="text-base sm:text-xl font-bold text-slate-800 dark:text-white">
                  Birame Owens Diop
                </h1>
              </div>
              
              <nav className="hidden lg:flex space-x-8">
                <NavItem href="#hero" description="Découvrez mon profil et ma passion pour la technologie">
                  Accueil
                </NavItem>
                <NavItem href="#about" description="Mon parcours académique et professionnel">
                  À propos
                </NavItem>
                <NavItem href="#skills" description="Technologies et outils que je maîtrise">
                  Compétences
                </NavItem>
                <NavItem href="#certifications" description="Mes certifications et accréditations professionnelles">
                  Certifications
                </NavItem>
                <NavItem href="#projects" description="Mes réalisations et projets innovants">
                  Projets
                </NavItem>
                <NavItem href="#contact" description="Restons en contact pour collaborer">
                  Contact
                </NavItem>
              </nav>

              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
              >
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </div>
        </header>

        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <aside className={`fixed left-0 top-0 h-full w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-r border-slate-200/50 dark:border-slate-700/50 z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="p-6 pt-20">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 p-1 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/owensphoto.jpg" 
                    alt="Birame Owens Diop" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h2 className="text-lg font-semibold text-slate-800 dark:text-white text-center">Birame Owens Diop</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-1">Master 2 Business Intelligence</p>
            </div>
            
            <nav className="space-y-2">
              {[
                { 
                  id: 'hero', 
                  label: 'Accueil', 
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                },
                { 
                  id: 'about', 
                  label: 'À propos', 
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                },
                { 
                  id: 'skills', 
                  label: 'Compétences', 
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                },
                { 
                  id: 'certifications', 
                  label: 'Certifications', 
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                },
                { 
                  id: 'projects', 
                  label: 'Projets', 
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                },
                { 
                  id: 'contact', 
                  label: 'Contact', 
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col gap-3">
                <a 
                  href="https://gitlab.com/Birame-Owens" 
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  <Image src="/gitlab.webp" alt="GitLab" width={16} height={16} />
                  GitLab
                </a>
                <a 
                  href="https://github.com/Birame-Owens" 
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                >
                  <Image src="/GitHub-Emblem.png" alt="GitHub" width={16} height={16} />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/birame-owens-diop-305a56300" 
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span className="w-4 h-4 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">in</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:ml-72 transition-all duration-300">
          {/* Hero Section */}
          <section id="hero" className="pt-20 pb-16 px-3 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
                      Birame Owens
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Diop
                      </span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto lg:mx-0 mb-6"></div>
                  </div>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Étudiant en <span className="font-semibold text-blue-600 dark:text-blue-400">Master 2 Business Intelligence</span> à l'Université Cheikh Anta Diop.
                  </p>
                  
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
                    Spécialisé en <span className="font-semibold text-purple-600 dark:text-purple-400">Business Intelligence, Machine Learning et Science des Données</span>. 
                    Expert en transformation digitale, analyse prédictive et optimisation des processus décisionnels par l'exploitation intelligente des données d'entreprise.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                    <a 
                      href="https://gitlab.com/Birame-Owens" 
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                    >
                      <Image src="/gitlab.webp" alt="GitLab" width={20} height={20} className="sm:w-6 sm:h-6" />
                      GitLab
                    </a>
                    <a 
                      href="https://github.com/Birame-Owens" 
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl hover:from-slate-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                    >
                      <Image src="/GitHub-Emblem.png" alt="GitHub" width={20} height={20} className="sm:w-6 sm:h-6" />
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/birame-owens-diop-305a56300" 
                      target="_blank"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
                    >
                      <span className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded text-blue-600 text-xs sm:text-sm flex items-center justify-center font-bold">in</span>
                      LinkedIn
                    </a>
                    <a 
                      href="mailto:birameowens29@gmail.com"
                      className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400 text-sm sm:text-base"
                    >
                      ✉️ Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                  À propos de moi
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Diplômé avec mention Assez Bien, je poursuis mon Master 2 en SIR avec une spécialisation en Business Intelligence. 
                  Mon objectif : devenir expert en analyse de données pour optimiser la prise de décision en entreprise.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    Formation Académique
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg p-4">
                      <div className="flex items-start sm:items-center gap-3 mb-2">
                        <Image src="/ucad.webp" alt="UCAD" width={32} height={32} className="rounded flex-shrink-0" />
                        <h4 className="font-semibold text-slate-800 dark:text-white text-base sm:text-lg">Master 2 Business Intelligence</h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">Université Cheikh Anta Diop – Dakar</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">2025-2026 (En cours) • <span className="font-semibold text-purple-600">BI, Machine Learning & Data Science</span></p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        Spécialisation avancée en Business Intelligence : Machine Learning, Data Mining, Big Data Analytics, Intelligence Artificielle appliquée aux données d'entreprise et systèmes d'aide à la décision.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Image src="/ucad.webp" alt="UCAD" width={32} height={32} className="rounded" />
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Master 1 Systèmes d'Information Répartis</h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">Université Cheikh Anta Diop – Dakar</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">2024-2025</p>
                      <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold">Diplôme obtenu</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        Formation en architecture distribuée, systèmes répartis, cloud computing et technologies web avancées.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6 bg-green-50 dark:bg-green-900/20 rounded-r-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Image src="/ucad.webp" alt="UCAD" width={32} height={32} className="rounded" />
                        <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Licence Mathématiques-Informatique</h4>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">Université Cheikh Anta Diop – Dakar</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">2021-2024</p>
                      <p className="text-sm text-green-600 dark:text-green-400 font-semibold">Diplôme obtenu</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        Double formation en mathématiques appliquées et informatique : algorithmique, structures de données, analyse numérique et développement logiciel.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                    </svg>
                    Expérience Professionnelle
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Développeur Freelance</h4>
                      <p className="text-slate-600 dark:text-slate-300">Projet de collecte de données (Laravel)</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Septembre 2024 – Janvier 2025</p>
                      <ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                        <li>• Conception et développement d'une plateforme web complète</li>
                        <li>• Back-office sécurisé avec gestion avancée des permissions</li>
                        <li>• Intégration de bases de données relationnelles optimisées</li>
                        <li>• Mise en place de tableaux de bord analytiques</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-r-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Présentateur de Projet</h4>
                      <p className="text-slate-600 dark:text-slate-300">Plateforme E-Learning Concree</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Innovation pédagogique</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        Présentation d'une solution e-learning innovante axée sur l'expérience utilisateur et l'engagement des apprenants.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                  Compétences Techniques
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Une expertise diversifiée couvrant le développement full-stack, la gestion de données et les technologies émergentes
                </p>
              </div>
              
              <div className="space-y-8 sm:space-y-12">
                {/* Languages & Development */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white mb-6 sm:mb-8 flex items-center gap-3">
                    💻 Langages & Développement
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
                    {TechStack.languages.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white mb-6 sm:mb-8 flex items-center gap-3">
                    🗄️ Bases de données
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
                    {TechStack.databases.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Big Data & AI */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white mb-6 sm:mb-8 flex items-center gap-3">
                    🤖 Big Data & Business Intelligence
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    {TechStack.bigData.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Environment */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white mb-6 sm:mb-8 flex items-center gap-3">
                    🛠️ Outils & Environnement
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
                    {TechStack.tools.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                  Certifications & Accréditations
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                  Certifications professionnelles validant mon expertise et mon engagement dans l'apprentissage continu
                </p>
              </div>
              
              <div className="grid lg:grid-cols-1 gap-6 sm:gap-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="group bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                      {/* Certification Image */}
                      <div className="flex-shrink-0 w-full lg:w-64 h-64 lg:h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl overflow-hidden flex items-center justify-center border border-blue-200 dark:border-blue-700">
                        <Image 
                          src={cert.image} 
                          alt={cert.title} 
                          width={200} 
                          height={200} 
                          className="object-contain group-hover:scale-110 transition-transform duration-300 p-4" 
                        />
                      </div>
                      
                      {/* Certification Details */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {cert.title}
                            </h3>
                            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                              {cert.issuer}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                              {cert.date}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                          {cert.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 rounded-lg border border-green-200 dark:border-green-700">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">Certification validée</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                  Projets & Réalisations
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
                  De la participation à des hackathons aux projets académiques, découvrez mes réalisations techniques et innovations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
                      {project.image && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            width={120} 
                            height={120} 
                            className="object-contain group-hover:scale-110 transition-transform duration-300" 
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full border border-blue-200 dark:border-blue-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <Image src="/GitHub-Emblem.png" alt="GitHub" width={20} height={20} />
                          Voir sur GitHub
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-slate-800 dark:to-purple-900/20">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                Restons en contact
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-base sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto px-4">
                Interessé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Localisation</h3>
                  <p className="text-slate-600 dark:text-slate-300">Dakar, Sénégal</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Téléphone</h3>
                  <p className="text-slate-600 dark:text-slate-300">+221 77 139 73 93</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Email</h3>
                  <a href="mailto:birameowens29@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                    birameowens29@gmail.com
                  </a>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Disponibilité</h3>
                  <p className="text-slate-600 dark:text-slate-300">Ouvert aux opportunités</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="lg:ml-72 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">Birame Owens Diop</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Étudiant Master 2 Business Intelligence spécialisé en Machine Learning et Data Science. 
                  Expert en transformation digitale et analyse prédictive, toujours à la recherche de nouveaux défis technologiques.
                </p>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Liens rapides</h4>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('about')} className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">À propos</button>
                  <button onClick={() => scrollToSection('skills')} className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">Compétences</button>
                  <button onClick={() => scrollToSection('certifications')} className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">Certifications</button>
                  <button onClick={() => scrollToSection('projects')} className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">Projets</button>
                  <button onClick={() => scrollToSection('contact')} className="block text-slate-300 hover:text-white transition-colors text-sm sm:text-base">Contact</button>
                </div>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold mb-4">Réseaux sociaux</h4>
                <div className="flex space-x-4">
                  <a href="https://gitlab.com/Birame-Owens" target="_blank" className="p-2 sm:p-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
                    <Image src="/gitlab.webp" alt="GitLab" width={20} height={20} />
                  </a>
                  <a href="https://github.com/Birame-Owens" target="_blank" className="p-2 sm:p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                    <Image src="/GitHub-Emblem.png" alt="GitHub" width={20} height={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/birame-owens-diop-305a56300" target="_blank" className="p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-white rounded text-blue-600 text-xs flex items-center justify-center font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-6 sm:pt-8 text-center">
              <p className="text-slate-400 text-xs sm:text-sm">
                © 2025 Birame Owens Diop. Tous droits réservés. Développé avec ❤️ et Next.js
              </p>
            </div>
          </div>
        </footer>
    </div>
  );
}