import { unblockScroll } from "../common/scroll";
import { getIsPreloaded, setIsPreloaded } from "./initial";

export const PRELOADER_PROGRESS_AMOUNT = {
    SCRIPTS: 20,
    VIDEO_1: 40,
    VIDEO_2: 40,
    SKIP: 100,
};

export const usePreloader = (skipAll = false) => {
    let loaded = 0;
    const isPreloaded = getIsPreloaded();
    const preloader = document.querySelector('.preloader');

    if (!preloader) {
        return unblockScroll();
    }

    const line = preloader.querySelector('.preloader__line');
    const runner = line.querySelector('.preloader__line__runner');
    const button = preloader.querySelector('.preloader__button');
    const hero = document.querySelector('.hero, [data-role="hero"]');

    if (skipAll || !hero) {
        onPartLoaded(PRELOADER_PROGRESS_AMOUNT.SKIP)
            .add(() => {
                removePreloader();
                unblockScroll();
            });
        return;
    }

    const menu = document.querySelector('.menu__content');
    const cursor = document.querySelector('.cursor');
    const heroTitle = hero.querySelector('.heading, [data-role="hero-title"]');
    const heroCaption = hero.querySelector('.hero__caption > *, [data-role="hero-caption"]');
    const heroLast = hero.querySelectorAll('.weights > *, [data-role="hero-last"]');

    window.setPreloaderState = onPartLoaded;

    const video1 = hero.querySelector('.hero__video--first video');
    const video2 = hero.querySelector('.hero__video--second video');

    if (!video1 || !video2) {
        return removePreloader();
    }

    if (!video1 || !video2) {
        return removePreloader();
    }

    if (isPreloaded) {
        useSkipFunctionality();
    } else {
        usePreloaderFunctionality();
    }

    return onPartLoaded;

    function onPartLoaded(percentage) {
        loaded += percentage;
        if (loaded > 100) {
            loaded = 100;
        }
        return moveLine();
    }

    function moveLine() {
        return gsap.timeline().to(runner, { transform: `scaleX(${loaded / 100})`, duration: 0.4 });
    }

    function usePreloaderFunctionality() {
        hideHeroElements();

        if (video1.networkState === 2 && video2.networkState === 2) {
            waitForVideos().then(() => onVideosPreloaded());
        } else {
            onPartLoaded(PRELOADER_PROGRESS_AMOUNT.SKIP)
                .add(() => {
                    button.addEventListener('click', () => {
                        button.firstElementChild.textContent = 'Wait a sec...';
                        waitForVideos().then(() => onContentReady());
                        preloadVideos();
                    }, { once: true });
                })
                .add(showButton());
        }
    }

    function checkPlaybackAvailability() {
        return new Promise((res) => {
            video1.play()
                .then(() => {
                    video1.pause();
                    res(true);
                })
                .catch(() => res(false));
        });
    }

    function useSkipFunctionality() {
        video2.play()
            .then(() => {
                video1.remove();
                onPartLoaded(PRELOADER_PROGRESS_AMOUNT.SKIP)
                    .add(() => {
                        removePreloader();
                        showHeroElements();
                        unblockScroll();
                    });
            })
            .catch(() => {
                usePreloaderFunctionality();
            });
    }

    async function onVideosPreloaded() {
        checkPlaybackAvailability().then((isAvailable) => {
            if (isAvailable) {
                onContentReady();
            } else {
                button.addEventListener('click', () => {
                    button.firstElementChild.textContent = 'Wait a sec...';
                    onContentReady();
                }, { once: true });
                showButton();
            }
        });
    }

    async function onContentReady() {
        setTimeout(() => {
            removePreloader();
            startSequence();
        }, 1000);
    }

    function removePreloader() {
        const onComplete = () => {
            preloader.remove();
            setIsPreloaded();
        };

        gsap.to(preloader, { opacity: 0, duration: 0.4, onComplete });
    }

    function startSequence() {
        video1.play();

        video1.addEventListener('ended', () => {
            video2.play();
            video1.remove();
            showHeroElements();
            unblockScroll();
        });
    }

    function showButton() {
        return gsap.timeline()
            .to(line, { opacity: 0, duration: 0.5 })
            .to(line, { display: 'none' })
            .to(button, {  opacity: 0, display: 'block' })
            .to(button, { opacity: 1, duration: 0.5 });
    }

    function hideHeroElements() {
        gsap.to(cursor, { display: 'none' });
        gsap.to(menu, { transform: 'translateY(-150%)' });
        gsap.to(heroCaption, { opacity: 0 });
        gsap.to(heroLast, { opacity: 0 });
    }

    function showHeroElements() {
        heroTitle.appear?.();
        gsap.to(cursor, { display: 'block' });
        gsap.to(menu, { transform: 'translateY(0%)', duration: 0.7 });
        gsap.to(heroCaption, { opacity: 1, duration: 0.7 });
        gsap.to(heroLast, { opacity: 1, duration: 0.7 });
    }

    async function waitForVideos() {
        const p1 = new Promise((res) => {
            video1.addEventListener('canplaythrough', () => {
                onPartLoaded(PRELOADER_PROGRESS_AMOUNT.VIDEO_1);
                res();
            }, { once: true });
        });
        
        const p2 = new Promise((res) => {
            video2.addEventListener('canplay', () => {
                onPartLoaded(PRELOADER_PROGRESS_AMOUNT.VIDEO_2);
                res();
            }, { once: true });
        });

        preloadVideos();

        return Promise.all([p1, p2]);
    }

    function preloadVideos() {
        video1.load();
        video2.load();
    }
};
