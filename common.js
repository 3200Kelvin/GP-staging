import { useCopyValue } from "./src/common/copyValue/script";
import { useExpandables } from "./src/common/expandables/script";
import { useForm } from "./src/common/form/script";
import { useMenu } from "./src/common/menu/script";
import { usePopups } from "./src/common/popup/script";
import { useUnblur } from "./src/common/unblur/script";
import { useAutoplayVideos } from "./src/common/videos/script";
import { useRunners } from "./src/common/runner/initAll";
import { usePreloaderFallback } from "./src/common/preloader/fallback";
import { tryScript } from "./src/common/helpers";

import './src/common/common.scss';

document.addEventListener('DOMContentLoaded', () => {
    if ('gsap' in window) {
        gsap.defaults({
            duration: 0,
            ease: 'power1.inOut',
        });
    }

    tryScript(useCopyValue, 'Error initializing copy value functionality');
    tryScript(useExpandables, 'Error initializing expandables functionality');
    tryScript(useForm, 'Error initializing form functionality');
    tryScript(useMenu, 'Error initializing menu functionality');
    tryScript(usePopups, 'Error initializing popups functionality');
    tryScript(useUnblur, 'Error initializing unblur functionality');
    tryScript(useAutoplayVideos, 'Error initializing autoplay videos functionality');
    tryScript(useRunners, 'Error initializing runners functionality');
    tryScript(usePreloaderFallback, 'Error initializing preloader fallback functionality');
});
