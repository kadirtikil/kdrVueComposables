import type { device } from "../../types/global";

export function useDevice(): device {
    let retVal: device = {
        isMobile: window.innerWidth < 800,
        isTablet: window.innerWidth > 800,
        isDesktop: window.innerWidth > 1300,
        isUltraWide: window.innerWidth > 3750,
    }
    console.log(window.innerWidth)

    return retVal
}