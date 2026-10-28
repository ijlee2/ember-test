import chokidar from 'chokidar';
import { type SinonStub, stub } from 'sinon';
import Testem from 'testem';

type Method =
  | 'chokidarWatch'
  | 'consoleError'
  | 'consoleLog'
  | 'mathRandom'
  | 'testemRestart'
  | 'testemSetDefaultOptions'
  | 'testemStartCI'
  | 'testemStartDev';

let stubs: Record<Method, SinonStub>;

export function stubMethods(): Record<Method, SinonStub> {
  stubs = {
    chokidarWatch: stub(chokidar, 'watch'),
    consoleError: stub(console, 'error'),
    consoleLog: stub(console, 'log'),
    mathRandom: stub(Math, 'random'),
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
