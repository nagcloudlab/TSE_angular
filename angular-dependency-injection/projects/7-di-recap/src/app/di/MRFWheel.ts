import { Wheel } from "./IWheel";



export class MRFWheel implements Wheel {
    rotate() {
        console.log("MRF Wheel Rotating");
    }
}