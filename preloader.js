import { usePreloader } from "./src/preloader/script";

document.addEventListener('DOMContentLoaded', () => {
    gsap.defaults({
        duration: 0,
        ease: 'power1.inOut',
    });

    usePreloader();
});