import type { Scramble } from "./types";
import { scrambles } from "./scramble";

/**
 * Helperfunctions
 */

/**
 * Uses promise to sleep for X milliseconds.
 */
export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Iterates map of scrambles to find specified scramble.
 */
export function findScramble(key?: string): Scramble {
    return (key === undefined || scrambles[key] === undefined)? 
        scrambles['default']:
        scrambles[key];
}

/**
 * Generates a string of given Size.
 */
export function generateRandomString(size: number, option?: string) {
    const validOptions: string[] = ["useOnlyLarge", "useOnlySmall", "useOnlyNumbers", "useOnlySpecialChars"];

    (option == null)? option = "useMixed" : 
        validOptions.includes(option)?  option: "useMixed";


    const bigLetters: string[] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const smallLetters: string[] = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const numbers: string[] = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];

    const specialChars: string[] = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.', '<', '>', '/', '?'
    ];

    const pools: string[][] = [bigLetters, smallLetters, numbers, specialChars]

    switch (option) {
        default:
            let retVal = "";
            for(let i = 0; i< size; i++) {
                const num1 = Math.floor(Math.random() * 3);
                const num2 = Math.floor(Math.random() * (pools[num1].length - 1));

                retVal += pools[num1][num2];
            }
            return retVal;
                                                    
    }   
}