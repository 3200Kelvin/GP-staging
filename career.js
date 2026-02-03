import { useSmoke } from "./src/common/smoke/script";
import { usePreloader } from "./src/common/preloader/script";

import './src/style.scss';

document.addEventListener('DOMContentLoaded', () => {
    useSmoke({ trigger: window, xProperty: 'clientX', yProperty: 'clientY' });
    usePreloader(true);
});

