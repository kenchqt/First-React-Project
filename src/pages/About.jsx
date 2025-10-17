import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function About() {
  const [lines, setLines] = useState([])
  const [typedCmd, setTypedCmd] = useState('')
  const [cmdDone, setCmdDone] = useState(false)
  const [lockTop, setLockTop] = useState(true)
  const termRef = useRef(null)
  const profile = [
    ' ',
    'Name: Kench Gervin Lawas',
    'Role: Web Developer',
    'Motto: "Code it clean, make it mean."',
    'Skills: React, JavaScript, CSS, HTML, Java, PHP, Laravel',
  ]

  // Type the command first, then reveal remaining lines
  useEffect(() => {
    let cancelled = false
    const cmd = '> cat Kench_Profile.txt'
    setLines([])
    setTypedCmd('')
    let idx = 0
    const step = () => {
      if (cancelled) return
      if (idx <= cmd.length) {
        setTypedCmd(cmd.slice(0, idx))
        idx += 1
        setTimeout(step, 70)
      } else {
        setCmdDone(true)
        const el = termRef.current
        if (el) { el.scrollTop = 0 }
        setLockTop(true)
        // after command is fully typed, print lines sequentially
        let i = 0
        const addNext = () => {
          if (cancelled || i >= profile.length) return
          setLines(prev => {
            const next = [...prev, profile[i]]
            // keep view anchored to top for first line
            const el2 = termRef.current
            if (el2 && next.length === 1) el2.scrollTop = 0
            if (next.length === 1) {
              // release scroll after first line rendered
              setTimeout(() => setLockTop(false), 150)
            }
            return next
          })
          i += 1
          setTimeout(addNext, 700)
        }
        setTimeout(addNext, 300)
      }
    }
    step()
    return () => { cancelled = true }
  }, [])

  // While lockTop is true, keep scroll pinned to top
  useEffect(() => {
    if (!lockTop) return
    const el = termRef.current
    if (el) el.scrollTop = 0
  }, [lockTop, lines])

  

  return (
    <section className="page about">
      <div className="container">
        <h1>Kench_Profile.txt</h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <motion.div
              className="relative p-[3px] rounded-2xl"
              style={{ background: 'linear-gradient(120deg, rgba(0,255,255,0.6), rgba(102,178,255,0.4))' }}
              animate={{ boxShadow: [
                '0 8px 28px rgba(0,255,255,0.15)',
                '0 14px 34px rgba(102,178,255,0.18)',
                '0 8px 28px rgba(0,255,255,0.15)'
              ] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.img
                src="/images/image.png"
                alt="Kench chibi avatar"
                className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-2xl bg-[#0f0f10]"
                initial={{ y: 0, rotate: 0 }}
                animate={{ y: [0, -6, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.04 }}
              />
              <div className="pointer-events-none absolute -inset-3 rounded-3xl blur-2xl opacity-40" style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,255,255,0.35), transparent 60%)' }} />
            </motion.div>
          </div>
          <div className="w-full md:flex-1 flex md:justify-start">
            <div ref={termRef} className="w-full md:w-[770px] h-[260px] max-h-[260px] overflow-y-auto bg-[#0f0f0f]/90 border border-[#1a1a1a] rounded-xl shadow-[0_12px_34px_rgba(0,0,0,0.4)] p-4 box-border">
              <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="font-mono text-cyan-300">
                {typedCmd}{!cmdDone && <span className="caret">|</span>}
              </motion.div>
              {lines.map((l, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: 0.05 }} className="font-mono text-cyan-200">
                  {l}{idx === lines.length - 1 && <span className="caret">|</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


