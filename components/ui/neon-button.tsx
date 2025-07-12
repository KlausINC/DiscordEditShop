import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"
import { motion } from "framer-motion"

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export function NeonButton({ 
  children, 
  className, 
  variant = "primary",
  size = "md",
  ...props 
}: NeonButtonProps) {
  const baseClasses = "relative font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75",
    secondary: "bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg shadow-gray-500/50 hover:shadow-gray-500/75",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}