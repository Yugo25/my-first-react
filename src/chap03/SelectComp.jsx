import { useRef } from 'react';
import { BannerMember, BannerNew, BannerEnv } from './Banners.jsx';
import './Banners.css';

export default function SelectComp () {
    // Decide what to show by random num
    const components = [BannerMember, BannerNew, BannerEnv];
    const randomIndex = useRef(Math.floor(Math.random() * components.length));
    const selectComponents = components[randomIndex.current];
    
    return (
        <div class="banner">
            <selectComponents />
        </div>
    );
}