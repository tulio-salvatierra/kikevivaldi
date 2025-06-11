import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';


export default function About() {
  return (
      <section className="grid place-content-center py-20 md:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-amber-900 text-amber-200 border-amber-700"
                >
                  About the Artist
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold">
                  A Journey Through
                  <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Sound & Soul
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg">
                  Nací entre brisas del Caribe y ritmos latinos, en Cartagena de
                  Indias, donde el mar y la música viven juntos. La guitarra
                  llegó a mis manos cuando era apenas un niño, y desde entonces,
                  se volvió mi forma de entender el mundo. No la toco: la
                  escucho hablar.
                </p>
                <p>
                  Con el tiempo, encontré en el flamenco un idioma que sentía
                  propio, aunque nací lejos de Andalucía. Lo fusioné con mis
                  raíces del Caribe y descubrí algo nuevo: Nova Flamenco. Viajé,
                  toqué en calles, restaurantes y escenarios íntimos. Cada
                  lugar, una historia. Cada nota, una emoción real.
                </p>
                <p>
                  No busco ser virtuoso. Busco que alguien cierre los ojos al
                  escucharme y se sienta vivo. Quiero que mi música cruce
                  fronteras, derrita el silencio y diga lo que a veces no
                  podemos decir con palabras. Si logro eso, ya hice mi parte.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-amber-400">10+</div>
                  <div className="text-sm text-slate-400">Years Creating</div>
                </div>
                <div className="text-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <div className="text-2xl font-bold text-orange-400">3</div>
                  <div className="text-sm text-slate-400">Albums Released</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="/about1.jpeg"
                    width="200"
                    height="250"
                    alt="Kike performing"
                    className="rounded-lg object-cover w-full"
                  />
                  <Image
                    src="/about2.jpeg"
                    width="200"
                    height="200"
                    alt="Guitar close-up"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/about3.jpeg"
                    width="200"
                    height="200"
                    alt="Studio session"
                    className="rounded-lg object-cover w-full"
                  />
                  <Image
                    src="/about4.jpeg"
                    width="200"
                    height="250"
                    alt="Live performance"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              </div>
              {/* Artistic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-30 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
