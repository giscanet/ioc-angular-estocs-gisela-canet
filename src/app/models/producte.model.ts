export interface Producte {
  id: number;
  nom: string;
  descripcio: string;
  categoria: string;
  dataActualitzacio: Date;
  estoc: number;
  destacat?: boolean;
}