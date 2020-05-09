import Application from "./application";
import ProcessedApplication from "./processed-application";

function processSet<TName extends string>(
  set: { [P in TName]: unknown }
): ReadonlyArray<TName> {
  return Object.keys(set).sort() as TName[];
}

export default function <
  TInt8Name extends string,
  TUint8Name extends string,
  TInt16Name extends string,
  TUint16Name extends string,
  TInt32Name extends string,
  TUint32Name extends string,
  TFloat32Name extends string,
  TFloat64Name extends string,
  TInputName extends string
>(
  application: Application<
    TInt8Name,
    TUint8Name,
    TInt16Name,
    TUint16Name,
    TInt32Name,
    TUint32Name,
    TFloat32Name,
    TFloat64Name,
    TInputName
  >
): ProcessedApplication<
  TInt8Name,
  TUint8Name,
  TInt16Name,
  TUint16Name,
  TInt32Name,
  TUint32Name,
  TFloat32Name,
  TFloat64Name,
  TInputName
> {
  return {
    stateOrder: {
      int8: processSet(application.initialState.int8),
      uint8: processSet(application.initialState.uint8),
      int16: processSet(application.initialState.int16),
      uint16: processSet(application.initialState.uint16),
      int32: processSet(application.initialState.int32),
      uint32: processSet(application.initialState.uint32),
      float32: processSet(application.initialState.float32),
      float64: processSet(application.initialState.float64),
    },
    inputOrder: processSet(application.defaultInputs),
  };
}
