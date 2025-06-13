import type { Ref } from "vue";
import type { scrollTypes } from "./types";

let oldY :number = 0;

// might add horizontal scrolling later on if i ever need it
// might add other modes like stopped scrolling up and so on later on
export function useScroll(Y: Ref<number>, scrollStatus: Ref<scrollTypes>) {
    if(oldY < Y.value) {
        scrollStatus.value.isScrollingDown = true;
        scrollStatus.value.isScrollingUp = false;
        scrollStatus.value.isScrolling = true;
    } 
    
    if(oldY > Y.value) {
        scrollStatus.value.isScrollingDown = false;
        scrollStatus.value.isScrollingUp = true;
        scrollStatus.value.isScrolling = true;
    }


    oldY = Y.value;
}