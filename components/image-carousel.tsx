"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  alt: string
  className?: string
}

export function ImageCarousel({ images, alt, className = "" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) {
    return <img src="/placeholder.svg" alt={alt} className={className} />
  }

  if (images.length === 1) {
    return <img src={images[0] || "/placeholder.svg"} alt={alt} className={className} />
  }

  const goToPrevious = (e: React.MouseEvent) => {
    console.log("[v0] Previous button clicked")
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = (e: React.MouseEvent) => {
    console.log("[v0] Next button clicked")
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number, e: React.MouseEvent) => {
    console.log("[v0] Dot clicked for index:", index)
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex(index)
  }

  return (
    <div className="relative group">
      <img
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className={className}
      />

      {/* Navigation Arrows */}
      <Button
        variant="secondary"
        size="sm"
        className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-8 p-0 z-20 pointer-events-auto"
        onClick={goToPrevious}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      <Button
        variant="secondary"
        size="sm"
        className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-8 p-0 z-20 pointer-events-auto"
        onClick={goToNext}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20 pointer-events-auto">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={(e) => goToSlide(index, e)}
            onMouseDown={(e) => e.stopPropagation()}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
