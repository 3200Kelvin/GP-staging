import { useMenu } from "./src/menu/script";
import { useSmoke } from "./src/smoke/script";
import { useUnblur } from "./src/unblur/script";
import { useCopyValue } from "./src/copyValue/script";

import './src/style.scss';
import './src/career.scss';

document.addEventListener('DOMContentLoaded', () => {
    useMenu();
    useUnblur();
    useSmoke({ trigger: window, xProperty: 'clientX', yProperty: 'clientY' });
    useCopyValue();
});

