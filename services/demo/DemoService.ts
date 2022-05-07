import { injectable } from "inversify";
import { IDemoService } from "./IDemoService";

@injectable()
export class DemoService implements IDemoService {
  public getDemoMessage(): string {
    return "Hello world!";
  }
}
