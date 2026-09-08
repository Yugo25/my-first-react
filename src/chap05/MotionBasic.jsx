import { motion } from 'motion/react';

export default function MotionBasic() {
    return (
        <div>
            <motion.img src="/images/logo.jpg" alt="WINGS Project"
            initial={{ x: '100vw' }} animate={{ x: '40vw' }}
            transition={{ duration: 2 }} />
        </div>
    );
}