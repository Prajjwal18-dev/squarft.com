import logo from './assets/logo.png';
import img1 from './assets/img1.png';

const ListPropertyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const CommissionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const SmartSellingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l-1.217 4.432 4.515-1.187z" />
    </svg>
);


// --- Header Component ---
const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className='flex justify-center items-center'>
            <span className=''><img src={logo} alt="" className='w-20'/></span>    
            <h1 className="text-2xl font-bold text-gray-800">
              Squar <span className="text-indigo-600">Ft</span>
            </h1></div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgv9mayna30wmf-XCYQ39-hy5j_WSZadFTmbN5ToIgmdKI2w/viewform?usp=header " target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                Join as Broker
            </a>
        </div>
    </header>
);

// --- Hero Section Component ---
const HeroSection = () => (
    <section id="home" className="pt-32 pb-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <div className="relative w-full max-w-4xl mx-auto">
                
                
                

                <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
                    Join the Future of Real Estate Brokerage – <span className="text-indigo-600">Early Access</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-8">
                    With SquarFt Broker App, simply list the property – we take care of selling. You earn commission hassle-free.
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgv9mayna30wmf-XCYQ39-hy5j_WSZadFTmbN5ToIgmdKI2w/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                    Join as Broker
                </a>
            </div>
        </div>
    </section>
);

const ImageSection = () => (
  <div>
    <img src={img1} alt="Image 1" className='ml-6 md:ml-36'/>

  </div>
);




// --- About Section ---
const AboutSection = () => (
    <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About SquarFt</h3>
            <div className="flex justify-center">
                 <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                    SquarFt Broker App is designed for brokers who want simplicity and growth. Just list properties, and our smart system helps you sell faster. You focus on clients, we handle the rest – ensuring you get your commissions on time.
                </p>
            </div>
        </div>
    </section>
);

// --- Why Join Us Section ---
const WhyJoinUsSection = () => {
    const features = [
        {
            icon: <ListPropertyIcon />,
            title: "Simple Property Listing",
            description: "Easily upload and manage your property listings with our intuitive interface."
        },
        {
            icon: <CommissionIcon />,
            title: "Guaranteed Commission",
            description: "Our transparent process ensures you receive your commission promptly upon sale."
        },
        {
            icon: <SmartSellingIcon />,
            title: "Smart Selling Support",
            description: "Leverage our smart tools and wide network to close deals faster than ever."
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Join Us?</h2>
                    <p className="text-lg text-gray-500 mt-2">Unlock benefits designed for your success.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="mb-6 p-4 inline-block bg-indigo-100 rounded-full">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- How It Works Section ---
const HowItWorksSection = () => {
    const steps = [
        { number: "01", title: "Register via Google Form", description: "Fill out a quick form to join our exclusive early access list." },
        { number: "02", title: "Get Early Access to SquarFt App", description: "Receive your invitation to download and explore the app before anyone else." },
        { number: "03", title: "List Properties & Earn", description: "Start listing properties effortlessly and begin earning your commission." }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How It Works</h2>
                    <p className="text-lg text-gray-500 mt-2">A simple, three-step process to get you started.</p>
                </div>
                <div className="relative">
                    {/* Dotted line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-200 " style={{transform: 'translateY(-50%)'}}></div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-600 font-extrabold text-2xl rounded-full border-2 border-indigo-200 shadow-md">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                <p className="text-gray-500">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- CTA Section ---
const CTASection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl shadow-2xl p-10 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Be the First to Join – Limited Early Access!</h2>
                <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">Don't miss out on the opportunity to revolutionize your brokerage business. Secure your spot today.</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgv9mayna30wmf-XCYQ39-hy5j_WSZadFTmbN5ToIgmdKI2w/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-indigo-600 font-bold py-4 px-10 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                    Get Early Access Now
                </a>
            </div>
        </div>
    </section>
);


// --- Contact Section ---
const ContactSection = () => (
    <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="https://wa.me/918224004000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300 w-full md:w-auto">
                    <WhatsAppIcon />
                    Chat with Us on WhatsApp
                </a>
                <div className="text-gray-600">
                    <p><strong>Email:</strong> <a href="mailto:squarft.com@gmail.com" className="text-indigo-600 hover:underline">squarft.com@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+918224004000" className="text-indigo-600 hover:underline">+91 8224004000</a></p>
                </div>
            </div>
        </div>
    </section>
);

// --- Footer Component ---
const Footer = () => (
    <footer className="bg-gray-800 text-white py-8 ">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} SquarFt. All rights reserved.</p>
        </div>
    </footer>
);

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <ImageSection/>
        <AboutSection />
        <HowItWorksSection />
        <CTASection />
        <WhyJoinUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
