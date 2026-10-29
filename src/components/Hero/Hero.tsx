import heroBg from "../../assets/saudiRhyad.jpeg"
import { GoArrowRight } from "react-icons/go";

export default function Hero(){
    return(
        <>
        <section className="relative min-h-screen w-full flex items-center bg-black overflow-hidden">
            <img 
                src={heroBg} 
                alt="Bandeira e capital da Arábia Saudita" 
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-16 flex flex-col justify-between min-h-screen">
                <div>
                    <div className="flex flex-col items-end text-right select-none">
                        <h3 lang="ar" dir="rtl" className="text-texto-verde-claro text-xl sm:text-2xl font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                            المملكة العربية السعودية
                        </h3>
                        <span className="text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-texto-verde-claro uppercase mt-1">
                            O REINO DA <br/> ARÁBIA SAUDITA
                        </span>
                        <div className="w-10 h-0.5 bg-emerald-500 rounded-full mt-2" />
                    </div>
                </div>

                <div className="max-w-xl flex flex-col items-start mt-8">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-1 bg-verde" />
                        <h3 className="text-xl uppercase tracking-[0.25em] text-verde font-extrabold">
                            Bem-vindo à
                        </h3>
                    </div>
                    <h2 className="font-serif text-5xl sm:text-7xl text-texto-claro font-light tracking-tight leading-tight">
                        Arábia Saudita
                    </h2>
                    <p className="text-texto-apagado text-sm sm:text-base mt-4 leading-relaxed max-w-md">
                        {/* tem que arrumar a sombra onde fica esse p */}
                        Um país de história milenar, paisagens deslumbrantes, cultura rica e um futuro que brilha cada vez mais.
                    </p>
                    <button className="mt-8 flex items-center gap-3 px-8 py-3 rounded-full border-4 border-verde text-verde hover:bg-verde/10 transition-all font-bold">
                        Explore o Reino <span><GoArrowRight className="stroke-[1.5]"/></span>
                    </button>
                </div>
            </div>
        </section>

        </>
    )
}
