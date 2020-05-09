import State from "./state";
import copyState from "./copy-state";

describe(`copyState`, () => {
  const testInt8A = [
    52,
    110,
    -39,
    46,
    -118,
    -78,
    -56,
    39,
    9,
    29,
    104,
    54,
    112,
    2,
    125,
    -107,
  ];

  const testInt8B = [
    -99,
    -4,
    -13,
    115,
    109,
    -17,
    39,
    -18,
    45,
    -54,
    29,
    -11,
    46,
    3,
    -58,
    -56,
  ];

  const testInt8C = [
    20,
    30,
    19,
    -5,
    -29,
    16,
    -101,
    -73,
    -99,
    51,
    61,
    -12,
    79,
    119,
    -64,
    -54,
    30,
    -1,
    34,
    37,
    114,
  ];

  const testUint8A = [
    137,
    46,
    23,
    40,
    136,
    57,
    182,
    183,
    143,
    111,
    42,
    33,
    23,
    27,
  ];

  const testUint8B = [152, 105, 209, 21, 191, 118, 5, 35, 144, 63];

  const testInt16A = [
    -12136,
    -16421,
    8175,
    -5326,
    18182,
    -23942,
    -4551,
    -2734,
    -14589,
    9711,
  ];

  const testInt16B = [31284, -29673, -28814, 23746];

  const testUint16A = [
    54392,
    45324,
    41747,
    19536,
    4674,
    41088,
    15330,
    9894,
    22388,
    51150,
    33201,
    13396,
    21699,
    62314,
  ];

  const testUint16B = [
    24008,
    59450,
    42600,
    9153,
    25041,
    20068,
    30770,
    60131,
    22902,
    9247,
    30348,
    36838,
    40812,
    60064,
    30374,
    10623,
  ];

  const testUint16C = [
    27351,
    50079,
    47469,
    37440,
    17426,
    14182,
    29518,
    48170,
    29955,
  ];

  const testUint16D = [12322, 32321, 52895, 25987, 54142, 26264];

  const testInt32A = [
    1176714941,
    933505258,
    1483952496,
    1699136734,
    -1333455790,
    1845049414,
  ];

  const testInt32B = [
    -2041272319,
    -2146610963,
    -1948440220,
    1969691617,
    -765395741,
    -1671126553,
    -1995005438,
    1861935775,
  ];

  const testUint32A = [
    867163056,
    4028163258,
    1834750412,
    1020701175,
    3998821433,
    3976285241,
    3492357378,
    3976523543,
    1254031437,
  ];

  const testUint32B = [
    1174668154,
    1143082980,
    3809695149,
    2659144601,
    2161179362,
    1508082006,
  ];

  const testUint32C = [
    97217755,
    2663102623,
    3968424432,
    3966364872,
    1819362935,
    1875094259,
    621351986,
    399711976,
    3693120910,
    3123076776,
    2698620086,
    2129313221,
    2049189120,
  ];

  const testFloat32A = new Float32Array([
    -91.68167,
    63.60889,
    -23.32582,
    16.49596,
    -14.16829,
    -44.87567,
  ]);

  const testFloat32B = new Float32Array([
    25.6191,
    26.18521,
    -79.81278,
    -13.09108,
    65.17436,
    -61.22359,
    -6.07463,
  ]);

  const testFloat64A = [
    -72.49897,
    -12.15406,
    -94.05881,
    73.04591,
    25.39654,
    47.81388,
    31.1295,
  ];

  const testFloat64B = [
    -91.64377,
    1.35653,
    82.1137,
    -39.72943,
    99.86766,
    -48.34021,
    61.19666,
    71.85836,
    -45.08987,
    -70.14468,
  ];

  const testFloat64C = [
    -68.95183,
    -56.6421,
    -56.12773,
    71.20154,
    45.59109,
    80.76075,
    31.85096,
    85.07371,
  ];

  type Int8Name = `testInt8A` | `testInt8B` | `testInt8C`;
  type Uint8Name = `testUint8A` | `testUint8B`;
  type Int16Name = `testInt16A` | `testInt16B`;
  type Uint16Name =
    | `testUint16A`
    | `testUint16B`
    | `testUint16C`
    | `testUint16D`;
  type Int32Name = `testInt32A` | `testInt32B`;
  type Uint32Name = `testUint32A` | `testUint32B` | `testUint32C`;
  type Float32Name = `testFloat32A` | `testFloat32B`;
  type Float64Name = `testFloat64A` | `testFloat64B` | `testFloat64C`;

  type TestState = State<
    Int8Name,
    Uint8Name,
    Int16Name,
    Uint16Name,
    Int32Name,
    Uint32Name,
    Float32Name,
    Float64Name
  >;

  const input: TestState = {
    int8: {
      testInt8A: new Int8Array(testInt8A),
      testInt8B: new Int8Array(testInt8B),
      testInt8C: new Int8Array(testInt8C),
    },
    uint8: {
      testUint8A: new Uint8Array(testUint8A),
      testUint8B: new Uint8Array(testUint8B),
    },
    int16: {
      testInt16A: new Int16Array(testInt16A),
      testInt16B: new Int16Array(testInt16B),
    },
    uint16: {
      testUint16A: new Uint16Array(testUint16A),
      testUint16B: new Uint16Array(testUint16B),
      testUint16C: new Uint16Array(testUint16C),
      testUint16D: new Uint16Array(testUint16D),
    },
    int32: {
      testInt32A: new Int32Array(testInt32A),
      testInt32B: new Int32Array(testInt32B),
    },
    uint32: {
      testUint32A: new Uint32Array(testUint32A),
      testUint32B: new Uint32Array(testUint32B),
      testUint32C: new Uint32Array(testUint32C),
    },
    float32: {
      testFloat32A: new Float32Array(testFloat32A),
      testFloat32B: new Float32Array(testFloat32B),
    },
    float64: {
      testFloat64A: new Float64Array(testFloat64A),
      testFloat64B: new Float64Array(testFloat64B),
      testFloat64C: new Float64Array(testFloat64C),
    },
  };

  const output: TestState = {
    int8: {
      testInt8A: new Int8Array([
        80,
        45,
        -72,
        15,
        6,
        -41,
        -83,
        -37,
        18,
        56,
        -26,
        -24,
        96,
        -27,
        -4,
        -124,
      ]),
      testInt8B: new Int8Array([
        -3,
        -74,
        124,
        -6,
        -90,
        -116,
        14,
        121,
        -68,
        -24,
        101,
        -77,
        67,
        -126,
        93,
        50,
      ]),
      testInt8C: new Int8Array([
        43,
        59,
        127,
        73,
        -100,
        -59,
        -12,
        -90,
        21,
        -75,
        -38,
        -14,
        -125,
        -64,
        -67,
        -27,
        1,
        46,
        7,
        69,
        71,
      ]),
    },
    uint8: {
      testUint8A: new Uint8Array([
        143,
        53,
        63,
        44,
        240,
        85,
        158,
        187,
        99,
        42,
        78,
        151,
        159,
        192,
      ]),
      testUint8B: new Uint8Array([
        80,
        162,
        174,
        119,
        113,
        161,
        7,
        107,
        182,
        132,
      ]),
    },
    int16: {
      testInt16A: new Int16Array([
        32412,
        20305,
        -21587,
        7288,
        -23750,
        31629,
        -22308,
        -23728,
        -14925,
        -7058,
      ]),
      testInt16B: new Int16Array([28693, -978, 23084, -15273]),
    },
    uint16: {
      testUint16A: new Uint16Array([
        7365,
        41786,
        50843,
        37809,
        4521,
        12335,
        55236,
        61097,
        51392,
        22748,
        33712,
        11318,
        25124,
        7275,
      ]),
      testUint16B: new Uint16Array([
        3014,
        64661,
        8883,
        8702,
        58295,
        5592,
        59145,
        10498,
        5624,
        51650,
        54820,
        45843,
        1164,
        30792,
        38762,
        39337,
      ]),
      testUint16C: new Uint16Array([
        62908,
        33062,
        36820,
        45459,
        4755,
        37560,
        21752,
        9328,
        6127,
      ]),
      testUint16D: new Uint16Array([39789, 47039, 22720, 15850, 53338, 24694]),
    },
    int32: {
      testInt32A: new Int32Array([
        74513893,
        1466202619,
        1635463592,
        537376228,
        -1665460704,
        -511480087,
      ]),
      testInt32B: new Int32Array([
        -2130282299,
        -508616933,
        -1754869119,
        2129755735,
        880037776,
        81013510,
        -1015014142,
        126833367,
      ]),
    },
    uint32: {
      testUint32A: new Uint32Array([
        2643699784,
        3723856142,
        3180369048,
        404833932,
        3786777854,
        2379486379,
        3611384956,
        1164339355,
        175511272,
      ]),
      testUint32B: new Uint32Array([
        2281741403,
        3129266653,
        3053212673,
        281941567,
        2032739765,
        1100035886,
      ]),
      testUint32C: new Uint32Array([
        675320609,
        713226452,
        1096583089,
        3449634403,
        23329373,
        1508827756,
        2011416161,
        1327571105,
        1419493850,
        489351295,
        2489981106,
        944599804,
        1347626449,
      ]),
    },
    float32: {
      testFloat32A: new Float32Array([
        -27.79327,
        -73.82627,
        34.76917,
        88.30322,
        93.47768,
        -43.00318,
      ]),
      testFloat32B: new Float32Array([
        40.1005,
        -79.8906,
        -85.68389,
        -3.97199,
        -26.3369,
        -20.87422,
        35.02955,
      ]),
    },
    float64: {
      testFloat64A: new Float64Array([
        -3.80694,
        -83.40064,
        91.84363,
        -74.39138,
        39.21418,
        -19.66862,
        -67.81201,
      ]),
      testFloat64B: new Float64Array([
        -11.30168,
        -46.17601,
        65.07362,
        42.38286,
        -19.84526,
        -19.99113,
        -79.70401,
        -20.68661,
        -21.14182,
        -6.2062,
      ]),
      testFloat64C: new Float64Array([
        -86.26276,
        49.67193,
        10.02755,
        31.66227,
        -13.52108,
        -99.36718,
        19.51143,
        82.40461,
      ]),
    },
  };

  beforeAll(() => {
    copyState(input, output);
  });

  it(`does not modify int8s`, () => {
    expect(Array.from(input.int8.testInt8A)).toEqual(testInt8A);
    expect(Array.from(input.int8.testInt8B)).toEqual(testInt8B);
    expect(Array.from(input.int8.testInt8C)).toEqual(testInt8C);
  });
  it(`does not modify uint8s`, () => {
    expect(Array.from(input.uint8.testUint8A)).toEqual(testUint8A);
    expect(Array.from(input.uint8.testUint8B)).toEqual(testUint8B);
  });
  it(`does not modify int16s`, () => {
    expect(Array.from(input.int16.testInt16A)).toEqual(testInt16A);
    expect(Array.from(input.int16.testInt16B)).toEqual(testInt16B);
  });
  it(`does not modify uint16s`, () => {
    expect(Array.from(input.uint16.testUint16A)).toEqual(testUint16A);
    expect(Array.from(input.uint16.testUint16B)).toEqual(testUint16B);
    expect(Array.from(input.uint16.testUint16C)).toEqual(testUint16C);
    expect(Array.from(input.uint16.testUint16D)).toEqual(testUint16D);
  });
  it(`does not modify int32s`, () => {
    expect(Array.from(input.int32.testInt32A)).toEqual(testInt32A);
    expect(Array.from(input.int32.testInt32B)).toEqual(testInt32B);
  });
  it(`does not modify uint32s`, () => {
    expect(Array.from(input.uint32.testUint32A)).toEqual(testUint32A);
    expect(Array.from(input.uint32.testUint32B)).toEqual(testUint32B);
    expect(Array.from(input.uint32.testUint32C)).toEqual(testUint32C);
  });
  it(`does not modify float32s`, () => {
    expect(Array.from(input.float32.testFloat32A)).toEqual(
      Array.from(testFloat32A)
    );
    expect(Array.from(input.float32.testFloat32B)).toEqual(
      Array.from(testFloat32B)
    );
  });
  it(`does not modify float64s`, () => {
    expect(Array.from(input.float64.testFloat64A)).toEqual(testFloat64A);
    expect(Array.from(input.float64.testFloat64B)).toEqual(testFloat64B);
    expect(Array.from(input.float64.testFloat64C)).toEqual(testFloat64C);
  });

  it(`copies int8s`, () => {
    expect(Array.from(output.int8.testInt8A)).toEqual(testInt8A);
    expect(Array.from(output.int8.testInt8B)).toEqual(testInt8B);
    expect(Array.from(output.int8.testInt8C)).toEqual(testInt8C);
  });
  it(`copies uint8s`, () => {
    expect(Array.from(output.uint8.testUint8A)).toEqual(testUint8A);
    expect(Array.from(output.uint8.testUint8B)).toEqual(testUint8B);
  });
  it(`copies int16s`, () => {
    expect(Array.from(output.int16.testInt16A)).toEqual(testInt16A);
    expect(Array.from(output.int16.testInt16B)).toEqual(testInt16B);
  });
  it(`copies uint16s`, () => {
    expect(Array.from(output.uint16.testUint16A)).toEqual(testUint16A);
    expect(Array.from(output.uint16.testUint16B)).toEqual(testUint16B);
    expect(Array.from(output.uint16.testUint16C)).toEqual(testUint16C);
    expect(Array.from(output.uint16.testUint16D)).toEqual(testUint16D);
  });
  it(`copies int32s`, () => {
    expect(Array.from(output.int32.testInt32A)).toEqual(testInt32A);
    expect(Array.from(output.int32.testInt32B)).toEqual(testInt32B);
  });
  it(`copies uint32s`, () => {
    expect(Array.from(output.uint32.testUint32A)).toEqual(testUint32A);
    expect(Array.from(output.uint32.testUint32B)).toEqual(testUint32B);
    expect(Array.from(output.uint32.testUint32C)).toEqual(testUint32C);
  });
  it(`copies float32s`, () => {
    expect(Array.from(output.float32.testFloat32A)).toEqual(
      Array.from(testFloat32A)
    );
    expect(Array.from(output.float32.testFloat32B)).toEqual(
      Array.from(testFloat32B)
    );
  });
  it(`copies float64s`, () => {
    expect(Array.from(output.float64.testFloat64A)).toEqual(testFloat64A);
    expect(Array.from(output.float64.testFloat64B)).toEqual(testFloat64B);
    expect(Array.from(output.float64.testFloat64C)).toEqual(testFloat64C);
  });
});
