'use client';

import { Guitar } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-8 bg-slate-950 text-slate-400">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Guitar className="h-6 w-6 text-amber-400" />
              <span className="font-bold text-white">Kike Vivaldy</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Kike Vivaldy. All rights reserved.
              Made with ❤️ and music by <a href="https://tuliosalvatierra.com">Tulio Salvatierra</a>.
            </p>
          </div>
        </div>
      </footer>
    )
}