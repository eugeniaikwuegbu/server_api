import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getVMDetails(serverType:IServer, vm: MachineList ) {
    try {
      let sum = vm.map((server) => server.HDD)
        .reduce((a, b) => a + b, 0);
      if (sum >= serverType.HDD) {
        return;
      }
      return {
        'message': 'Number of vms the user can use',
        'number of VMs': serverType.result += 1,
      };
    } catch (e) {
      throw new HttpException('BadRequestException', HttpStatus.BAD_REQUEST)
    }
  }
}

interface IServer {
  CPU: number;
  RAM: number;
  HDD: number;
  result: number;
}

interface IVirtualMachines {
  CPU: number;
  RAM: string;
  HDD: number;
}

type MachineList = [IVirtualMachines]

