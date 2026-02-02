import { unblockScroll } from "../../common/scroll";
import { getIsPreloaded, setIsPreloaded } from "./initial";

export const PRELOADER_PROGRESS_AMOUNT = {
    SCRIPTS: 20,
    SKIP: 100,
};

export const usePreloader = (skipAll = false) => {
    let loaded = 0;
    const preloader = document.querySelector('.preloader');

    if (!preloader) {
        unblockScroll();
        return null;
    }

    const line = preloader.querySelector('.preloader__line');
    const runner = line.querySelector('.preloader__line__runner');
    const button = preloader.querySelector('.preloader__button');

    if (skipAll) {
        skipPreloader();
        return null;
    }

    setTimeout(() => {
        setPreloaderStage(PRELOADER_PROGRESS_AMOUNT.SCRIPTS);
    }, 500);

    return {
        skipPreloader,
        setPreloaderStage,
        removePreloader,
        showPreloaderButton,
        getIsPreloaded,
        setIsPreloaded,
    };

    function skipPreloader() {
        return setPreloaderStage(PRELOADER_PROGRESS_AMOUNT.SKIP)
            .add(() => {
                removePreloader();
                unblockScroll();
            });
    }

    function setPreloaderStage(percentage) {
        loaded += percentage;

        if (loaded > 100) {
            loaded = 100;
        }

        return moveLine();
    }

    function moveLine() {
        return gsap.timeline().to(runner, { transform: `scaleX(${loaded / 100})`, duration: 0.4 });
    }

    function removePreloader() {
        const onComplete = () => {
            preloader.remove();
        };

        return gsap.to(preloader, { opacity: 0, duration: 0.4, onComplete });
    }

    function showPreloaderButton() {
        setIsPreloaded();

        return gsap.timeline()
            .to(line, { opacity: 0, duration: 0.5 })
            .to(line, { display: 'none' })
            .to(button, {  opacity: 0, display: 'block' })
            .to(button, { opacity: 1, duration: 0.5 });
    }
};
