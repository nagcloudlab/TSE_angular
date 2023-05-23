import { Wheel } from "./IWheel";

export class CEATWheel implements Wheel {
    rotate() {
        console.log("CEAT Wheel rotating");
    }
}