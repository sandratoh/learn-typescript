// TYPE ASSERTIONS -- use to specify a more specific type

// Note: type assertions are removed at compile-time
// -- No runtime checking associated
// -- Won't generate exception or null if type assertion is wrong

const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

// Alternate angle-bracket syntax
const myOtherCanvas = <HTMLCanvasElement>document.getElementById('main_canvas');

// TS type assertion rule: only allow concerion to a more or less specific vr of a type
// const x = 'hello' as number; // Error

// Use two assertions if get by this rule, allowing for complex coercion that are valid
// Step 1: assert to `any` or `unknown`
// Step 2: assert to desired type

declare const expr: any;
type T = { a: 1; b: 2; c: 3 };

const a = (expr as any) as T;
