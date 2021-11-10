import { evaluate } from './index';

interface Input {
    universityDegree: 'NONE' | 'BACHELOR' | 'MASTER';
    minimumYearsOfExperience: 0 | 2 | 5 | 8 | 10 | 15;
    hasBlog: boolean;
    lastYearsPerformance: 1 | 2 | 3 | 4 | 5;
}

interface Output {
    minSalary: number;
    maxSalary: number;
}

interface Rule {
    input: Input;
    output: Output;
}

const ruleDefinitions: Rule[] = [
    {
        input: { universityDegree: 'MASTER', minimumYearsOfExperience: 8, hasBlog: false, lastYearsPerformance: 3 },
        output: { minSalary: 120_000, maxSalary: 130_000 }
    },
    {
        input: { universityDegree: 'NONE', minimumYearsOfExperience: 10, hasBlog: true, lastYearsPerformance: 4 },
        output: { minSalary: 125_000, maxSalary: 135_000 }
    }
];


describe('rule engine', () => {
    it('should evaluate', () => {

        let candidateA: Input = { universityDegree: 'MASTER', minimumYearsOfExperience: 8, hasBlog: false, lastYearsPerformance: 3 };
        let candidateB: Input = { universityDegree: 'NONE', minimumYearsOfExperience: 10, hasBlog: true, lastYearsPerformance: 4 };

        expect(evaluate<Input, Output>(ruleDefinitions, candidateA)).toEqual({
            minSalary: 120_000,
            maxSalary: 130_000,
        });
        expect(evaluate<Input, Output>(ruleDefinitions, candidateB)).toEqual({
            minSalary: 125_000,
            maxSalary: 135_000,
        });
    });
});
