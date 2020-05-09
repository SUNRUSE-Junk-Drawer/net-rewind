import AsymmetricTyped from "./asymmetric-typed";

type ProcessedApplication<
  TInt8Name extends string,
  TUint8Name extends string,
  TInt16Name extends string,
  TUint16Name extends string,
  TInt32Name extends string,
  TUint32Name extends string,
  TFloat32Name extends string,
  TFloat64Name extends string,
  TInputName extends string
> = {
  readonly stateOrder: AsymmetricTyped<
    ReadonlyArray<TInt8Name>,
    ReadonlyArray<TUint8Name>,
    ReadonlyArray<TInt16Name>,
    ReadonlyArray<TUint16Name>,
    ReadonlyArray<TInt32Name>,
    ReadonlyArray<TUint32Name>,
    ReadonlyArray<TFloat32Name>,
    ReadonlyArray<TFloat64Name>
  >;

  readonly inputOrder: ReadonlyArray<TInputName>;
};

export default ProcessedApplication;
