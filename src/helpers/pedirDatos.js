import { stock } from "../data/data";

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
      //Cuerpo de la promesa
      setTimeout(()=>{
          resolve(stock);
      },2000)
    });
  };