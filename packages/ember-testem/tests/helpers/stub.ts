import chokidar from 'chokidar';
import { type SinonStub, stub } from 'sinon';
import Testem from 'testem';

type Method =
  | 'chokidarWatch'
  | 'consoleError'
  | 'testemRestart'
  | 'testemSetDefaultOptions'
  | 'testemStartCI'
  | 'testemStartDev';

let stubs: Record<Method, SinonStub>;

export function stubMethods(): Record<Method, SinonStub> {
  stubs = {
    chokidarWatch: stub(chokidar, 'watch'),
    consoleError: stub(console, 'error'),
    testemRestart: stub(Testem.prototype, 'restart'),
    testemSetDefaultOptions: stub(Testem.prototype, 'setDefaultOptions'),
    testemStartCI: stub(Testem.prototype, 'startCI'),
    testemStartDev: stub(Testem.prototype, 'startDev'),
  };

  return stubs;
}

export function restoreMethods(): void {
  for (const method of Object.values(stubs)) {
    method.restore();
  }
}
