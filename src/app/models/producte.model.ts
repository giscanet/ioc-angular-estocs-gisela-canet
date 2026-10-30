export type CategoriaProducte = 'Alimentació'  | 'Neteja'  | 'Informàtica';
export interface Producte {
  id: number;
  nom: string;
  descripcio: string;
  categoria: CategoriaProducte;
  dataActualitzacio: Date;
  estoc: number;
  destacat?: boolean;
}