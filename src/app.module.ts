import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MercaderiaModule } from './domain/mercaderia/mercaderia.module';
import { DepositoModule } from './domain/deposito/deposito.module';
import { EstanteModule } from './domain/estante/estante.module';
import { AuthModule } from './domain/auth/auth.module';
import { UserModule } from './domain/user/user.module';
import { ComputadoraModule } from './domain/computadoras/computadoras.module';
import { ComputadoraController } from './domain/computadoras/computadoras.controller';
import { ColaboradoresController } from './domain/colaboradores/colaboradores.controller';
import { ColaboradoresModule } from './domain/colaboradores/colaboradores.module';
import { TelefonoModule } from './domain/telefono/telefono.module';
import { MonitorService } from './domain/monitor/monitor.service';
import { MonitorModule } from './domain/monitor/monitor.module';
import { UpsModule } from './domain/ups/ups.module';
import { TecladoService } from './domain/teclado/teclado.service';
import { TecladoModule } from './domain/teclado/teclado.module';
import { NotebookController } from './domain/notebook/notebook.controller';
import { NotebookModule } from './domain/notebook/notebook.module';
import { OtrosController } from './domain/otros/otros.controller';
import { OtrosModule } from './domain/otros/otros.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'soporte',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    MercaderiaModule,
    DepositoModule,
    EstanteModule,
    AuthModule,
    UserModule,
    ComputadoraModule,
    ColaboradoresModule,
    TelefonoModule,
    MonitorModule,
    UpsModule,
    TecladoModule,
    NotebookModule,
    OtrosModule,
  ],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
