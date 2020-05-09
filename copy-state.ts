import State from "./state";

function copyType<TName extends string>(
  from: {
    readonly [P in TName]: { [index: number]: number; readonly length: number };
  },
  to: { readonly [P in TName]: { [index: number]: number } }
): void {
  for (const name in from) {
    const fromColumn = from[name];
    const toColumn = to[name];
    for (let i = 0; i < fromColumn.length; i++) {
      toColumn[i] = fromColumn[i];
    }
  }
}

export default function <
  TInt8Name extends string,
  TUint8Name extends string,
  TInt16Name extends string,
  TUint16Name extends string,
  TInt32Name extends string,
  TUint32Name extends string,
  TFloat32Name extends string,
  TFloat64Name extends string
>(
  from: State<
    TInt8Name,
    TUint8Name,
    TInt16Name,
    TUint16Name,
    TInt32Name,
    TUint32Name,
    TFloat32Name,
    TFloat64Name
  >,
  to: State<
    TInt8Name,
    TUint8Name,
    TInt16Name,
    TUint16Name,
    TInt32Name,
    TUint32Name,
    TFloat32Name,
    TFloat64Name
  >
): void {
  copyType(from.int8, to.int8);
  copyType(from.uint8, to.uint8);
  copyType(from.int16, to.int16);
  copyType(from.uint16, to.uint16);
  copyType(from.int32, to.int32);
  copyType(from.uint32, to.uint32);
  copyType(from.float32, to.float32);
  copyType(from.float64, to.float64);
}
