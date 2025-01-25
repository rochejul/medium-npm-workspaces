import { sum } from "@example/module-a";
import { sub } from "@example/module-b";

const result = sub(sum(25, 42), 7);
console.info("Result:", result);
