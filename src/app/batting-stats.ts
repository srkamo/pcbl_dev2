export class BattingStats {
    constructor(
        public player: string,
        public game: string,
        public atBats: string,
        public singles: string,
        public doubles: string,
        public triples: string,
        public homeRuns: string,
        public walks: string,
        public hitByPitch: string,
        public runs: string,
        public rbis: string,
        public strikeOuts: string,
        public sacrifices: string,
        public stolenBases: string,
        public caughtStealing: string,
        public passedBalls: string,
    ){};
}

/* Batting Stat:
{
    "game":{
        "id":1
    },
    "player":{
        "id":1
    },
    "atBats": 5,
    "singles": 1,
    "doubles": 1,
    "triples": 1,
    "homeRuns": 1,
    "walks": 0,
    "hitByPitch": 100000,
    "sacrifices": 0,
    "runs": 0,
    "rbis": 0,
    "stolenBases": 0,
    "passedBalls": 0,
    "caughtStealing": 0,
    "strikeOuts": 5
} */
