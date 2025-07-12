"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Upload, Settings, Download, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "1. Upload Your Content",
    description: "Share your Discord videos, music, and specific editing requirements through our secure upload system."
  },
  {
    icon: Settings,
    title: "2. Professional Editing",
    description: "Our skilled editors craft your content with premium effects, transitions, and audio enhancement."
  },
  {
    icon: CheckCircle,
    title: "3. Review & Approve",
    description: "Preview your edited content and request any revisions to ensure it meets your expectations."
  },
  {
    icon: Download,
    title: "4. Download & Enjoy",
    description: "Receive your high-quality edited videos ready for sharing on Discord and social media."
  }
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            How It <span className="text-purple-400">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our streamlined process ensures you get professional results quickly and efficiently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Connection lines for desktop */}
        <div className="hidden lg:block relative -mt-32 mb-16">
          <div className="absolute top-8 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400"></div>
          <div className="absolute top-8 left-2/4 w-1/4 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400"></div>
          <div className="absolute top-8 left-3/4 w-1/4 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400"></div>
        </div>
      </div>
    </section>
  )
}