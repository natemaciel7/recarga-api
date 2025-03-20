import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import clientRoutes from "./routes/clientRoutes";
import phoneRoutes from "./routes/phoneRoutes";
import rechargeRoutes from "./routes/rechargeRoutes";
import summaryRoutes from "./routes/summaryRoutes";

import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(clientRoutes);
app.use(phoneRoutes);
app.use(rechargeRoutes);
app.use(summaryRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
