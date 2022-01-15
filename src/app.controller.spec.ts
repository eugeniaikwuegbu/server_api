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
    it('should calculate server hardware', () => {
      expect(appController.calculateServerHardware({
          serverType: { CPU: 2, RAM: 32, HDD: 100 },
          vms: [{ CPU: 1, RAM: 16, HDD: 10 }, { CPU: 1, RAM: 16, HDD: 10 }, { CPU: 2, RAM: 32, HDD: 100 }],
        })).toBe(2);
    });
  });
});
