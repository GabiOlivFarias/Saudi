import { useState } from "react"
import { FaMoon } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import logoBrasao from "../../assets/saudi-arabia-state.svg"


interface Navbar{
    id: string,
    label: string,
    href: string
}

const navItems: Navbar[] = [
    { id: "inicio", label: "Início", href: "#inicio" },
    { id: "sobre", label: "Sobre", href: "#sobre" },
    { id: "curiosidades", label: "Curiosidades", href: "#curiosidades" },
    { id: "cultura", label: "Cultura", href: "#cultura" },
    { id: "natureza", label: "Natureza", href: "#natureza" },
    { id: "gastronomia", label: "Gastronomia", href: "#gastronomia" },
    { id: "galeria", label: "Galeria", href: "#galeria" },
    { id: "contato", label: "Contato", href: "#contato" }
];
export default function Navbar(){

    const[ativo, setAtivo] = useState<string>('inicio')

    return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-emerald-950/40">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-4 cursor-pointer select-none">
          <img
            src={logoBrasao}
            alt="Brasão Arábia Saudita"
            className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.25em] text-neutral-100 uppercase">
              Arábia Saudita
            </span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-emerald-400/90 uppercase mt-0.5">
              Tradição <span className="text-emerald-500 mx-1">•</span> Modernidade{" "}
              <span className="text-emerald-500 mx-1">•</span> Um Só Reino
            </span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setAtivo(item.id)}
                className={`transition-colors duration-200 hover:text-emerald-400 ${
                  ativo === item.id ? "text-emerald-400 font-medium" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              aria-label="Alternar tema"
              className="p-1 text-neutral-300 hover:text-emerald-400 transition-colors"
            >
              <FaMoon />
            </button>
            <button className="flex items-center gap-1 px-3 py-1 rounded-full border border-emerald-500/70 text-emerald-400 text-xs font-medium hover:bg-emerald-500/10 transition-colors">
              PT  
              <span className="text-[14px]">
                <TiArrowSortedDown />
              </span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
