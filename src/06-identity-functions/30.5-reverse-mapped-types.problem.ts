import { Equal, Expect } from "../helpers/type-utils";

export function makeEventHandlers<
  T extends {
    [K in keyof T]: (val: K) => void;
  }
>(obj: T) {
  return obj;
}

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "click">>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, "focus">>;
  },
});
