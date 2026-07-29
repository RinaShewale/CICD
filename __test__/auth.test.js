import request from "supertest";
import app from "../src/app.js";
import "./setup.js";


describe("Auth Api testing",()=>{


beforeEach(()=>{

 console.log("Before each testing");

});


afterEach(()=>{

 console.log("After each testing");

});



test("Server should response", async()=>{


 const res = await request(app)
 .get("/api/auth/test");


 expect(res.statusCode)
 .toBe(200);


});


});