import AsymmetricTyped from "./asymmetric-typed";

type AsymmetricState<
  TInt8Name extends string,
  TInt8Value,
  TUint8Name extends string,
  TUint8Value,
  TInt16Name extends string,
  TInt16Value,
  TUint16Name extends string,
  TUint16Value,
  TInt32Name extends string,
  TInt32Value,
  TUint32Name extends string,
  TUint32Value,
  TFloat32Name extends string,
  TFloat32Value,
  TFloat64Name extends string,
  TFloat64Value
> = AsymmetricTyped<
  { readonly [P in TInt8Name]: TInt8Value },
  { readonly [P in TUint8Name]: TUint8Value },
  { readonly [P in TInt16Name]: TInt16Value },
  { readonly [P in TUint16Name]: TUint16Value },
  { readonly [P in TInt32Name]: TInt32Value },
  { readonly [P in TUint32Name]: TUint32Value },
  { readonly [P in TFloat32Name]: TFloat32Value },
  { readonly [P in TFloat64Name]: TFloat64Value }
>;

export default AsymmetricState;
