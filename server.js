import { app } from "./app.js";
import { connectDatabase } from "./data/database.js";

connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});