"use client"

import { useTheme } from "next-themes"

export function BackgroundGrid() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${
            isDark ? "rgba(120, 120, 255, 0.1)" : "rgba(120, 120, 255, 0.15)"
          } 1px, transparent 0)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "-19px -19px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${
            isDark ? "rgba(120, 120, 255, 0.1)" : "rgba(120, 120, 255, 0.15)"
          } 1px, transparent 0)`,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0",
        }}
      />
    </div>
  )
}
