import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Play, Phone, Music, MapPin } from "lucide-react";
import React from "react";



export default function Hero() {
  {console.log("./hero.jpg")}
    
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-600 rounded-full"></div>
      <div className="absolute top-40 right-20 w-24 h-24 border border-red-500 rounded-full"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-orange-400 rounded-full"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-amber-500 rounded-full"></div>
    </div>

    <div className="container px-4 md:px-6 relative z-10">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="bg-amber-100 text-amber-800 border-amber-200"
            >
              🎸 Colombian Guitar Artist
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                Kike
              </span>
              <br />
              <span className="text-slate-800">Vivaldy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
              Con un estilo único que fusiona la pasión del flamenco con la
              frescura del jazz y la música latina, Kike Vivaldy ha llevado
              el Nova Flamenco a escenarios internacionales. Su guitarra
              transmite emoción, técnica y alma, conectando con públicos de
              todas partes. Más que un músico, es un puente entre culturas.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge
              variant="outline"
              className="text-amber-700 border-amber-300"
            >
              Smooth Jazz
            </Badge>
            <Badge
              variant="outline"
              className="text-orange-700 border-orange-300"
            >
              Flamenco
            </Badge>
            <Badge
              variant="outline"
              className="text-red-700 border-red-300"
            >
              Electro Fusion
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
            >
              <Play className="mr-2 h-5 w-5" />
              <a href='https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k?si=YADH3ZVrSI6HiLXgIS_0_w'>Listen Now</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-300 text-amber-700 hover:bg-amber-50"
            >
              <Phone className="mr-2 h-5 w-5" />
              <a href="mailto:Kike.vivaldyguitar@gmail.com">Book your Concert now!</a>
            </Button>
          </div>

          <div className="flex items-center space-x-6 text-slate-600">
            <div className="flex items-center space-x-2">
              <Music className="h-5 w-5 text-amber-600" />
              <span className="text-sm">3 Albums Released</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-red-600" />
              <span className="text-sm">Midland, TX.</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <Image
            unoptimized
              src="/hero.jpg"
              width={500}
              height={600}
              alt="Kike Vivaldy with guitar"
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          
          </div>
          {/* Artistic background elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-red-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-amber-600 rounded-full mt-2"></div>
      </div>
    </div>
  </section>
    
  );
}

