import { Company } from "./Company";

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  workFor: Company | undefined;
}
