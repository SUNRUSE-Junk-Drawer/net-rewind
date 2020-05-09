import State from "./state";

function cloneType<
  TName extends string,
  TArray extends { [index: number]: number }
>(
  from: { readonly [P in TName]: TArray },
  constructor: { new (from: TArray): TArray }
): { readonly [P in TName]: TArray } {
  const output: { [name: string]: TArray } = {};

  for (const key in from) {
    output[key] = new constructor(from[key]);
  }

  return output as { readonly [P in TName]: TArray };
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
  >
): State<
  TInt8Name,
  TUint8Name,
  TInt16Name,
  TUint16Name,
  TInt32Name,
  TUint32Name,
  TFloat32Name,
  TFloat64Name
> {
  return {
    int8: cloneType(from.int8, Int8Array),
    uint8: cloneType(from.uint8, Uint8Array),
    int16: cloneType(from.int16, Int16Array),
    uint16: cloneType(from.uint16, Uint16Array),
    int32: cloneType(from.int32, Int32Array),
    uint32: cloneType(from.uint32, Uint32Array),
    float32: cloneType(from.float32, Float32Array),
    float64: cloneType(from.float64, Float64Array),
  };
}
