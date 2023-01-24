const data = 123;

     // exporty nazwane 
     
    export function getData() {
        return data;
    }

    export let testValue = " test";

    export function setTestValue (value){
        testValue = value ;
    }

    export function add(a, b){
        return a+b;
    }

    export function multiply(a,b){
        return a*b;
    }


    export default {
        getData: getData,
        value:" Jebac psy"
    };