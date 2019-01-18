import {Request, Response} from "express";

import pokemons = require('../db.json'); // load my local database file

export class Pokemons {

    public routes(app): void { // received the express instance from app.ts file
        app.route('/pokemons')
        .get((req: Request, res: Response) => {
            // send all pokemons with a 200 success status code
            res.status(200).send(pokemons);
        })
        .post((req: Request, res: Response) => {
            let name = req.body.name; // this requires body-parser package
            let attack = req.body.attack;
            let defense = req.body.defense;
            let evolveLevel = req.body.evolveLevel;
            let evolveTo = req.body.evolveTo;
            let type = req.body.type;
            let moves = req.body.moves;
            let curve = req.body.curve;
            // logic to save it to db
        })

        app.route('/pokemons/:id')
        .get((req: Request, res: Response) => {
            let id = req.params.id;
            res.status(200).send(pokemons[id]);
        })
    }
}