export default class Change {
    denominationName: string;
    count: number;

    constructor(denominationName: string, count: number) {
        this.denominationName = denominationName;
        this.count = count;
    }
}