import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-olive/5 to-gold/10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-olive/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white px-5 py-2 rounded-full shadow-sm"
            >
              <div className="w-2 h-2 bg-olive rounded-full"></div>
              <span className="font-sans text-sm text-darkgray font-medium">
                Profesyonel Psikolojik Destek
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight"
            >
              Ruhunuza
              <br />
              <span className="text-olive">Işık Tutun</span>
            </motion.h1>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="font-sans text-lg text-darkgray/80 leading-relaxed">
              Bilimsel, etik ve güvenli psikolojik destek ile hayatınıza yeniden anlam katın
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg text-center cursor-pointer whitespace-nowrap"
              >
                Hemen Randevu Al
              </a>
              <Link
                to="/services"
                className="bg-transparent text-darkgray px-8 py-4 rounded-full font-sans text-base font-medium border-2 border-darkgray hover:bg-darkgray hover:text-white transition-all duration-300 text-center cursor-pointer whitespace-nowrap"
              >
                Hizmetlerimizi Keşfedin
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://readdy.ai/api/search-image?query=peaceful%20therapy%20room%20with%20comfortable%20seating%2C%20natural%20light%20streaming%20through%20windows%2C%20indoor%20plants%2C%20warm%20and%20calming%20atmosphere%2C%20professional%20counseling%20space%20with%20soft%20neutral%20tones%20and%20minimalist%20design%2C%20creating%20sense%20of%20safety%20and%20tranquility&width=1400&height=600&seq=hero-therapy-room&orientation=landscape"
            alt="Arges Psikoloji Terapi Ortamı"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
