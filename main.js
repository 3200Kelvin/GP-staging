import { useHeroCursor } from "./src/main/cursor/script";
import { useSmoke } from "./src/common/smoke/script";
import { useSolutions } from "./src/main/solutions/script";
import { useAccordeon } from "./src/main/accordeon/script";
import { useHomePagePreloader } from "./src/main/preloader/script";

import './src/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    useHeroCursor();
    useSmoke();
    useSolutions();
    useAccordeon();
    useHomePagePreloader();
});

