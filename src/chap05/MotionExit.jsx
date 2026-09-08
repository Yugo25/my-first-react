import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function MotionExit() {
    const [show, setShow] = useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button>
            <AnimatePresence>
                {show && (
                    <motion.img src="/image/logo.jpg" alt="WINGS Project"
                    initial={{ opcacity: 0 }} animate={{ opacity: 1 }}
                    exit={{ opacity : 0 }} transition={{ duration : 2 }} />
                )}
            </AnimatePresence>
        </div>
    );
}