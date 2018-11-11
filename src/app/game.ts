export class Game {
    constructor(
        public date: string,
        public start: string,
        public opponent: string,
        public teamScore: number,
        public opponentScore: string,
        public location: string,
        public home: boolean,
        public playoff: boolean,
    ){}


}
