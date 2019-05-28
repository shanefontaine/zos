import Spinnies from 'spinnies';

export default class Spinners {
  private spinners: Spinnies;

  public constructor() {
    this.spinners = new Spinnies({
      color: 'blueBright',
      successColor: 'greenBright',
      failColor: 'redBright'
    });
  }

  public start(reference: string, text?: string) {
    this.spinners.add(reference, { text });
  }

  public succeed(reference: string, text?: string) {
    this.spinners.succeed(reference, { text });
  }

  public fail(reference: string, text?: string) {
    this.spinners.fail(reference, { text });
  }

  public stopAll(status?: string) {
    this.spinners.stopAll(status);
  }
}
