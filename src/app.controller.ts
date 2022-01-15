import { Body, Controller, Post } from '@nestjs/common';
import { AppService} from './app.service';
import { IServer, IVirtualMachine } from './app.dto';

@Controller('calculate/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  calculateServerHardware(@Body() data: {serverType: IServer, vms: IVirtualMachine[]}) {
    const { serverType, vms } = data;

    return this.appService.calculateServerHardware(serverType, vms);
  }

}
