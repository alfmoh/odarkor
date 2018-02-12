/* SystemJS module definition */
declare var module: NodeModule;
declare module 'automapper-ts';

interface NodeModule {
  id: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}