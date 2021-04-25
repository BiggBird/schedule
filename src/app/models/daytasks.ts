export class BookedTask {
    start: number;
    duration: number;
    name: string;
    type?: string;

    constructor() {
        this.start = 0;
        this.duration = 1;
        this.name = "Peer Tutoring";
        this.type = "Tutor";
    }

}
