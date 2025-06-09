import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Play, Instagram, Youtube, Mail, ExternalLink, Guitar, Headphones, Heart, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function KikeVivaldyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
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
                <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
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
                  Where Afro-Caribbean rhythms meet Spanish flamenco passion, creating a minimalist electro fusion that
                  speaks to the soul of freedom.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="text-amber-700 border-amber-300">
                  Smooth Jazz
                </Badge>
                <Badge variant="outline" className="text-orange-700 border-orange-300">
                  Flamenco
                </Badge>
                <Badge variant="outline" className="text-red-700 border-red-300">
                  Electro Fusion
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Listen Now
                </Button>
                <Button variant="outline" size="lg" className="border-amber-300 text-amber-700 hover:bg-amber-50">
                  <Heart className="mr-2 h-5 w-5" />
                  Follow Journey
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-slate-600">
                <div className="flex items-center space-x-2">
                  <Music className="h-5 w-5 text-amber-600" />
                  <span className="text-sm">3 Albums Released</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-sm">Colombia</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  width="500"
                  height="600"
                  alt="Kike Vivaldy with guitar"
                  className="rounded-2xl shadow-2xl object-cover"
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

      {/* About Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
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
                <Badge variant="secondary" className="bg-amber-900 text-amber-200 border-amber-700">
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
                  Born from the vibrant streets of Colombia, Kike Vivaldy's music is a testament to the power of
                  cultural fusion. His guitar speaks the ancient language of flamenco while embracing the rhythmic
                  heartbeat of Afro-Caribbean traditions.
                </p>
                <p>
                  Each composition is a meditation on freedom—freedom of expression, freedom of movement, and the
                  freedom to blend genres without boundaries. His minimalist electro fusion creates spaces where
                  traditional Spanish guitar techniques dance with modern electronic textures.
                </p>
                <p>
                  Drawing inspiration from the gipsy philosophy of nomadic creativity and the rich musical heritage of
                  his homeland, Kike crafts soundscapes that transport listeners to a place where time stands still and
                  the soul can breathe.
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
                    src="/placeholder.svg?height=250&width=200"
                    width="200"
                    height="250"
                    alt="Kike performing"
                    className="rounded-lg object-cover w-full"
                  />
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width="200"
                    height="200"
                    alt="Guitar close-up"
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width="200"
                    height="200"
                    alt="Studio session"
                    className="rounded-lg object-cover w-full"
                  />
                  <Image
                    src="/placeholder.svg?height=250&width=200"
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

      {/* Media Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">
              Music & Media
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
              Experience the
              <span className="block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                Musical Journey
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover Kike's discography and connect with his artistic vision through various platforms.
            </p>
          </div>

          {/* Albums */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width="300"
                    height="300"
                    alt="Album 1"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <Button
                    size="sm"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Raíces Libres</h3>
                <p className="text-slate-600 text-sm mb-4">
                  A journey through Afro-Caribbean rhythms and Spanish guitar traditions.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Headphones className="h-4 w-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-orange-200 bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width="300"
                    height="300"
                    alt="Album 2"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <Button
                    size="sm"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Fusión Eléctrica</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Minimalist electro meets passionate flamenco in this groundbreaking album.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Headphones className="h-4 w-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-red-200 bg-white/80 backdrop-blur">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    width="300"
                    height="300"
                    alt="Album 3"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <Button
                    size="sm"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">Alma Gitana</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The latest exploration of gipsy philosophy through contemporary soundscapes.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Headphones className="h-4 w-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Links */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="#" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-red-200 bg-gradient-to-br from-red-50 to-red-100">
                <CardContent className="p-6 text-center">
                  <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-slate-800 mb-2">YouTube</h3>
                  <p className="text-slate-600 text-sm">Watch live performances and music videos</p>
                  <ExternalLink className="h-4 w-4 text-red-600 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </Link>

            <Link href="#" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6 text-center">
                  <Music className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-slate-800 mb-2">Bandcamp</h3>
                  <p className="text-slate-600 text-sm">High-quality downloads and exclusive content</p>
                  <ExternalLink className="h-4 w-4 text-blue-600 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </Link>

            <Link href="#" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-green-200 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6 text-center">
                  <Headphones className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-slate-800 mb-2">CD Baby</h3>
                  <p className="text-slate-600 text-sm">Stream on all major platforms</p>
                  <ExternalLink className="h-4 w-4 text-green-600 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </Link>

            <Link href="#" className="group">
              <Card className="hover:shadow-lg transition-all duration-300 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6 text-center">
                  <Instagram className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-slate-800 mb-2">Instagram</h3>
                  <p className="text-slate-600 text-sm">Behind-the-scenes and daily inspiration</p>
                  <ExternalLink className="h-4 w-4 text-purple-600 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <Guitar className="absolute top-20 left-10 h-32 w-32 text-amber-400 transform rotate-12" />
          <Music className="absolute bottom-20 right-20 h-24 w-24 text-orange-400 transform -rotate-12" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-amber-900 text-amber-200 border-amber-700">
                Get in Touch
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Let's Create
                <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Something Beautiful
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Whether you're interested in collaborations, bookings, or just want to connect about music and art, I'd
                love to hear from you.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-slate-300 text-sm mb-4">For bookings and collaborations</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="p-6 text-center">
                  <Instagram className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Instagram</h3>
                  <p className="text-slate-300 text-sm mb-4">Daily inspiration and updates</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                  >
                    Follow
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 text-center">
                  <Youtube className="h-8 w-8 text-red-400 mx-auto mb-4" />
                  <h3 className="font-bold mb-2">YouTube</h3>
                  <p className="text-slate-300 text-sm mb-4">Subscribe for new releases</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900"
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                "Music is the universal language of freedom. Let's speak it together."
              </p>
              <p className="text-amber-400 font-medium mt-2">- Kike Vivaldy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Guitar className="h-6 w-6 text-amber-400" />
              <span className="font-bold text-white">Kike Vivaldy</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Kike Vivaldy. All rights reserved. Made with ❤️ and music.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
