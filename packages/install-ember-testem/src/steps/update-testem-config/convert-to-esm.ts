import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { EOL } from 'node:os';
import { join } from 'node:path';

import { AST } from '@codemod-utils/ast-javascript';

import type { Options } from '../../types/index.js';

type ObjectProperty = ReturnType<typeof AST.builders.objectProperty>;

function createDefaultExport(file: string): string {
  let properties: ObjectProperty[] | undefined;

  AST.traverse(file, {
    visitAssignmentExpression(path) {
      if (
        path.node.left.type !== 'MemberExpression' ||
        path.node.left.object.type !== 'Identifier' ||
        path.node.left.object.name !== 'module' ||
        path.node.left.property.type !== 'Identifier' ||
        path.node.left.property.name !== 'exports'
      ) {
        return false;
      }

      if (path.node.right.type !== 'ObjectExpression') {
        return false;
      }

      properties = path.node.right.properties as ObjectProperty[];

      return false;
    },
  });

  if (properties === undefined) {
    return file;
  }

  const newFile = [`export default {};`, ``].join(EOL);

  const ast = AST.traverse(newFile, {
    visitExportDefaultDeclaration(path) {
      path.node.declaration = AST.builders.objectExpression(properties!);

      return false;
    },
  });

  return AST.print(ast);
}

export function convertToEsm(filePath: string, options: Options): void {
  const { projectRoot } = options;

  let file = readFileSync(join(projectRoot, filePath), 'utf8');

  file = createDefaultExport(file);

  writeFileSync(join(projectRoot, 'testem.mjs'), file, 'utf8');

  rmSync(join(projectRoot, filePath));
}
