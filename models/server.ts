import express, { Application } from "express";
import userRoutes from "../routes/user";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    user: "/api/user",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    // Conectar a bd
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas
    this.routes();
  }

  async conectarDB() {}

  middlewares() {
    //CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Rutas
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.apiPaths.user, userRoutes);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("Escuchando en puerto " + this.port);
    });
  }
}

export default Server;
