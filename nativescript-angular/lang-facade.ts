/* tslint:disable */
//Copied unexported functions from @angular/core/src/facade/lang
var globalScope = global;
export var global = globalScope;

export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null;
}

export function isBlank(obj: any): boolean {
  return obj === undefined || obj === null;
}

export function print(obj: Error | Object) {
  console.log(obj);
}

