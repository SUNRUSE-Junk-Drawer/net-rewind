type AsymmetricTyped<
  TInt8Value,
  TUint8Value,
  TInt16Value,
  TUint16Value,
  TInt32Value,
  TUint32Value,
  TFloat32Value,
  TFloat64Value
> = {
  readonly int8: TInt8Value;
  readonly uint8: TUint8Value;
  readonly int16: TInt16Value;
  readonly uint16: TUint16Value;
  readonly int32: TInt32Value;
  readonly uint32: TUint32Value;
  readonly float32: TFloat32Value;
  readonly float64: TFloat64Value;
};

export default AsymmetricTyped;
