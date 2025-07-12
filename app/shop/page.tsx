"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, Download, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - replace with actual API call
const products = [
  {
    id: 1,
    name: "Ultimate Discord Edit Pack",
    category: "PACK",
    price: 29.99,
    rating: 4.9,
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["50+ Transitions", "20 Text Animations", "VIP Effects"],
    bestseller: true
  },
  {
    id: 2,
    name: "Gaming Montage Template",
    category: "PROJECT",
    price: 19.99,
    rating: 4.8,
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["After Effects", "4K Ready", "Music Included"]
  },
  {
    id: 3,
    name: "Neon Effects Pack",
    category: "PACK",
    price: 24.99,
    rating: 4.7,
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["30 Neon Effects", "Color Variants", "HD Quality"]
  },
  {
    id: 4,
    name: "Intro Template Bundle",
    category: "PROJECT",
    price: 34.99,
    rating: 4.9,
    image: "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["10 Intro Templates", "Customizable", "Multiple Formats"]
  },
  {
    id: 5,
    name: "Sound Effects Pack",
    category: "PACK",
    price: 15.99,
    rating: 4.6,
    image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["100+ SFX", "High Quality", "Royalty Free"]
  },
  {
    id: 6,
    name: "Custom Edit Service",
    category: "CUSTOM",
    price: 49.99,
    rating: 5.0,
    image: "https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=400",
    features: ["24h Delivery", "Unlimited Revisions", "Premium Quality"]
  }
]

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("ALL")
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "ALL" || product.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      default:
        return b.bestseller ? 1 : -1
    }
  })

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Shop <span className="text-purple-400">Products</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Browse our collection of premium video editing products and services
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black/50 border-purple-500/50 text-white placeholder-gray-400"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48 bg-black/50 border-purple-500/50 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-black border-purple-500/50">
                  <SelectItem value="ALL">All Categories</SelectItem>
                  <SelectItem value="PACK">Edit Packs</SelectItem>
                  <SelectItem value="PROJECT">Project Files</SelectItem>
                  <SelectItem value="CUSTOM">Custom Services</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 bg-black/50 border-purple-500/50 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-black border-purple-500/50">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </GlassCard>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="group hover:border-purple-500/40 transition-all duration-300 overflow-hidden h-full">
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

                <div className="space-y-4 flex-1 flex flex-col">
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

                  <ul className="space-y-1 flex-1">
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
                            <span>Order</span>
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

        {/* No results */}
        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <GlassCard>
              <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </div>
  )
}