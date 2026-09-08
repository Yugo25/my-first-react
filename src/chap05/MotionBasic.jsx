import { motion, MotionConfig } from 'motion/react';

export default function MotionBasic() {
    return (
        <MotionConfig transition={{ duration: 1, type: 'spring', bounce: 0.5 }}>
            <motion.img src="/images/logo.jpg" alt="WINGS Project"
            initial={{ x: '100vw' }} 
            animate={{ x: '40vw' }}/>
        </MotionConfig>
    );
}