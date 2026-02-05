import {PI} from "./constants.js"


export default function add(a,b){
    return a+b
}

export function soustract(a,b){
    if(a>b){
        return a-b
    }
    else{
        return b-a
    }
}

export function multiply(a,b){
    return a*b
}


export function division(a,b){
    return a/b
}


export const valeurPI = PI


