import { useRef } from 'react';
import { BannerMember, BannerNew, BannerEnv } from './Banners.jsx';
import './Banners.css';

export default function SelectComp () {
    // Decide what to show by random num
    const components = [BannerMember, BannerNew, BannerEnv];
    
}