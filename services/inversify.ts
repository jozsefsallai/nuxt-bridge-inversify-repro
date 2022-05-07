import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./inversify-types";
import { DemoService } from "./demo/DemoService";
import { IDemoService } from "./demo/IDemoService";
import { LoggingService } from "./logging/LoggingService";
import { ILoggingService } from "./logging/ILoggingService";

const appContainer = new Container();

appContainer
  .bind<IDemoService>(TYPES.DemoService)
  .to(DemoService)
  .inSingletonScope();

appContainer
  .bind<ILoggingService>(TYPES.LoggingService)
  .to(LoggingService)
  .inSingletonScope();

export { appContainer };
