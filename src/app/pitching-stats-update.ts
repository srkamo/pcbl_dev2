export class PitchingStatsUpdate {
    constructor(
        public id: string,
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
