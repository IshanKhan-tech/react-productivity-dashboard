import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const STRIP_COUNT = 16;

const createStrips = () => {
  const overlay = document.createElement("div");

  overlay.id = "page-transition-overlay";

  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9999;
    display: flex;
    pointer-events: none;
  `;

  for (let i = 0; i < STRIP_COUNT; i++) {
    const strip = document.createElement("div");

    strip.style.cssText = `
      flex: 1;
      height: 100%;
      background: #000;
      transform: scaleY(0);
      transform-origin: bottom;
    `;

    overlay.appendChild(strip);
  }

  document.body.appendChild(overlay);

  return overlay;
};

const removeOverlay = () => {
  const el = document.getElementById("page-transition-overlay");

  if (el) el.remove();
};

const useViewTransition = () => {
  const navigate = useNavigate();

  const navigateTo = useCallback(
    (href) => {
      const overlay = createStrips();

      const strips = [...overlay.children];

      gsap.to(strips, {
        scaleY: 1,
        duration: 0.6,
        stagger: 0.05,

        onComplete: () => {
          navigate(href);

          gsap.to(strips, {
            scaleY: 0,
            duration: 0.6,
            delay: 0.1,
            stagger: 0.05,

            transformOrigin: "top",

            onComplete: removeOverlay,
          });
        },
      });
    },
    [navigate]
  );

  return { navigateTo };
};

export default useViewTransition;