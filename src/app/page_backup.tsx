"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDownIcon, SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
        <ChevronDownIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
      {isHovered && (
        <div className="absolute top-8 left-0 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-3 min-w-48 z-50 animate-in slide-in-from-top-2">
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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
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
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg dark:bg-slate-900/95 z-50 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {sidebarOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white">
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
              >
                {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <aside className={`fixed left-0 top-0 h-full w-72 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-r border-slate-200/50 dark:border-slate-700/50 z-40 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="p-6 pt-20">
            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 p-1 mb-4">
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
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-1">Master SIR & Future Business Intelligence Expert</p>
            </div>
            
            <nav className="space-y-2">
              {[
                { id: 'hero', label: 'Accueil', icon: '🏠' },
                { id: 'about', label: 'À propos', icon: '👨‍💼' },
                { id: 'skills', label: 'Compétences', icon: '💻' },
                { id: 'projects', label: 'Projets', icon: '🚀' },
                { id: 'contact', label: 'Contact', icon: '📞' }
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
                  <span className="text-lg">{item.icon}</span>
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
          {/* Overlay for mobile sidebar */}
          {sidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Hero Section */}
          <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-4 leading-tight">
                      Birame Owens
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Diop
                      </span>
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto lg:mx-0 mb-6"></div>
                  </div>
                  
                  <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-2xl">
                    Étudiant en <span className="font-semibold text-blue-600 dark:text-blue-400">Master Systèmes d'Information Répartis</span> avec mention <span className="font-semibold text-green-600 dark:text-green-400">Assez Bien</span> en licence.
                  </p>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    Passionné par le développement d'applications et orienté vers la <span className="font-semibold text-purple-600 dark:text-purple-400">Business Intelligence</span>. 
                    Je débute mon Master 2 dans 1 mois avec l'ambition de devenir expert en analyse de données et aide à la décision.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a 
                      href="https://gitlab.com/Birame-Owens" 
                      target="_blank"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Image src="/gitlab.webp" alt="GitLab" width={24} height={24} />
                      GitLab
                    </a>
                    <a 
                      href="https://github.com/Birame-Owens" 
                      target="_blank"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl hover:from-slate-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <Image src="/GitHub-Emblem.png" alt="GitHub" width={24} height={24} />
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/birame-owens-diop-305a56300" 
                      target="_blank"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      <span className="w-6 h-6 bg-white rounded text-blue-600 text-sm flex items-center justify-center font-bold">in</span>
                      LinkedIn
                    </a>
                    <a 
                      href="mailto:birameowens29@gmail.com"
                      className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400"
                    >
                      ✉️ Contact
                    </a>
                  </div>
                </div>
                
                <div className="flex-shrink-0 lg:order-last">
                  <div className="relative">
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-slate-700 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                      <Image 
                        src="/owensphoto.jpg" 
                        alt="Birame Owens Diop" 
                        width={384} 
                        height={384}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        priority
                      />
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                  À propos de moi
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                  Diplômé avec mention Assez Bien, je poursuis mon Master 2 en SIR avec une spécialisation en Business Intelligence. 
                  Mon objectif : devenir expert en analyse de données pour optimiser la prise de décision en entreprise.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    🎓 Formation Académique
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Master Systèmes d'Information Répartis</h4>
                      <p className="text-slate-600 dark:text-slate-300">Université Cheikh Anta Diop – Dakar</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">2024-2025 (En cours) • <span className="font-semibold text-purple-600">Spécialisation Business Intelligence</span></p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        Focus sur l'analyse de données, l'aide à la décision, les entrepôts de données et la visualisation d'informations stratégiques.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6 bg-green-50 dark:bg-green-900/20 rounded-r-lg p-4">
                      <h4 className="font-semibold text-slate-800 dark:text-white text-lg">Licence en Informatique</h4>
                      <p className="text-slate-600 dark:text-slate-300">Université Cheikh Anta Diop – Dakar</p>
                      <p className="text-sm text-green-600 dark:text-green-400 font-semibold">Diplôme obtenu avec mention Assez Bien</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        Formation solide en développement logiciel, bases de données, algorithmique et gestion de projets informatiques.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                    💼 Expérience Professionnelle
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
          <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                  Compétences Techniques
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  Une expertise diversifiée couvrant le développement full-stack, la gestion de données et les technologies émergentes
                </p>
              </div>
              
              <div className="space-y-12">
                {/* Languages & Development */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                    💻 Langages & Développement
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {TechStack.languages.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                    🗄️ Bases de données
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {TechStack.databases.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Big Data & AI */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                    🤖 Big Data & Business Intelligence
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {TechStack.bigData.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Environment */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                    🛠️ Outils & Environnement
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                    {TechStack.tools.map((tech, index) => (
                      <div key={index} className="group flex flex-col items-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
                        <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Image src={tech.logo} alt={tech.name} width={64} height={64} className="object-contain" />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                  Projets & Réalisations
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                  De la participation à des hackathons aux projets académiques, découvrez mes réalisations techniques et innovations
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
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

          {/* Languages & Interests */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                    🌍 Langues
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                      <span className="font-medium text-slate-800 dark:text-white">Français</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-green-500"></div>
                          ))}
                        </div>
                        <span className="text-green-600 dark:text-green-400 font-semibold">Courant</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                      <span className="font-medium text-slate-800 dark:text-white">Anglais</span>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
                          ))}
                          {[...Array(2)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                          ))}
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">Intermédiaire</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-slate-700">
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                    🎯 Centres d'intérêt
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border-l-4 border-purple-500">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🔍</span>
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-white">Veille technologique</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Suivi des tendances tech et innovations</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border-l-4 border-blue-500">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">📊</span>
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-white">Business Intelligence</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Analyse de données et aide à la décision</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💡</span>
                        <div>
                          <h4 className="font-semibold text-slate-800 dark:text-white">Solutions innovantes</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Développement de produits créatifs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-slate-800 dark:to-purple-900/20">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
                Restons en contact
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
                Interessé par une collaboration ? N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📍</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Localisation</h3>
                  <p className="text-slate-600 dark:text-slate-300">Dakar, Sénégal</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Téléphone</h3>
                  <p className="text-slate-600 dark:text-slate-300">+221 77 139 73 93</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Email</h3>
                  <a href="mailto:birameowens29@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                    birameowens29@gmail.com
                  </a>
                </div>
                
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 dark:text-white mb-2">Disponibilité</h3>
                  <p className="text-slate-600 dark:text-slate-300">Ouvert aux opportunités</p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:birameowens29@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  ✉️ Envoyer un email
                </a>
                <a 
                  href="https://www.linkedin.com/in/birame-owens-diop-305a56300"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="w-6 h-6 bg-blue-600 rounded text-white text-sm flex items-center justify-center font-bold">in</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="lg:ml-72 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Birame Owens Diop</h3>
                <p className="text-slate-300 leading-relaxed">
                  Étudiant Master SIR passionné par la Business Intelligence et l'innovation technologique. 
                  Toujours à la recherche de nouveaux défis et opportunités de collaboration.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
                <div className="space-y-2">
                  <button onClick={() => scrollToSection('about')} className="block text-slate-300 hover:text-white transition-colors">À propos</button>
                  <button onClick={() => scrollToSection('skills')} className="block text-slate-300 hover:text-white transition-colors">Compétences</button>
                  <button onClick={() => scrollToSection('projects')} className="block text-slate-300 hover:text-white transition-colors">Projets</button>
                  <button onClick={() => scrollToSection('contact')} className="block text-slate-300 hover:text-white transition-colors">Contact</button>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Réseaux sociaux</h4>
                <div className="flex space-x-4">
                  <a href="https://gitlab.com/Birame-Owens" target="_blank" className="p-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors">
                    <Image src="/gitlab.webp" alt="GitLab" width={20} height={20} />
                  </a>
                  <a href="https://github.com/Birame-Owens" target="_blank" className="p-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
                    <Image src="/GitHub-Emblem.png" alt="GitHub" width={20} height={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/birame-owens-diop-305a56300" target="_blank" className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                    <span className="w-5 h-5 bg-white rounded text-blue-600 text-xs flex items-center justify-center font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-slate-700 pt-8 text-center">
              <p className="text-slate-400">
                © 2025 Birame Owens Diop. Tous droits réservés. Développé avec ❤️ et Next.js
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-6">
                Birame Owens
                <span className="block text-blue-600 dark:text-blue-400">Diop</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Étudiant en Master Systèmes d'Information Répartis passionné par le développement 
                d'applications et les nouvelles technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://gitlab.com/Birame-Owens" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Image src="/gitlab.webp" alt="GitLab" width={20} height={20} />
                  GitLab
                </a>
                <a 
                  href="https://github.com/Birame-Owens" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
                >
                  <Image src="/GitHub-Emblem.png" alt="GitHub" width={20} height={20} />
                  GitHub
                </a>
                <a 
                  href="mailto:birameowens29@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl">
                <Image 
                  src="/owensphoto.jpg" 
                  alt="Birame Owens Diop" 
                  width={320} 
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
            À propos de moi
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Formation</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-slate-800 dark:text-white">Master Systèmes d'Information Répartis</h4>
                  <p className="text-slate-600 dark:text-slate-300">Université Cheikh Anta Diop – Dakar</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">2024-2025 (En cours)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-slate-800 dark:text-white">Licence en Informatique</h4>
                  <p className="text-slate-600 dark:text-slate-300">Université Cheikh Anta Diop – Dakar</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Diplôme obtenu</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">Expérience</h3>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-slate-800 dark:text-white">Développeur Freelance</h4>
                <p className="text-slate-600 dark:text-slate-300">Projet de collecte de données (Laravel)</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Septembre 2024 – Janvier 2025</p>
                <ul className="mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Conception et développement d'une plateforme web</li>
                  <li>• Back-office sécurisé pour l'administration</li>
                  <li>• Intégration de bases de données relationnelles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
            Compétences Techniques
          </h2>
          
          <div className="space-y-12">
            {/* Languages & Development */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Langages & Développement</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {TechStack.languages.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image src={tech.logo} alt={tech.name} width={48} height={48} className="object-contain" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Bases de données</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {TechStack.databases.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image src={tech.logo} alt={tech.name} width={48} height={48} className="object-contain" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Big Data & AI */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Big Data & Intelligence Artificielle</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {TechStack.bigData.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image src={tech.logo} alt={tech.name} width={48} height={48} className="object-contain" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Environment */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">Outils & Environnement</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {TechStack.tools.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <Image src={tech.logo} alt={tech.name} width={48} height={48} className="object-contain" />
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-slate-800 dark:text-white mb-16">
            Projets Académiques & Professionnels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Interests */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Langues</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="font-medium text-slate-800 dark:text-white">Français</span>
                  <span className="text-slate-600 dark:text-slate-300">Courant</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="font-medium text-slate-800 dark:text-white">Anglais</span>
                  <span className="text-slate-600 dark:text-slate-300">Intermédiaire</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-8">Centres d'intérêt</h2>
              <div className="space-y-3">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="text-slate-700 dark:text-slate-300">🔍 Veille technologique</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="text-slate-700 dark:text-slate-300">🤖 Intelligence artificielle et machine learning</span>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
                  <span className="text-slate-700 dark:text-slate-300">💡 Développement de solutions innovantes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white mb-8">
            Me contacter
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📍</span>
              </div>
              <span className="text-slate-600 dark:text-slate-300">Dakar, Sénégal</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">📱</span>
              </div>
              <span className="text-slate-600 dark:text-slate-300">+221 77 139 73 93</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✉️</span>
              </div>
              <a href="mailto:birameowens29@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors">
                birameowens29@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">© 2025 Birame Owens Diop. Tous droits réservés.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://gitlab.com/Birame-Owens" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              GitLab
            </a>
            <a href="https://github.com/Birame-Owens" target="_blank" className="text-slate-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
