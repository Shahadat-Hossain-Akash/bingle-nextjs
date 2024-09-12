'use client'

import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {Button} from "@/components/ui/button"
import {X} from 'lucide-react'
import Image from 'next/image'

const overlayVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: 'easeInOut'
        }
    }
}

const modalVariants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        y: 20
    },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30
        }
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
}

const contentVariants = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

export function Modal({isOpen, onClose, title, children}) {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#151618] rounded-2xl p-4 w-full max-w-md relative overflow-hidden flex flex-col"
            >
              <button
                className="absolute top-4 right-4 transition-all duration-300 hover:rotate-90 p-2 rounded-md"
                onClick={onClose}
              >
                <Image
                  src={"/assets/cancel.svg"}
                  alt="cancel"
                  width={24}
                  height={24}
                  className="stroke-zinc-100"
                />
                <span className="sr-only">Close</span>
              </button>

              <motion.h2
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl mb-6 bg-clip-text text-white"
              >
                {title}
              </motion.h2>

              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                {children}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
}

export function useModal(initialState = false) {
    const [isOpen, setIsOpen] = React.useState(initialState)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    return {isOpen, open, close}
}