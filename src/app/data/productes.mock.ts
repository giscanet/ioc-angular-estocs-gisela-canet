import { Producte } from '../models/producte.model';

export const PRODUCTES: Producte[] = [
  {
    id: 1,
    nom: 'Galetes',
    descripcio: 'Paquet de galetes de xocolata de 200 grams',
    categoria: 'Alimentació',
    dataActualitzacio: new Date('2026-10-20'),
    estoc: 45,
    destacat: true
  },
  {
    id: 2,
    nom: 'Pasta',
    descripcio: 'Paquet de macarrons de 500 grams',
    categoria: 'Alimentació',
    dataActualitzacio: new Date('2026-10-19'),
    estoc: 32
  },
  {
    id: 3,
    nom: 'Llet',
    descripcio: 'Brik de llet semidesnatada d’un litre',
    categoria: 'Alimentació',
    dataActualitzacio: new Date('2026-10-21'),
    estoc: 24,
    destacat: true
  },
  {
    id: 4,
    nom: 'Ous',
    descripcio: 'Paquet d’ous de gallina de 12 unitats',
    categoria: 'Alimentació',
    dataActualitzacio: new Date('2026-10-18'),
    estoc: 12
  },
  {
    id: 5,
    nom: 'Detergent',
    descripcio: 'Detergent líquid per rentar la roba',
    categoria: 'Neteja',
    dataActualitzacio: new Date('2026-10-20'),
    estoc: 18,
    destacat: true
  },
  {
    id: 6,
    nom: 'Lleixiu',
    descripcio: 'Ampolla de lleixiu per a la neteja',
    categoria: 'Neteja',
    dataActualitzacio: new Date('2026-10-17'),
    estoc: 20
  },
  {
    id: 7,
    nom: 'Suavitzant',
    descripcio: 'Suavitzant per a la neteja de la roba',
    categoria: 'Neteja',
    dataActualitzacio: new Date('2026-10-21'),
    estoc: 15
  },
  {
    id: 8,
    nom: 'Teclat',
    descripcio: 'Teclat USB per a ordinador',
    categoria: 'Informàtica',
    dataActualitzacio: new Date('2026-10-22'),
    estoc: 10,
    destacat: true
  },
  {
    id: 9,
    nom: 'Ratolí sense fil',
    descripcio: 'Ratolí sense fil amb connexió Bluetooth',
    categoria: 'Informàtica',
    dataActualitzacio: new Date('2026-10-20'),
    estoc: 14
  },
  {
    id: 10,
    nom: 'Monitor',
    descripcio: 'Monitor LED de 24 polzades amb resolució Full HD',
    categoria: 'Informàtica',
    dataActualitzacio: new Date('2026-10-22'),
    estoc: 6
  },
  {
    id: 11,
    nom: 'Placa base',
    descripcio: 'Placa base Asus amb factor de forma ATX per a ordinador',
    categoria: 'Informàtica',
    dataActualitzacio: new Date('2026-10-23'),
    estoc: 8,
    destacat: true
  },
  {
    id: 12,
    nom: 'Impressora',
    descripcio: 'Impressora multifunció amb connexió Wi-Fi',
    categoria: 'Informàtica',
    dataActualitzacio: new Date('2026-10-24'),
    estoc: 4,
    destacat: true
  }
];