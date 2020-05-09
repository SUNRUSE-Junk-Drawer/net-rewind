import AsymmetricState from "./asymmetric-state";

type SymmetricState<
  TInt8Name extends string,
  TUint8Name extends string,
  TInt16Name extends string,
  TUint16Name extends string,
  TInt32Name extends string,
  TUint32Name extends string,
  TFloat32Name extends string,
  TFloat64Name extends string,
  TValue
> = AsymmetricState<
  TInt8Name,
  TValue,
  TUint8Name,
  TValue,
  TInt16Name,
  TValue,
  TUint16Name,
  TValue,
  TInt32Name,
  TValue,
  TUint32Name,
  TValue,
  TFloat32Name,
  TValue,
  TFloat64Name,
  TValue
>;

export default SymmetricState;
