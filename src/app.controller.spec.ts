import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should details of Virtual Machines', () => {
      expect(appController.getVMDetails()).toBe({
        "message": "Number of Virtual Machines the User can use",
        "data": {
          "number_of_vms": 2
        }
      });
    });
  });
});
