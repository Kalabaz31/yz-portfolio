import React, { useEffect, useState } from 'react'

const TypingText = ({ texts, fastDelay, slowDelay }) => {

    const [revealedLetters, setRevealedLetters] = useState(0);
    const [direction, setDirection] = useState(true)
    const [dynamicTextIndex, setDynamicTextIndex] = useState(1)
    const [intervalDelay, setIntervalDelay] = useState(slowDelay)



    useEffect(() => {
        const interval = setInterval(() => {


            if (revealedLetters < 0) {
                setDynamicTextIndex(prev =>
                    (prev + 1) % texts.length
                )
                setDirection(true)
                setIntervalDelay(slowDelay)
            } else if (revealedLetters >= texts[dynamicTextIndex].length + 10) {
                setDirection(false)
                setIntervalDelay(fastDelay)
            }

            setRevealedLetters(prev => direction ? prev + 1 : prev - 1)
        }, intervalDelay);
        return () => clearInterval(interval)
    }, [revealedLetters]);
    return (
        <span className={`after:bg-stone-900 after:content-["|"] ${revealedLetters > texts[dynamicTextIndex].length ? "after:animate-[ping_0.7s_ease-in-out_infinite]" : ""} `}>
            {texts[dynamicTextIndex].substring(0, revealedLetters < 0 ? 0 : revealedLetters)}
        </span>
    )
}

export default TypingText