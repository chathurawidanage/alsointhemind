'use client'

import React, { useState, useRef, useEffect, useId } from 'react'
import { createPortal } from 'react-dom'
import { LuX } from 'react-icons/lu'
import { linkSuttaText } from '../../lib/sutta-links'

interface FootnoteProps {
  id?: string | number
  number?: string | number
  title?: string
  children: React.ReactNode
}

export function Footnote({ id, number, title, children }: FootnoteProps) {
  const displayNum = number ?? id ?? 1
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState<{ top: number; left: number; placeAbove: boolean; width: number } | null>(null)
  const popoverId = useId()

  useEffect(() => {
    setMounted(true)
  }, [])

  const updatePosition = () => {
    if (!triggerRef.current) return
    const rect = triggerRef.current.getBoundingClientRect()
    const popoverWidth = Math.min(380, window.innerWidth - 32)
    const spaceAbove = rect.top
    const spaceBelow = window.innerHeight - rect.bottom
    const placeAbove = spaceAbove > 160 || spaceAbove > spaceBelow

    // Center horizontally over button, but clamp within viewport padding (16px)
    let left = rect.left + rect.width / 2 - popoverWidth / 2
    left = Math.max(16, Math.min(left, window.innerWidth - popoverWidth - 16))

    const top = placeAbove ? rect.top - 8 : rect.bottom + 8

    setCoords({
      top,
      left,
      placeAbove,
      width: popoverWidth,
    })
  }

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!isOpen) {
      updatePosition()
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (!isOpen) return

    updatePosition()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setIsOpen(false)
      }
    }

    const handleScrollOrResize = () => {
      updatePosition()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('resize', handleScrollOrResize)
    window.addEventListener('scroll', handleScrollOrResize, { passive: true })

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('resize', handleScrollOrResize)
      window.removeEventListener('scroll', handleScrollOrResize)
    }
  }, [isOpen])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={popoverId}
        aria-label={`Footnote ${displayNum}`}
        title={`View note ${displayNum}`}
        className="inline-flex items-center justify-center -top-1.5 relative mx-0.5 px-1 py-0.2 text-[0.72rem] font-semibold font-mono rounded bg-amber-500/10 hover:bg-amber-500/20 active:bg-amber-500/30 text-amber-700 dark:text-amber-400 border border-amber-500/25 dark:border-amber-500/35 hover:border-amber-500/50 transition-colors cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-amber-500/40"
      >
        [{displayNum}]
      </button>

      {isOpen && mounted && coords && createPortal(
        <div
          ref={popoverRef}
          id={popoverId}
          role="dialog"
          aria-label={title ?? `Footnote ${displayNum}`}
          style={{
            position: 'fixed',
            top: coords.placeAbove ? 'auto' : `${coords.top}px`,
            bottom: coords.placeAbove ? `${window.innerHeight - coords.top}px` : 'auto',
            left: `${coords.left}px`,
            width: `${coords.width}px`,
            zIndex: 9999,
          }}
          className="p-3.5 bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-gray-200 rounded-xl shadow-2xl border border-amber-500/25 dark:border-amber-500/35 text-sm leading-relaxed text-left animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100 dark:border-neutral-800">
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
              {title ?? `Note [${displayNum}]`}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close footnote"
            >
              <LuX className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Content */}
          <div className="text-xs sm:text-[0.84rem] text-gray-700 dark:text-gray-300 space-y-1.5 font-normal leading-relaxed">
            {linkSuttaText(children)}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
