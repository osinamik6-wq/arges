import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const WhyArgesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const features = [
    {
      icon: 'ri-heart-3-line',
      title: 'Empati Odaklı Yaklaşım',
      description: 'Her danışanımıza özel, empatik ve anlayışlı bir yaklaşım sunuyoruz',
      color: 'text-olive',
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Gizlilik Garantisi',
      description: 'Tüm görüşmeleriniz tamamen gizli ve güvenli ortamda gerçekleşir',
      color: 'text-gold',
    },
    {
      icon: 'ri-user-star-line',
      title: 'Uzman Kadro',
      description: 'Alanında deneyimli ve sertifikalı psikolog kadromuzla hizmetinizdeyiz',
      color: 'text-olive',
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Kişiye Özel Yaklaşım',
      description: 'Her bireyin benzersiz olduğunu bilerek özel terapi planları oluşturuyoruz',
      color: 'text-gold',
    },
    {
      icon: 'ri-time-line',
      title: 'Esnek Randevu Saatleri',
      description: 'Yoğun programınıza uygun esnek randevu seçenekleri sunuyoruz',
      color: 'text-olive',
    },
  ];

  // Kartları iki kez tekrarla (sonsuz kaydırma için)
  const duplicatedFeatures = [...features, ...features];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Kaydırma hızı

    const scroll = () => {
      scrollPosition += scrollSpeed;

      // Kartların toplam genişliği
      const cardWidth = 320 + 24; // 80*4 (w-80) + 24 (gap-6)
      const totalWidth = cardWidth * features.length;

      // Yarıya geldiğinde başa dön
      if (scrollPosition >= totalWidth) {
        scrollPosition = 0;
      }

      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, features.length]);

  return (
    <section className="py-20 px-6 lg:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-darkgray">Neden </span>
            <span className="text-olive">Arges Psikoloji?</span>
          </h2>
          <p className="font-sans text-base text-darkgray/60">
            Size en iyi hizmeti sunmak için buradayız
          </p>
        </motion.div>

        {/* Auto-scrolling Cards */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden pb-6 -mx-6 px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex space-x-6">
            {duplicatedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % features.length) * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 w-80 flex-shrink-0 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`${feature.color} text-5xl mb-4`}>
                  <i className={feature.icon}></i>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-darkgray mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-darkgray/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArgesSection;
