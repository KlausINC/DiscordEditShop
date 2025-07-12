"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"
import { Badge } from "@/components/ui/badge"
import { Play, Download, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    name: "Ultimate Discord Edit Pack",
    category: "PACK",
    price: 29.99,
    rating: 4.9,
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["50+ Transitions", "20 Text Animations", "VIP Effects"],
    bestseller: true
  },
  {
    id: 2,
    name: "Gaming Montage Template",
    category: "PROJECT",
    price: 19.99,
    rating: 4.8,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["After Effects", "4K Ready", "Music Included"],
    bestseller: false
  },
  {
    id: 3,
    name: "Custom Discord Edit",
    category: "CUSTOM",
    price: 49.99,
    rating: 5.0,
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
    features: ["24h Delivery", "Unlimited Revisions", "Premium Quality"],
    bestseller: false
  }
]

export function FeaturedProducts() {
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
            Featured <span className="text-purple-400">Products</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our most popular video editing products and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                {product.bestseller && (
                  <Badge className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500">
                    Bestseller
                  </Badge>
                )}
                
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-purple-600/90">
                      {product.category}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-400 text-sm">({product.rating})</span>
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-white">
                      ${product.price}
                    </span>
                    <Link href={`/product/${product.id}`}>
                      <NeonButton size="sm" className="flex items-center space-x-2">
                        {product.category === "CUSTOM" ? (
                          <>
                            <Play className="w-4 h-4" />
                            <span>Order Now</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            <span>Get Now</span>
                          </>
                        )}
                      </NeonButton>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/shop">
            <NeonButton variant="outline" size="lg">
              View All Products
            </NeonButton>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}