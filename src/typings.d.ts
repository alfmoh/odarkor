/* SystemJS module definition */
declare var module: NodeModule;
declare var tinymce: any;
declare module 'automapper-ts';

interface NodeModule {
  id: string;
}

declare module "*.json" {
  const value: any;
  export default value;
}