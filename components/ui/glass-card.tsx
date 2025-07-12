import { cn } from "@/lib/utils"
import { HTMLAttributes } from "react"

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "backdrop-blur-md bg-black/20 border border-purple-500/20 rounded-xl p-6",
        "shadow-2xl shadow-purple-500/10",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}