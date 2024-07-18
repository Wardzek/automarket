import {
  argsOrArgArray,
  filter,
  not,
  raceWith
} from "./chunk-RCX4RESM.js";
import {
  __read,
  __spreadArray
} from "./chunk-UYGZEGTL.js";

// node_modules/rxjs/dist/esm5/internal/operators/partition.js
function partition(predicate, thisArg) {
  return function(source) {
    return [filter(predicate, thisArg)(source), filter(not(predicate, thisArg))(source)];
  };
}

// node_modules/rxjs/dist/esm5/internal/operators/race.js
function race() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray(args))));
}

export {
  partition,
  race
};
//# sourceMappingURL=chunk-KO2YF33M.js.map
