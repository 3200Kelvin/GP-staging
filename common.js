import { useCopyValue } from "./src/common/copyValue/script";
import { useExpandables } from "./src/common/expandables/script";
import { useForm } from "./src/common/form/script";
import { useMenu } from "./src/common/menu/script";
import { usePopups } from "./src/common/popup/script";
import { useUnblur } from "./src/common/unblur/script";
import { useAutoplayVideos } from "./src/common/videos/script";

import './src/common/common.scss';

document.addEventListener('DOMContentLoaded', () => {
    if ('gsap' in window) {
        gsap.defaults({
            duration: 0,
            ease: 'power1.inOut',
        });
    }

    useCopyValue();
    useExpandables();
    useForm();
    useMenu();
    usePopups();
    useUnblur();
    useAutoplayVideos();
});
