import type { Ref } from "vue";
import type { Scramble, scrambleOptions } from "./types";

import { sleep, findScramble, generateRandomString } from "./helperfunctions";



export async function useScramble(text: Ref<string>, scrambleType?: string, options?: scrambleOptions): Promise<void> {

    const ms: number = options?.duration ? options.duration : 500;
    
    const func: ((text: Ref<string, string>, ms: number) => Promise<void>) | undefined = (findScramble(scrambleType).func);

    async function run(): Promise<void> {
        if (func != undefined){
            await func(text, ms);       
        } else {
            console.error('Scramble is undefined in run()');
        }
    }

    await run();
    // TODO: should rather just return the run and let the user of the composable decide when to run it
}

/**
 * default scrambles
 */
export const scrambles: { [key: string]: Scramble } = {
    default: {
        id: 1,
        name: 'default',
        func: async function (text: Ref<string>, ms: number) {
            for (let i = 0; i < 10; i++) {
                text.value += 'O';
                await sleep(ms);
            }
        },
    },
    randomFillament: {
        id: 2,
        name: 'randomFillament',
        func: async function(text: Ref<string>, ms: number) {

            console.log("TESTING")
            const replacingText = text.value;
            text.value = generateRandomString(replacingText.length);
            const temp = text.value.split('');

            for(let i = 0; i < replacingText.length; i++) {
                temp[i] = replacingText.charAt(i);
                text.value = temp.join('');
                await sleep(ms);
            }
        }
    },
    buildUp: {
        id: 3,
        name: 'buildUp',
        func: async function(text: Ref<string>, ms:number) {
            const replaceText = text.value;
            text.value = '';
            for(let i = 0; i < replaceText.length; i++) {
                text.value += replaceText.charAt(i);
                await sleep(ms);
            }
        }
    },
    buildUpLargeText: {
        id: 4,
        name: 'buildUpLargeText',
        func: async function(text: Ref<string>, ms:number) {
            const replaceText = text.value;
            const textLength = text.value.length;
            text.value = '';
            let temp = '';
            for(let i = 0; i < textLength; i++) {
                temp += replaceText.charAt(i)
                text.value = temp;

                ms = (i % 5 == 0) ? ms/2 : ms;
                await sleep(ms);
            }
        }
    }
};