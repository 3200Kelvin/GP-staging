import { PRELOADER_PROGRESS_AMOUNT } from "./src/preloader/script";
import { useMenu } from "./src/menu/script";
import { useHeroCursor } from "./src/cursor/script";
import { useSmoke } from "./src/smoke/script";
import { useUnblur } from "./src/unblur/script";
import { useExpandables } from "./src/expandables/script";
import { useSolutions } from "./src/solutions/script";
import { useAccordeon } from "./src/accordeon/script";
import { useCopyValue } from "./src/copyValue/script";
import { useForm } from "./src/form/script";
import { useAutoplayVideos } from "./src/videos/script";

import './src/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    useMenu();
    useHeroCursor();
    useUnblur();
    useSmoke();
    useExpandables();
    useSolutions();
    useAccordeon();
    useForm();
    useCopyValue();
    useAutoplayVideos();

    window.setPreloaderState(PRELOADER_PROGRESS_AMOUNT.SCRIPTS);
});

