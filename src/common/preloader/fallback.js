import { unblockScroll } from "../../common/scroll";
import { scrollToHash } from "../helpers";

export const usePreloaderFallback = () => {
    if (!document.querySelector('.preloader')) {
        unblockScroll();
        scrollToHash();
    }
}