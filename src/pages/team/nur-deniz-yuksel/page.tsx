import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const NurDenizYukselPage = () => {
  const member = {
    name: 'Psk. Nur Deniz Yüksel',
    title: 'Psikolog',
    specialties: ['Bireysel Terapi', 'Çift Terapisi', 'Cinsel Terapi', 'EMDR', 'Ergen Danışmanlığı'],
    education: 'Nuh Naci Yazgan Üniversitesi Psikoloji Bölümü',
    experience: "2019'dan beri",
    description: "Psikoterapi sürecinde ağırlıklı olarak Şema Terapi, Bilişsel Davranışçı Terapi, EMDR Terapisi; cinsel terapi süreçlerinde Seksofonksiyonel Cinsel Terapi ekollerini kullanmaktadır. Halihazırda terapi eğitimlerine ve süpervizyonlara devam etmektedir.",
    image: 'https://readdy.ai/api/search-image?query=professional%20turkish%20female%20psychologist%20in%20her%20thirties%20wearing%20elegant%20business%20attire%20warm%20smile%20confident%20posture%20in%20modern%20office%20setting%20with%20soft%20natural%20lighting%20cream%20tones%20portrait%20photography&width=600&height=800&seq=team001&orientation=portrait',
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-2">
                    {member.name}
                  </h1>
                  <p className="font-sans text-lg text-olive font-medium">
                    {member.title}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-graduation-cap-line text-olive text-xl mt-1"></i>
                    <div>
                      <p className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide">
                        Eğitim
                      </p>
                      <p className="font-sans text-base text-darkgray">
                        {member.education}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-briefcase-line text-olive text-xl mt-1"></i>
                    <div>
                      <p className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide">
                        Deneyim
                      </p>
                      <p className="font-sans text-base text-darkgray">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="font-sans text-base text-darkgray/80 leading-relaxed">
                  {member.description}
                </p>

                <div className="space-y-3">
                  <p className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide">
                    Uzmanlık Alanları
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-4 py-2 bg-olive/10 text-darkgray rounded-full font-sans text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/905403251525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Randevu Al</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NurDenizYukselPage;
