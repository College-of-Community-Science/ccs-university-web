import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Navbar.module.scss'

import logo from '../../assets/images/logo.png'

export default function Navbar () {
    const [useStyle, setStyle] = useState(false);
    const handleScroll = () =>{
        if(window.scrollY >= 20){
            setStyle(true);
        }
        else{
            setStyle(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <nav className={`${styles.navContainer} ${useStyle && styles.scrolled}`}>
            <Link href="#" className={styles.logo}>
                <Image src={logo} alt="COLLEGE OF COMMUNITY SCIENCE"/>
            </Link>
        </nav>
    )
}