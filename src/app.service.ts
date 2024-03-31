import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sampleApi(): string {
    return '<h1>Sample project is run on EC2  Instance</h1>';
  }
}
