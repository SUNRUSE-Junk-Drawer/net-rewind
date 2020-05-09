import State from "./state";

type Application<
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
  readonly initialState: State<
    TInt8Name,
    TUint8Name,
    TInt16Name,
    TUint16Name,
    TInt32Name,
    TUint32Name,
    TFloat32Name,
    TFloat64Name
  >;

  readonly defaultInputs: { readonly [P in TInputName]: number };

  readonly maximumPlayers: number;
  readonly maximumPlayersPerClient: number;
};

export default Application;
