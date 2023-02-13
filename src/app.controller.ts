import {Body, Controller, Get, Post, Query} from '@nestjs/common';
import { AppService } from './app.service';
import {QueryDto, TwoPointDto} from "./dto/query.dto";
import {Point} from "./dto/point";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('random')
  getRandomCoordinates (@Query() query : QueryDto): Point {
    console.log(`Got query ${JSON.stringify(query)}`)
    let p: Point = {
      latitude: Number(query.latitude),
      longitude: Number(query.longitude)
    }

    let radius: number = Number(query.radius)
    return this.appService.getRandomCoordinates(p, radius);
  }

  @Get('measureDistance')
  measureDistance (@Query() query : TwoPointDto): number {

    console.log(`Got query ${JSON.stringify(query)}`)

    let p1: Point = {
      latitude: Number(query.latitude1),
      longitude: Number(query.longitude1)
    }

    let p2: Point = {
      latitude: Number(query.latitude2),
      longitude: Number(query.longitude2)
    }

    return this.appService.measureDistance(p1, p2)
  }

  @Post('measureDistance')
  measureDistancePost (@Query() query : TwoPointDto, @Body() body): number {

    console.log(`Got body ${JSON.stringify(body)}`)

    let p1: Point = {
      latitude: Number(body.latitude1),
      longitude: Number(body.longitude1)
    }

    let p2: Point = {
      latitude: Number(body.latitude2),
      longitude: Number(body.longitude2)
    }

      return this.appService.measureDistance(p1, p2)
  }


}
