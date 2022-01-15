import { Injectable } from '@nestjs/common';

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

    // try {
    //   let sum = vm.map((server) => server.HDD)
    //     .reduce((a, b) => a + b, 0);
    //   if (sum > serverType.HDD) {
    //     return {
    //     "message": "Data Storage Capacity exceeded"
    //     }
    //   } else if ( sum === serverType.HDD) {
    //     return serverType.result+=1;
    //   }
    //   return {
    //     "message": 'Number of Virtual Machines the User can use',
    //     "number of VMs": serverType.result += 1,
    //   };
    // } catch (e) {
    //   throw new HttpException('BadRequestException', HttpStatus.BAD_REQUEST)
    // }
  }
}

export interface IServer {
  CPU: number;
  RAM: number;
  HDD: number;
}

export type IVirtualMachine = IServer;


