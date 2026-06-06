import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ quiet: true });
const PORT = process.env.PORT ?? 5566;
const app = express();
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map