/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ejl267wWycm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect } from "react"

export default function Component() {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const beats = Math.floor((now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()) / 86.4)
      setTime(beats)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="dark flex items-center justify-center h-screen bg-background">
      <div className="bg-card rounded-lg shadow-lg p-8 animate-pulse">
        <div className="text-9xl font-bold text-card-foreground">{time}.beat</div>
      </div>
    </div>
  )
}
