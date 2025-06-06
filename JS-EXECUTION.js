/*
javascript execution context
1.global execution context
2.function execution context
3.eval execution context
Great! Based on your notes, I'll summarize the content and then provide a clear diagram representing:

1. JavaScript Execution Context (Global, Function, Eval)


2. Memory and Execution Phases


3. Call Stack (LIFO structure)




---

✍️ Summary:

1. JavaScript Execution Context

Global Execution Context

Function Execution Context

Eval Execution Context (rarely used)


Each context goes through:

Memory Phase (Creation Phase): Variables declared, assigned undefined, functions hoisted.

Execution Phase: Actual code execution.


2. Example:

let val1 = 10;
let val2 = 20;

function add(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = add(val1, val2);
let result2 = add(10, 5);


---

3. Memory Phase:

val1 => undefined
val2 => undefined
add  => function definition
result1 => undefined
result2 => undefined

4. Execution Phase:

val1 => 10
val2 => 20
add => [function]
result1 => 30
result2 => 15


---

5. Call Stack (LIFO - Last In First Out)

function a() {
  console.log("Hello");
}
function b() {
  console.log("Hello Shivam");
}
a();
b();

Call stack:

|      |
|  b() | <-- on top, executed last, removed first
|  a() |
|Global|


---

✅ Diagram

Now here's the combined diagram:

🧠 JavaScript Execution Context & Call Stack Diagram:

Execution Context Stack
-------------------------------------------------
|                  Global Context                |
-------------------------------------------------
|              Function Execution Context        |
|   (Created when add(val1, val2) is called)     |
-------------------------------------------------

PHASES IN EACH CONTEXT:
1. Memory Phase
   - Variables declared -> undefined
   - Functions -> hoisted

2. Execution Phase
   - Code runs
   - Values assigned and returned

-------------------------------------------------
              Call Stack (LIFO)
-------------------------------------------------
|            add(10, 5) - Function Context       |
|            add(val1, val2) - Function Context  |
|            Global Execution Context            |
-------------------------------------------------

Pop order: Top to Bottom (LIFO)
*/