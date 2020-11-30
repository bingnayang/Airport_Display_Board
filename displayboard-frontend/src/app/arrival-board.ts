export class ArrivalBoard {
    id: number;
    origin: string;
    scheduledTime: string;
    estimateTime: string;
    status: string;
    airline: string;
    flight: string;

    set airlineName(name: string){
        this.airline = name;
    }
}
