import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors' ;
import path from 'path';
import routes from './routes';

class App{

  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://dmello:dmello2101@cluster0.gb8idxy.mongodb.net/house?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    this.middlewares();
    this.routes();
  }

  middlewares(){
    //Liberar o acesso para que varios usuarios façam requisições na api
    this.server.use(cors());

    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

export default new App().server;
