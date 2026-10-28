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

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                
            </div>
        </section>

        </>
    )
}
