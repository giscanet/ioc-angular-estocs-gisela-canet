# Nom de l'aplicació: Gestor d'estocs

## Autor/a

Gisela Canet Agramunt

## Descripció

Aplicació per gestionar productes i estocs. Permet consultar els productes disponibles, filtrar-los per text i categoria i veure'n els detalls.

## Versions utilitzades

- **Node.js:** 24.15.0
- **npm:** 11.12.1
- **Angular CLI:** 22.2.0
- **Git:** 2.43.0

## Branca

`ra2-components`

Aquesta branca parteix de `ra1-setup` i incorpora els components per consultar, filtrar i seleccionar productes.

## Funcionalitats

- Targetes reutilitzables per mostrar els productes.
- Etiquetes de categoria i indicació de productes destacats.
- Llistat de productes en forma de graella.
- Filtratge per text i categoria.
- Validació del formulari de filtres i opció per restablir-los.
- Selecció d'un producte per consultar-ne els detalls.
- Comptador de resultats i missatge quan no hi ha productes.
- Mesures d'accessibilitat: etiquetes associades als camps, missatges d'estat, focus visible i enllaç de salt al contingut principal.
- Disseny adaptable a diferents amplades de pantalla.

## Estructura del projecte

```text
src/app/
├── models/
│   └── producte.model.ts
├── data/
│   └── productes.mock.ts
├── components/
│   ├── etiqueta-producte/
│   ├── targeta-producte/
│   ├── llista-productes/
│   └── filtres-productes/
├── app.component.html
├── app.component.scss
├── app.component.ts
├── app.config.ts
└── app.routes.ts
```

## Components

### LlistaProductes (`LlistaProductes`)

Mostra els productes en forma de graella i propaga la selecció al component principal.

- Rep la llista de productes i l'identificador del producte seleccionat.
- Utilitza `@for` i `@empty` per mostrar els productes o el missatge quan no n'hi ha.

### TargetaProducte (`TargetaProducte`)

Mostra les dades d'un producte en una targeta i incorpora el botó «Veure detall».

- Rep les dades del producte i si està seleccionat.
- Emet l'esdeveniment de selecció quan es prem el botó.

### EtiquetaProducte (`EtiquetaProducte`)

Mostra la categoria del producte i indica si és destacat.

- Rep la categoria i l'estat de producte destacat.

### FiltresProductes (`FiltresProductes`)

Permet filtrar els productes per text i categoria.

- Utilitza `FormsModule` i `ngModel`.
- Inclou validacions del camp de cerca.
- Permet aplicar i restablir els filtres.

### App (`App`)

És el component principal de l'aplicació.

- Gestiona els productes i els resultats filtrats.
- Controla la selecció del producte.
- Mostra el comptador de resultats i el detall del producte seleccionat.

## Com instal·lar i executar el projecte

1. Instal·lar Git, Node.js i Angular CLI.

2. Descarregar o clonar el projecte des del repositori:

   ```bash
   git clone https://github.com/giscanet/ioc-angular-estocs-gisela-canet.git
   ```

3. Accedir a la carpeta del projecte:

   ```bash
   cd ioc-angular-estocs-gisela-canet
   ```

4. Instal·lar les dependències:

   ```bash
   npm install
   ```

5. Executar l'aplicació en mode desenvolupament:

   ```bash
   ng serve
   ```

6. Obrir el navegador i accedir a [http://localhost:4200/](http://localhost:4200/).

## Verificacions abans de lliurar

- [ ] `npm install` finalitza correctament.
- [ ] `ng serve` executa l'aplicació.
- [ ] `ng test` passa sense errors.
- [ ] `ng build` compila correctament.
- [ ] La branca `ra2-components` està publicada a `origin`.
- [ ] El README està actualitzat i no conté cap `TODO`.
- [ ] S'han preparat les captures de pantalla requerides.
- [ ] S'ha comprovat l'historial dels últims cinc commits.

## Comandes de terminal

```bash
# Canviar a la branca de treball
git switch ra2-components

# Instal·lar les dependències
npm install

# Executar l'aplicació
ng serve

# Executar les proves
ng test

# Compilar el projecte
ng build

# Publicar la branca
git push -u origin ra2-components

# Mostrar els últims cinc commits
git log --oneline --decorate --max-count=5
```

## Estat de l'EAC1

EAC1 finalitzat.

## Estat de l'EAC2

EAC2 finalitzat.

## Enllaç del repositori

[https://github.com/giscanet/ioc-angular-estocs-gisela-canet](https://github.com/giscanet/ioc-angular-estocs-gisela-canet)
