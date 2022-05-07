import { inject, injectable } from "inversify";
import { IDemoService } from "../demo/IDemoService";
import { TYPES } from "../inversify-types";
import { ILoggingService } from "./ILoggingService";

@injectable()
export class LoggingService implements ILoggingService {
  constructor(@inject(TYPES.DemoService) private demoService: IDemoService) {}

  public logDemoMessage() {
    console.log("[LoggingService]", this.demoService.getDemoMessage());
  }
}
