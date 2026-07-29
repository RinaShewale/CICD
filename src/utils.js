export function sum(a, b) {
    return a + b;
}


export function sub(a, b) {
    return a - b;
}



export function multi(a, b) {
    return a * b;
}


export function div(a, b) {
    return a // b;
}







export function getUser() {
    return {
        name: "Rina",
        age: 20
    };
}

export function getNames() {
    return ["Rina", "John", "Alex"];
}

export function throwError() {
    throw new Error("Something went wrong");
}

export function fetchData() {
    return Promise.resolve("data received");
}

export function fetchError() {
    return Promise.reject("Failed");
}