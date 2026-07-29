import { jest } from "@jest/globals";
import {
    sum,
    sub,
    multi,
    div,
    getUser,
    getNames,
    throwError,
    fetchData,
    fetchError
} from "../src/utils.js"


test("add two numbers", () => {
    expect(sum(2, 3)).toBe(5)

    expect("hello").toBe("hello")

    expect(true).toBe(true)


})


test("to check equal", () => {
    expect(getUser()).toEqual({
        name: "Rina",
        age: 20
    })
})


test("to check equal", () => {
    expect(getUser()).toEqual({
        name: "Rina",
        age: 20
    })
})




test("check truthy", () => {

    const users = getUser();

    expect(users).toBeTruthy();

})

test("chech array or error message", () => {

    expect(getNames()).toContain("Rina")
})


test("function should throw an error", () => {
    expect(() => throwError()).toThrow("Something went wrong")
})



test("mock function called", () => {
    const mockFn = jest.fn()

    mockFn()

    expect(mockFn).toHaveBeenCalled()
})



test("mock called with correct arguments", () => {

    const mockFn = jest.fn();

    mockFn("Rina", 20);


    expect(mockFn)
        .toHaveBeenCalledWith("Rina", 20);

});



test("resolved promise", async () => {

    await expect(fetchData())
        .resolves
        .toBe("data received");
})


test("reject promise", async () => {

    await expect(fetchError())
        .rejects
        .toBe("Failed");

})



test("sub two numbers", () => {
    expect(sub(3, 3)).toBe(0)


})

test("multiply two numbers", () => {
    expect(multi(2, 2)).toBe(4)
})

test("division of two", () => {
    expect(div(2, 4)).toBe(2)
})