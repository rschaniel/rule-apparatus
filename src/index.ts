const checkRuleField = <Input, Output>(args: Input, rule: Rule<Input, Output>, field: keyof Input): boolean =>
  args[field] === rule.input[field] || rule.input[field] === null;

export type Rule<I, O> = { input: I; output: O };

export const evaluate = <Input, Output>(
  ruleDefinitions: Rule<Input, Output>[],
  args: Input,
): Partial<Output> | null => {
  return ruleDefinitions
    .filter((rule) => Object.keys(rule.input).every((field) => checkRuleField(args, rule, field as keyof Input)))
    .map((rule) => {
      const output: any = {};

      Object.keys(rule.output).forEach((key) => {
        output[key] = rule.output[key as keyof Output];
      });

      return output;
    })[0];
};
