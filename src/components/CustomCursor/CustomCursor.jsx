import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorMainRef = useRef(null);
    const cursorTrailRef = useRef(null);
    const animationFrameRef = useRef(null);

    // Scroll reveal animation - triggers earlier
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15, // Trigger when 15% is visible
            rootMargin: '0px 0px -20px 0px' // Trigger when element is 20px inside viewport
        };

        const revealCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add reveal class immediately
                    entry.target.classList.add('revealed');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) translateX(0)';
                }
            });
        };

        const observer = new IntersectionObserver(revealCallback, observerOptions);

        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            // Observe all cards and sections that should animate
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
                // Check if already in viewport on page load
                const rect = el.getBoundingClientRect();
                const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

                if (isInViewport) {
                    // Already visible, animate immediately with slight delay
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.05}s`;

                    requestAnimationFrame(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    });
                } else {
                    // Not in viewport, set initial state and observe
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

        // Re-attach hover listeners after a slight delay to catch all elements
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

        // Attach after DOM is ready
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
