import './style.scss';

export const usePopups = () => {
    const popups = document.querySelectorAll('[data-popup]');

    popups.forEach(init);

    function init(popup) {
        const id = popup.dataset.popup;
        const openBtns = document.querySelectorAll(`[data-popup-open="${id}"]`);
        const closeBtns = popup.querySelectorAll('[data-popup-close]');

        openBtns.forEach((openBtn) => openBtn.addEventListener('click', open));
        closeBtns.forEach((closeBtn) => closeBtn.addEventListener('click', close));
        setTimeout(() => popup.classList.add('transition'), 10);

        function open() {
            popup.classList.add('opened');
        }

        function close() {
            popup.classList.remove('opened');
        }
    }
};
