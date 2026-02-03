import { useRunner } from "./script";

export const useRunners = () => {
    const runners = document.querySelectorAll('[data-animation="runner"]');
    if (!runners.length) {
        return;
    }

    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const block = entry.target;
            if (entry.isIntersecting) {
                block.animate();
            } else {
                block.stop();
            }
        });
    });

    runners.forEach((block) => {
        const { toggleRunner } = useRunner(block, '[data-animation="runner-wrapper"]', '[data-animation="runner-entry"]');

        block.animate = () => toggleRunner(true);
        block.stop = () => toggleRunner(false);
        
        intersectionObserver.observe(block);
    });
};
