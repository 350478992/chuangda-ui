import * as components from './index';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    cgkButton: typeof components.Button;
    cgkIcon: typeof components.Icon;
  }
}
export {};
