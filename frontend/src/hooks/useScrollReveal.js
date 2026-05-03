import { useEffect } from 'react'

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .text-zoom')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
