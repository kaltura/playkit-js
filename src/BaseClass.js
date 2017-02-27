import lf from "../../util/loggerFactory";

export default class BaseClass {
  logger: Object = null;

  constructor( name: string ) {
    this.logger = lf.getLogger( name );
  }
}
