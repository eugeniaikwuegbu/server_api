import { Controller, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getVMDetails() {
    // ( server, vm ) = request.body
    // return this.appService.getVMDetails();
  }
}
