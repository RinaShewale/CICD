import "dotenv/config";

import app from "./src/app.js";
import ConnectToDb from "./src/config/db.js";



await ConnectToDb();


app.listen(3000, () => {
    console.log("Server running on port 3000");
});