import { Employee } from "../../../domain/entities/Employee";
import { EmployeeRepository } from "../../../domain/ports/repositories/EmployeeRepository";

const INITIAL_EMPLOYEE: Employee[] = [
  { id: 0, firstname: "Selma", lastname: "Zaim", age: 28, workFor: undefined },
  { id: 1, firstname: "Salima", lastname: "Zaim", age: 28, workFor: undefined },
];

export class FakeEmployee implements EmployeeRepository {
  constructor(private employees: Employee[] = INITIAL_EMPLOYEE) {}

  getEmployees(): Promise<Employee[]> {
    return Promise.resolve(this.employees);
  }
}
