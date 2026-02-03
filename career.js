import { useSmoke } from "./src/common/smoke/script";
import { usePreloader } from "./src/common/preloader/script";
import { useRunners } from "./src/common/runner/initAll";

import './src/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    useSmoke({ trigger: window, xProperty: 'clientX', yProperty: 'clientY' });
    usePreloader(true);
    useRunners();
});

