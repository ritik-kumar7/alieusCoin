import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorMainRef = useRef(null);
    const cursorTrailRef = useRef(null);
    const animationFrameRef = useRef(null);

    // Scroll reveal animation
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -20px 0px'
        };

        const revealCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0)';
                }
            });
        };

        const observer = new IntersectionObserver(revealCallback, observerOptions);

        const timer = setTimeout(() => {
            const animatedElements = document.querySelectorAll(`
                .feature-card,
                .service-card,
                .about-item,
                .distribution-item,
                .token-info-item,
                .roadmap-block,
                .accordion-item,
                .ps-column,
                .whitepaper-content,
                .section-header
            `);

            animatedElements.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

                if (isInViewport) {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.05}s`;

                    requestAnimationFrame(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    });
                } else {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                    observer.observe(el);
                }
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    // Spotlight glow effect on cards
    useEffect(() => {
        const setupSpotlightEffect = () => {
            const cards = document.querySelectorAll(`
                .feature-card,
                .service-card,
                .about-item,
                .distribution-item,
                .token-info-item,
                .roadmap-block,
                .accordion-item,
                .calculator-card,
                .ps-column
            `);

            cards.forEach((card) => {
                // Create spotlight overlay
                const spotlight = document.createElement('div');
                spotlight.className = 'card-spotlight';
                card.style.position = 'relative';
                card.appendChild(spotlight);

                const handleMouseMove = (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    spotlight.style.opacity = '1';
                    spotlight.style.background = `
                        radial-gradient(
                            600px circle at ${x}px ${y}px,
                            rgba(0, 245, 255, 0.15),
                            rgba(191, 0, 255, 0.08) 40%,
                            transparent 60%
                        )
                    `;
                };

                const handleMouseLeave = () => {
                    spotlight.style.opacity = '0';
                };

                card.addEventListener('mousemove', handleMouseMove);
                card.addEventListener('mouseleave', handleMouseLeave);
            });
        };

        // Setup after DOM is ready
        const timer = setTimeout(setupSpotlightEffect, 400);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    // Custom cursor effect
    useEffect(() => {
        const cursorMain = cursorMainRef.current;
        const cursorTrail = cursorTrailRef.current;

        if (!cursorMain || !cursorTrail) return;

        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursorMain.style.left = `${mouseX}px`;
            cursorMain.style.top = `${mouseY}px`;
        };

        const animateTrail = () => {
            const speed = 0.12;
            trailX += (mouseX - trailX) * speed;
            trailY += (mouseY - trailY) * speed;

            cursorTrail.style.left = `${trailX}px`;
            cursorTrail.style.top = `${trailY}px`;

            animationFrameRef.current = requestAnimationFrame(animateTrail);
        };

        const handleMouseEnter = () => {
            cursorMain.classList.add('hovering');
            cursorTrail.classList.add('hovering');
        };

        const handleMouseLeave = () => {
            cursorMain.classList.remove('hovering');
            cursorTrail.classList.remove('hovering');
        };

        document.addEventListener('mousemove', handleMouseMove);
        animateTrail();

        const attachHoverListeners = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, input, textarea, .feature-card, .service-card, .about-item, .distribution-item, .token-info-item, .roadmap-block, .accordion-item, .logo-wrap, .social-links a, .ps-item, [data-cursor-hover]'
            );

            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            // Magnetic effect for buttons
            const magneticElements = document.querySelectorAll('.btn-primary, .btn-outline, .get-started-btn, .bsc-btn, .download-btn, .purchase-btn, .login-btn');

            magneticElements.forEach((el) => {
                const handleMagneticMove = (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;

                    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
                };

                const handleMagneticLeave = () => {
                    el.style.transform = '';
                };

                el.addEventListener('mousemove', handleMagneticMove);
                el.addEventListener('mouseleave', handleMagneticLeave);
            });
        };

        setTimeout(attachHoverListeners, 300);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={cursorMainRef} className="cursor-main" />
            <div ref={cursorTrailRef} className="cursor-trail" />
        </>
    );
};

export default CustomCursor;
