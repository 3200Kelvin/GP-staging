import { unblockScroll } from "../../common/scroll";
import { usePreloader } from "../../common/preloader/script";

export const PRELOADER_PROGRESS_AMOUNT = {
    SCRIPTS: 20,
    VIDEO_1: 40,
    VIDEO_2: 40,
    SKIP: 100,
};

export const useHomePagePreloader = () => {
    const preloaderFuncitons = usePreloader();

    if (!preloaderFuncitons) {
        return;
    }

    const {
        skipPreloader,
        setPreloaderStage,
        removePreloader,
        showPreloaderButton,
        getIsPreloaded,
        setIsPreloaded,
    } = preloaderFuncitons;

    const isPreloaded = getIsPreloaded();

    const hero = document.querySelector('.hero, [data-role="hero"]');

    if (!hero) {
        skipPreloader();
        return;
    }

    const menu = document.querySelector('.menu__content');
    const cursor = document.querySelector('.cursor');
    const heroTitle = hero.querySelector('.heading, [data-role="hero-title"]');
    const heroCaption = hero.querySelector('.hero__caption > *, [data-role="hero-caption"]');
    const heroLast = hero.querySelectorAll('.weights > *, [data-role="hero-last"]');


    const video1 = hero.querySelector('.hero__video--first video');
    const video2 = hero.querySelector('.hero__video--second video');

    if (!video1 || !video2) {
        return skipPreloader();
    }

    if (isPreloaded) {
        useSkipFunctionality();
    } else {
        usePreloaderFunctionality();
    }

    function usePreloaderFunctionality() {
        hideHeroElements();

        if (video1.networkState === 2 && video2.networkState === 2) {
            waitForVideos().then(() => onVideosPreloaded());
        } else {
            setPreloaderStage(PRELOADER_PROGRESS_AMOUNT.SKIP)
                .add(() => {
                    button.addEventListener('click', () => {
                        button.firstElementChild.textContent = 'Wait a sec...';
                        waitForVideos().then(() => onContentReady());
                        preloadVideos();
                    }, { once: true });
                })
                .add(showPreloaderButton());
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
                setPreloaderStage(PRELOADER_PROGRESS_AMOUNT.SKIP)
                    .add(() => {
                        removePreloader();
                        showHeroElements();
                        unblockScroll();
                        setIsPreloaded();
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
                showPreloaderButton();
            }
        });
    }

    async function onContentReady() {
        setTimeout(() => {
            removePreloader();
            startSequence();
        }, 1000);
    }

    function startSequence() {
        video1.play();

        video1.addEventListener('ended', () => {
            video2.play();
            video1.remove();
            showHeroElements();
            unblockScroll();
            setIsPreloaded();
        });
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
                setPreloaderStage(PRELOADER_PROGRESS_AMOUNT.VIDEO_1);
                res();
            }, { once: true });
        });
        
        const p2 = new Promise((res) => {
            video2.addEventListener('canplay', () => {
                setPreloaderStage(PRELOADER_PROGRESS_AMOUNT.VIDEO_2);
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
