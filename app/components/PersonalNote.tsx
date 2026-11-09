import React from 'react'
import { LuPenLine } from 'react-icons/lu'

interface PersonalNoteProps {
  children?: React.ReactNode
}

export function PersonalNote({ children }: PersonalNoteProps) {
  const badge = (
    <span
      className="not-italic inline-flex items-center gap-1 px-1.5 py-0.5 mx-1 -top-0.5 relative text-[0.68rem] font-semibold tracking-wider uppercase rounded-md bg-amber-500/10 dark:bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/25 dark:border-amber-500/35 select-none font-mono"
      title="Personal diary note by the author (Shanaka / Ven. Gnanaloka)"
    >
      <LuPenLine className="w-3 h-3 opacity-80" aria-hidden="true" />
      <span>Personal Note</span>
    </span>
  )

  if (!children) {
    return badge
  }

  return (
    <span className="personal-note inline">
      {badge}
      <span className="italic text-neutral-700 dark:text-neutral-300">
        {children}
      </span>
    </span>
  )
}

