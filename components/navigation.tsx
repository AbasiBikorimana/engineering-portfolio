'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { profile } from '@/content/profile';
const links=[['Projects','/projects/'],['Experience','/experience/'],['About','/about/']];
export function Navigation(){
 const menuButton=useRef<HTMLButtonElement>(null); const pathname=usePathname(); const [open,setOpen]=useState(false); const [light,setLight]=useState(false);
 useEffect(()=>{
 const sync=()=>setLight(document.documentElement.dataset.theme==='light');sync();
 const media=window.matchMedia('(prefers-color-scheme: light)');
 const system=()=>{try{if(localStorage.getItem('portfolio-theme'))return;}catch{}document.documentElement.dataset.theme=media.matches?'light':'dark';sync();};
 const storage=(event:StorageEvent)=>{if(event.key==='portfolio-theme'){const value=event.newValue;document.documentElement.dataset.theme=value==='light'||value==='dark'?value:media.matches?'light':'dark';sync();}};
 media.addEventListener('change',system);window.addEventListener('storage',storage);
 return()=>{media.removeEventListener('change',system);window.removeEventListener('storage',storage);};
 },[]);
 useEffect(()=>{setOpen(false);},[pathname]);
 function toggleTheme(){const next=!light;setLight(next);document.documentElement.dataset.theme=next?'light':'dark';try{localStorage.setItem('portfolio-theme',next?'light':'dark');}catch{}}
 return <header className="site-header" onKeyDown={e=>{if(e.key==='Escape'&&open){setOpen(false);menuButton.current?.focus();}}}><div className="nav-wrap"><Link href="/" className="brand" aria-label="Abasi Bikorimana home"><span className="brand-name">Abasi Bikorimana</span></Link>
 <nav aria-label="Main navigation" className={open?'main-nav is-open':'main-nav'} id="main-navigation">{links.map(([label,url])=><Link key={url} href={url} aria-current={pathname.startsWith(url.slice(0,-1))?'page':undefined}>{label}</Link>)}<a href={profile.resume} className="nav-resume">Resume</a></nav>
 <div className="nav-tools"><button onClick={toggleTheme} className="theme-button" aria-label={light?'Switch to dark theme':'Switch to light theme'}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{light?<path d="M20 15.1A8.4 8.4 0 018.9 4 8.4 8.4 0 1020 15.1Z"/>:<><circle cx="12" cy="12" r="4"/><path d="M12 1v3m0 16v3M1 12h3m16 0h3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></>}</svg></button><button ref={menuButton} aria-expanded={open} aria-controls="main-navigation" aria-label={open?'Close navigation':'Open navigation'} className="menu-button" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} <span aria-hidden="true">{open?'×':'☰'}</span></button></div></div></header>;
}
