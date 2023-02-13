import { Injectable } from '@nestjs/common';
import {Point} from "./dto/point";
import * as randomLocation from 'random-location'

@Injectable()
export class AppService {
  getRandomCoordinates(p: Point, radius: number): Point {
    return randomLocation.randomCircumferencePoint(p, radius)
  }

  measureDistance(p1: Point, p2: Point): number {

    console.log(`p1: ${JSON.stringify(p2)}, p1: ${JSON.stringify(p2)}`)
    return Math.floor(randomLocation.distance(p1, p2))
  }
}
