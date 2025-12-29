import type React from "react"

export interface NavigationItem {
  label: string
  href: string
}

export interface Benefit {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface Step {
  icon: React.ComponentType<{ className?: string }>
  step: string
  title: string
  description: string
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  workingHours: {
    weekdays: string
    saturday: string
    sunday: string
  }
}

export interface Statistic {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface Project {
  title: string
  description: string
  category: string
  image?: string
}

export interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  cta: string
}

export interface Testimonial {
  quote: string
  author: string
  company: string
  role?: string
}

export interface BlogPost {
  title: string
  excerpt: string
  date: string
  category: string
  image?: string
}

