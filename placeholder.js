import { useSmoke } from "./src/common/smoke/script";
import { usePopupForm } from "./src/common/form/popupForm";
import { usePreloader } from "./src/common/preloader/script";

import './src/style.scss';
import './src/placeholder.scss';

document.addEventListener('DOMContentLoaded', () => {
    useSmoke({ trigger: window, xProperty: 'clientX', yProperty: 'clientY' });
    usePopupForm();
    usePreloader(true);
});
