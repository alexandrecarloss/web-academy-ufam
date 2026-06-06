import express, {} from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map