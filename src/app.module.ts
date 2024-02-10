import { Module } from '@nestjs/common';
import { AlarmsModule } from './alarms/application/alarms.module';
import { AlarmsInfrastructureModule } from './alarms/infrastructure/alarms-infrastructure.module';
import { ApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-options.interface';
import { CoreModule } from './core/core.module';
import { CqrsModule } from '@nestjs/cqrs';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [CoreModule, CqrsModule.forRoot(), SharedModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    // 👈 new method
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        AlarmsModule.withInfrastucture(
          AlarmsInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}
