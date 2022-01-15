import { Injectable } from '@nestjs/common';
import { IServer, IVirtualMachine } from './app.dto';

@Injectable()
export class AppService {

  calculateServerHardware(serverType: IServer, vms: IVirtualMachine[] ): number {
    let result = 0;

    for (let vm of vms) {
      if (vm.CPU < serverType.CPU && vm.HDD < serverType.HDD && vm.RAM < serverType.RAM) {
        result += 1;
      }
    }

    return result;

  }
}


