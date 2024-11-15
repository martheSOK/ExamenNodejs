
const types=["PENTURE","SCULPTURE","DESSIN","ASCII_ART"]

export default function artworkDataValidator(data){
    return new Proxy(data, {
        set(target, prop, value) {
          if (prop === 'title' || prop === 'artist' || prop === 'type') {
            if (typeof value !== 'string' || value.trim() === '') {
              throw new Error(`${prop} doit être une chaîne non vide.`);
            }
          }
          if (prop === 'type' && !types.includes(value)) {
            throw new Error(`Le type doit être parmi ${types.join(", ")}.`);
          }
          if (prop === 'year' && value !== undefined && (!Number.isInteger(value) || value <= 0)) {
            throw new Error("L'année doit être un entier positif.");
          }
          target[prop] = value;
          return true;
        }
    });
}

// const art=artworkDataValidator({
//   title: "Le rrrrrrrrrrrrr",
//     artist: "Didier JSON",
//     year: "2000",
//     description: "Faire la poulade",
//     type: "SCUE"
// });
// art.year="120"