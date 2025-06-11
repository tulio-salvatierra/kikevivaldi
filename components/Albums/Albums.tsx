import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Headphones, Music, Youtube, ExternalLink, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Albums() {
  return (
    <section className="grid place-items-center py-20 md:py-32 bg-gradient-to-br from-amber-50 to-orange-100">
    <div className="container px-4 md:px-6">
      <div className="text-center space-y-4 mb-16">
        <Badge
          variant="secondary"
          className="bg-amber-100 text-amber-800 border-amber-200"
        >
          Music & Media
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          Experience the
          <span className="block bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
            Musical Journey
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Discover Kike's discography and connect with his artistic vision
          through various platforms.
        </p>
      </div>

      {/* Albums */}
      <div className="grid gap-8 md:grid-cols-3 mb-16">
        <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
              <Image
                src="/sgj.webp?height=300&width=300"
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
            <h3 className="font-bold text-lg text-slate-800 mb-2">
              Smooth Gipsy Jazz
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              A journey through Afro-Caribbean rhythms and Spanish guitar
              traditions.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">
                <Headphones className="h-4 w-4 mr-2" />
                <a href="https://open.spotify.com/album/4ZYSyiGSJRbxGCNhuE0Y8Z?si=vEfBJZAuQ-Clz3zOdMnAPA">Listen</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-orange-200 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
              <Image
                src="/nf.webp?height=300&width=300"
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
            <h3 className="font-bold text-lg text-slate-800 mb-2">
              Nova Flamenco
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Minimalist electro meets passionate flamenco in this
              groundbreaking album.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">
                <Headphones className="h-4 w-4 mr-2" />
                <a href='https://open.spotify.com/album/2VdoQJk1Xd0DCAdLRkCy8k?si=YADH3ZVrSI6HiLXgIS_0_w'>Listen</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 border-red-200 bg-white/80 backdrop-blur">
          <CardContent className="p-6">
            <div className="aspect-square mb-4 relative overflow-hidden rounded-lg">
              <Image
                src="/csb.webp?height=300&width=300"
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
            <h3 className="font-bold text-lg text-slate-800 mb-2">
              City of Suicide Birds
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              The latest exploration of gipsy philosophy through
              contemporary soundscapes.
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">
                <Headphones className="h-4 w-4 mr-2" />
                <a href="https://open.spotify.com/album/54OjSXmOdwGJufMWsXu8Rp?si=z7hBqpRpRt6s4GwYzC1EDg">Listen</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Links */}
      <div className="grid place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="https://youtube.com/@oswaldocamargo9378?si=kAG5si1KwxZYhCNZ" className="group">
          <Card className="hover:shadow-lg transition-all duration-300 border-red-200 bg-gradient-to-br from-red-50 to-red-100">
            <CardContent className="p-6 text-center">
              <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-800 mb-2">YouTube</h3>
              <p className="text-slate-600 text-sm">
                Watch live performances and music videos
              </p>
              <ExternalLink className="h-4 w-4 text-red-600 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </Link>

        <Link href="https://www.tiktok.com/@.vivaldy" className="group">
          <Card className="hover:shadow-lg transition-all duration-300 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <Music className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-800 mb-2">TikTok</h3>
              <p className="text-slate-600 text-sm">
                High-quality downloads and exclusive content
              </p>
              <ExternalLink className="h-4 w-4 text-blue-600 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </Link>


        <Link href="https://www.threads.com/@kike_vivaldy?xmt=AQF0n-GHFWa6zZ4NcWIgQimuUykEqMBtE6WWaMhF2fd9j3w" className="group">
          <Card className="hover:shadow-lg transition-all duration-300 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <Instagram className="h-12 w-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-800 mb-2">Instagram</h3>
              <p className="text-slate-600 text-sm">
                Behind-the-scenes and daily inspiration
              </p>
              <ExternalLink className="h-4 w-4 text-purple-600 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  </section>
  )
}

