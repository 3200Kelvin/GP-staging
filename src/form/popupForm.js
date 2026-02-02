import './select/style.scss';

export const usePopupForm = () => {
    const FIELD_NAMES = {
        WORK: 'Industry',
        OTHER_WORK: 'Other-industry',
    };

    const form = document.querySelector('.modal__form');

    if (!form) {
        return;
    }

    const allSelects = form.querySelectorAll('select');
    allSelects.forEach((select) => {
        select.classList.add('select-field-styles');
    });

    const select = form.querySelector(`select[name="${FIELD_NAMES.WORK}"]`);
    const input = form.querySelector(`input[name="${FIELD_NAMES.OTHER_WORK}"]`);

    if (!input) {
        return;
    }

    const inputWrapper = input.closest('.form__toggled');

    gsap.to(inputWrapper, { display: 'none' });

    if (!select) {
        return;
    }

    select.addEventListener('change', () => {
        if (select.value === 'other') {
            input.setAttribute('required', '');
            gsap.to(inputWrapper, { display: 'block' });
        } else {
            input.removeAttribute('required');
            gsap.to(inputWrapper, { display: 'none' });
        }
    });
};
