import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

// Adds scroll-triggered reveals and a scroll progress/parallax variable to every page.
const SELECTORS = 'main section h2, main .eyebrow, main .solution-card, main .corridor, main .leader-card, main .principles-row>div, main .connectivity-note, main .connectivity-links span, main blockquote, main .value, main .solution-detail, main .partner-profile, main .network-canvas, main .advisors>*, main p';

export function ScrollMotion() {
  const path = useRouterState({ select: s => s.location.pathname });
  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      const max = root.scrollHeight - innerHeight;
      root.style.setProperty('--scroll', String(scrollY));
      root.style.setProperty('--scroll-progress', String(max > 0 ? scrollY / max : 0));
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => removeEventListener('scroll', onScroll);
    const els = Array.from(document.querySelectorAll<HTMLElement>(SELECTORS)).filter(el => !el.closest('.hero'));
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(el => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.setProperty('--reveal-delay', `${Math.min(siblings.indexOf(el), 6) * 90}ms`);
      el.classList.add('reveal');
      io.observe(el);
    });
    return () => { io.disconnect(); removeEventListener('scroll', onScroll); };
  }, [path]);
  return <div className="scroll-progress" aria-hidden="true" />;
}

export function GoldDrift() {
  return <div className="gold-drift" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <span key={i} style={{ left: `${(i * 37) % 100}%`, animationDelay: `${-(i * 1.7)}s`, animationDuration: `${12 + (i % 5) * 3}s` }} />)}</div>;
}
