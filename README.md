# Rule-Apparatus
A simple rule engine

## Installation

```
npm i rule-apparatus
```

## Usage

Definition: 

```
interface Input {
    input1: string | null;
    input2: string | null;
}

interface Output {
    flag1: boolean | null;
    flag2: boolean | null;
}

interface Rule {
    input: Input;
    output: Output;
}
```

Evaluation:

```
const ruleDefinitions: Rule[] = [
    {input: {input1: 'hello', input2: 'world'}, output: {flag1: true, flag2: true}},
    {input: {input1: null, input2: 'world'}, output: {flag1: false, flag2: true}},
    {input: {input1: 'hello', input2: null}, output: {flag1: true, flag2: false}},
    {input: {input1: null, input2: null}, output: {flag1: false, flag2: false}},
];

evaluate<Input, Output>(ruleDefinitions, {input1: 'hello', input2: 'world'});
// { flag1: true, flag2: true }
```

