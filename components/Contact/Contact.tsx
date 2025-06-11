import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Instagram, Youtube, Mail } from "lucide-react";
import { Guitar } from "lucide-react";

function Contact() {
  return (
    <section className="grid justify-items-center py-20 md:py-32 bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <Guitar className="absolute top-20 left-10 h-32 w-32 text-amber-400 transform rotate-12" />
        <Music className="absolute bottom-20 right-20 h-24 w-24 text-orange-400 transform -rotate-12" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <Badge
              variant="secondary"
              className="bg-amber-900 text-amber-200 border-amber-700"
            >
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Create
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Something Beautiful
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Whether you're interested in collaborations, bookings, or just
              want to connect about music and art, I'd love to hear from you.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-slate-300 text-sm mb-4">
                  For bookings and collaborations
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900"
                >
                  <a href="mailto:Kike.vivaldyguitar@gmail.com" target="_blank" rel="noopener noreferrer">Send Message</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardContent className="p-6 text-center">
                <Instagram className="h-8 w-8 text-purple-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Instagram</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Daily inspiration and updates
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  <a href="https://www.instagram.com/kike_vivaldy" target="_blank" rel="noopener noreferrer">Follow</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <Youtube className="h-8 w-8 text-red-400 mx-auto mb-4" />
                <h3 className="font-bold mb-2">YouTube</h3>
                <p className="text-slate-300 text-sm mb-4">
                  Subscribe for new releases
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900"
                >
                  <a href="https://www.youtube.com/@kikevivaldy" target="_blank" rel="noopener noreferrer">Subscribe</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              "No busco ser virtuoso. Busco que alguien cierre los ojos al
              escucharme y se sienta vivo."
            </p>
            <p className="text-amber-400 font-medium mt-2">- Kike Vivaldy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
