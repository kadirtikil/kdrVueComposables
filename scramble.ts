import type { Ref } from "vue";



export function useScramble(text: Ref<string>, scrambleType?: string, options?: scrambleOptions) {

    const ms: number = options?.duration ? options.duration : 500;

    
    const func: ((text: Ref<string, string>, ms: number) => Promise<void>) | undefined = (findScramble(scrambleType).func);

    async function run() {
        if (func != undefined){
            await func(text, ms);       
        } else {
            console.error('Scramble is undefined in run()');
        }
    }

    run();
    // return { run }
}

/**
 * default scrambles
 */
const scrambles: { [key: string]: Scramble } = {
    default: {
        id: 1,
        name: 'name',
        func: async function (text: Ref<string>, ms: number) {
            for (let i = 0; i < 10; i++) {
                text.value += 'O';
                await sleep(ms);
            }
        },
    },
};


/**
 * Helperfunctions
 */
function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function findScramble(key?: string): Scramble {
    return (key === undefined || scrambles[key] === undefined)? 
        scrambles['default']:
        scrambles[key];
}
    

/**
 * Types
 */
interface scrambleOptions {
    duration?: number;
    style?: string;
}

interface Scramble {
    id: number;
    name: string; 
    func: (text: Ref<string>, ms: number) => Promise<void>;
}

