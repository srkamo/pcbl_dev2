export class PitchingStats {

    constructor(
        public player: string,
        public game: string,
        public innings: string,
        public earnedRuns: string,
        public totalRuns: string,
        public strikeouts: string,
        public walks: string,
        public hits: string,
        public hitByPitch: string,
        public wildPitches: string,
        public stolenBases: string,
        public pickoffs: string,
        public result: string,
    ){};

}

/*New Pitching Stat:
{
    "game":{
        "id":1
    },
    "player":{
        "id":1
    },
    "innings": 1.0,
    "earnedRuns": 10000,
    "totalRuns": 10000,
    "strikeouts": 100000,
    "walks": 1000000,
    "hitByPitch": 1000000,
    "hits": 100000000,
    "wildPitches": 100000,
    "stolenBases": 10000,
    "pickoffs": 100000,
    "result": 1
} */