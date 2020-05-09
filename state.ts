import AsymmetricState from "./asymmetric-state";

type State<
  TInt8Name extends string,
  TUint8Name extends string,
  TInt16Name extends string,
  TUint16Name extends string,
  TInt32Name extends string,
  TUint32Name extends string,
  TFloat32Name extends string,
  TFloat64Name extends string
> = AsymmetricState<
  TInt8Name,
  Int8Array,
  TUint8Name,
  Uint8Array,
  TInt16Name,
  Int16Array,
  TUint16Name,
  Uint16Array,
  TInt32Name,
  Int32Array,
  TUint32Name,
  Uint32Array,
  TFloat32Name,
  Float32Array,
  TFloat64Name,
  Float64Array
>;

export default State;
