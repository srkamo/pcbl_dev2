export class BattingStatsUpdate {
    constructor(
        public id: string,
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
        public strikeouts: string,
        public sacrifices: string,
        public stolenBases: string,
        public caughtStealing: string,
        public passedBalls: string,
    ){};
}
