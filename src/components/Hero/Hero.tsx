import heroBg from "../../assets/saudiRhyad.jpeg"

export default function Hero(){
    return(
        <>
        <section className="relative min-h-screen w-full flex items-center bg-black overflow-hidden">
            <img 
                src={heroBg} 
                alt="Bandeira e capital da Arábia Saudita" 
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="relative z-10 max-w-8xl mx-auto px-12 w-full pt-12 -mt-70 flex justify-end">
                <div className="flex flex-col items-end text-right">
                <h3 lang="ar" dir="rtl" className="text-texto-verde-claro text-xl sm:text-2xl font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    المملكة العربية السعودية
                </h3>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] font-semibold text-texto-verde-claro uppercase mt-1">
                    O REINO DA <br/> ARÁBIA SAUDITA
                </span>
                <div className="w-10 h-0.5 bg-emerald-500 rounded-full mt-2" />
                </div>
            </div>
        </section>

        </>
    )
}
