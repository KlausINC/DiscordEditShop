import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-purple-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">VE</span>
              </div>
              <span className="text-white font-bold">Video Editor Pro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional Discord video editing services and premium digital assets for content creators.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/custom" className="text-gray-400 hover:text-purple-400 transition-colors">Custom Edits</Link></li>
              <li><Link href="/packs" className="text-gray-400 hover:text-purple-400 transition-colors">Edit Packs</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-purple-400 transition-colors">Project Files</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-purple-400 transition-colors">All Products</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-gray-400 hover:text-purple-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="text-gray-400 hover:text-purple-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/discord" className="text-gray-400 hover:text-purple-400 transition-colors">Discord Server</Link></li>
              <li><Link href="/dashboard" className="text-gray-400 hover:text-purple-400 transition-colors">Dashboard</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-purple-500/20" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Video Editor Pro. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}