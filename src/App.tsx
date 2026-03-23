import { useState, useEffect } from 'react'

const GITHUB_URL = 'https://github.com/imadAttar/orbit'

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-orbit-dark/80 backdrop-blur-xl border-b border-orbit-border' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="orbit-logo.png" alt="Orbit" className="w-8 h-8 rounded-lg" />
          <span className="text-lg font-bold">Orbit</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
          <a href="#comparison" className="hover:text-white transition-colors">Orbit vs Cursor</a>
          <a href="#download" className="hover:text-white transition-colors">Download</a>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center orbit-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-orbit-blue/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orbit-blue/5 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        <div className="float-animation mb-8">
          <img src="orbit-logo.png" alt="Orbit" className="w-28 h-28 mx-auto rounded-3xl pulse-glow" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="glow-text">L'IA au centre.</span>
          <br />
          <span className="text-white">Vous supervisez.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Orbit est un IDE de bureau AI-first qui inverse le paradigme traditionnel.
          L'agent IA travaille, vous validez. Plus de code manuel — un cockpit
          pour orchestrer le developpement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" className="glow-btn px-8 py-3.5 rounded-xl text-white font-semibold text-base">
            Telecharger Orbit
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl font-semibold text-base border border-orbit-border text-gray-300 hover:border-orbit-blue/40 hover:text-white transition-all">
            Voir sur GitHub
          </a>
        </div>

        <div className="mt-16 flex justify-center gap-8 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            macOS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Windows
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Linux
          </span>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: '🎛',
      title: 'Supervision en temps reel',
      desc: 'Visualisez les fichiers modifies, les diffs et les actions Git de chaque agent en direct.',
    },
    {
      icon: '⚡',
      title: 'Multi-sessions paralleles',
      desc: 'Lancez plusieurs agents Claude Code simultanement dans des onglets separes.',
    },
    {
      icon: '🔀',
      title: 'Git integre',
      desc: 'Status, diff, commit et push sans quitter Orbit. Controle complet du versioning.',
    },
    {
      icon: '🎨',
      title: '8 themes',
      desc: 'Catppuccin, Dracula, Tokyo Night, Nord, One Dark, Gruvbox, Solarized, Rose Pine.',
    },
    {
      icon: '⌨️',
      title: 'Palette de commandes',
      desc: 'Cmd+K pour acceder a toutes les actions. Navigation rapide et intuitive.',
    },
    {
      icon: '💰',
      title: 'Suivi des couts',
      desc: 'Monitoring en temps reel du cout en USD et du contexte utilise par session.',
    },
    {
      icon: '📐',
      title: 'Split pane',
      desc: 'Visualisez plusieurs sessions cote a cote avec des panneaux redimensionnables.',
    },
    {
      icon: '🔔',
      title: 'Notifications',
      desc: 'Alertes sonores et systeme quand l\'agent termine une tache.',
    },
  ]

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tout ce dont vous avez besoin pour <span className="glow-text">superviser l'IA</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Orbit n'est pas un editeur de texte. C'est un cockpit de supervision
          concu pour le developpement AI-first.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="glow-border rounded-2xl p-6 bg-orbit-card/50 hover:bg-orbit-card transition-colors">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Paradigm() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orbit-blue/5 via-transparent to-orbit-cyan/5" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Un <span className="glow-text">nouveau paradigme</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="glow-border rounded-2xl p-8 bg-orbit-card/30">
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">IDE traditionnel</div>
            <div className="space-y-3 text-gray-400">
              <p>L'humain ecrit le code ligne par ligne</p>
              <p>L'IA est un plugin secondaire</p>
              <p>Le focus est l'editeur de texte</p>
              <p>L'humain code, la machine execute</p>
            </div>
          </div>

          <div className="glow-border rounded-2xl p-8 bg-orbit-blue/5 border-orbit-blue/30">
            <div className="text-sm font-semibold glow-text uppercase tracking-wider mb-4">Orbit</div>
            <div className="space-y-3 text-gray-300">
              <p>L'IA genere, l'humain valide</p>
              <p>Claude Code est au coeur du systeme</p>
              <p>Le focus est la supervision</p>
              <p>L'humain decide, l'IA implemente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Vision() {
  const zones = [
    {
      num: '01',
      name: 'Intent',
      desc: 'Exprimez vos intentions en langage naturel, schemas ou user stories. Plus besoin de coder manuellement.',
      status: 'En cours',
    },
    {
      num: '02',
      name: 'Supervision',
      desc: 'Dashboard temps reel des actions IA. Diffs semantiques, approbation par action, alertes de deviation.',
      status: 'Actif',
    },
    {
      num: '03',
      name: 'Verification',
      desc: 'Tests auto-generes en continu. Couverture par intention. Monitoring securite et performance.',
      status: 'Planifie',
    },
    {
      num: '04',
      name: 'Architecture',
      desc: 'Vue graphique de l\'architecture systeme. Contraintes declaratives que l\'IA doit respecter.',
      status: 'Planifie',
    },
    {
      num: '05',
      name: 'Historique',
      desc: 'Log de toutes les decisions humaines. Lien intention-commit. Boucle d\'apprentissage pour l\'IA.',
      status: 'Planifie',
    },
  ]

  return (
    <section id="vision" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          La vision : <span className="glow-text">5 zones du cockpit</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Orbit evolue vers un cockpit complet de pilotage du developpement IA,
          organise en 5 zones fonctionnelles.
        </p>

        <div className="space-y-4">
          {zones.map((z) => (
            <div key={z.num} className="glow-border rounded-xl p-6 bg-orbit-card/30 flex flex-col md:flex-row md:items-center gap-4">
              <div className="text-2xl font-bold glow-text w-12 shrink-0">{z.num}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-white font-semibold text-lg">{z.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${z.status === 'Actif' ? 'bg-green-400/10 text-green-400' : z.status === 'En cours' ? 'bg-yellow-400/10 text-yellow-400' : 'bg-gray-400/10 text-gray-400'}`}>
                    {z.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{z.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Comparison() {
  const rows = [
    ['Philosophie', "IDE + couche IA", "IA au centre + outils de supervision"],
    ['Coeur du systeme', "Editeur de code (VS Code fork)", "Claude Code CLI natif"],
    ['Role de l\'utilisateur', "Ecrire du code", "Superviser et valider"],
    ['Acces IA', "API proprietaire", "Ecosysteme Claude Code complet (MCP, agents, tools)"],
    ['Multi-agents', "Non", "Oui, sessions paralleles"],
    ['Code manuel', "Oui, c\'est le mode principal", "Non, l\'IA genere tout"],
    ['Suivi des couts', "Non", "Oui, par session en USD"],
    ['Open source', "Non", "Oui, entierement"],
  ]

  return (
    <section id="comparison" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="glow-text">Orbit</span> vs Cursor
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Cursor ajoute l'IA a un editeur. Orbit retire l'editeur et met l'IA au centre.
        </p>

        <div className="glow-border rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-orbit-card/80 text-sm font-semibold">
            <div className="p-4 border-b border-orbit-border" />
            <div className="p-4 border-b border-l border-orbit-border text-gray-400">Cursor</div>
            <div className="p-4 border-b border-l border-orbit-border glow-text">Orbit</div>
          </div>
          {rows.map(([label, cursor, orbit], i) => (
            <div key={i} className="grid grid-cols-3 text-sm">
              <div className="p-4 border-b border-orbit-border text-gray-300 font-medium">{label}</div>
              <div className="p-4 border-b border-l border-orbit-border text-gray-500">{cursor}</div>
              <div className="p-4 border-b border-l border-orbit-border text-gray-300">{orbit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  const techs = [
    { name: 'Tauri 2', desc: 'Framework desktop natif' },
    { name: 'React 19', desc: 'Interface reactive' },
    { name: 'Rust', desc: 'Backend performant' },
    { name: 'TypeScript', desc: 'Frontend type-safe' },
    { name: 'xterm.js', desc: 'Terminal natif' },
    { name: 'Zustand', desc: 'State management' },
  ]

  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orbit-blue/3 to-transparent" />
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Construit avec les <span className="glow-text">meilleures technologies</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((t) => (
            <div key={t.name} className="glow-border rounded-xl px-6 py-4 bg-orbit-card/30 text-center">
              <div className="text-white font-semibold">{t.name}</div>
              <div className="text-xs text-gray-500 mt-1">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Download() {
  return (
    <section id="download" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pret a <span className="glow-text">piloter l'IA</span> ?
        </h2>
        <p className="text-gray-400 mb-10">
          Orbit est gratuit et open source. Disponible sur macOS, Windows et Linux.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href={`${GITHUB_URL}/releases/latest`} target="_blank" rel="noopener noreferrer" className="glow-btn px-8 py-3.5 rounded-xl text-white font-semibold text-base">
            Telecharger la derniere version
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl font-semibold text-base border border-orbit-border text-gray-300 hover:border-orbit-blue/40 hover:text-white transition-all">
            Code source
          </a>
        </div>

        <div className="glow-border rounded-xl p-6 bg-orbit-card/30 text-left">
          <div className="text-xs text-gray-500 font-mono mb-2">Pre-requis</div>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>Claude Code CLI installe (<code className="text-orbit-blue text-xs bg-orbit-blue/10 px-1.5 py-0.5 rounded">npm i -g @anthropic-ai/claude-code</code>)</li>
            <li>Cle API Anthropic configuree</li>
            <li>macOS (ARM64/x64), Windows (x64) ou Linux (x64)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-orbit-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <img src="orbit-logo.png" alt="Orbit" className="w-5 h-5 rounded" />
          <span>Orbit IDE</span>
        </div>
        <div>Open source sous licence MIT</div>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          GitHub
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-orbit-dark">
      <Nav />
      <Hero />
      <Features />
      <Paradigm />
      <Vision />
      <Comparison />
      <TechStack />
      <Download />
      <Footer />
    </div>
  )
}
