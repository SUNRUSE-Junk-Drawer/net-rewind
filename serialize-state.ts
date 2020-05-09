import State from "./state";

function getTotalBytes(set: {
  readonly [key: string]: {
    readonly BYTES_PER_ELEMENT: number;
    readonly length: number;
  };
}): number {
  let total = 0;

  for (const key in set) {
    const value = set[key];
    total += value.BYTES_PER_ELEMENT * value.length;
  }

  return total;
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
  state: State<
    TInt8Name,
    TUint8Name,
    TInt16Name,
    TUint16Name,
    TInt32Name,
    TUint32Name,
    TFloat32Name,
    TFloat64Name
  >
): Uint8Array {
  const totalBytes =
    getTotalBytes(state.int8) +
    getTotalBytes(state.uint8) +
    getTotalBytes(state.int16) +
    getTotalBytes(state.uint16) +
    getTotalBytes(state.int32) +
    getTotalBytes(state.uint32) +
    getTotalBytes(state.float32) +
    getTotalBytes(state.float64);

  const output = new Uint8Array(totalBytes);

  const offset = 0;

  function writeBytes<TName extends string>(
    readonly order: ReadonlyArray<TName>
  ): void {}

  return output;
}
