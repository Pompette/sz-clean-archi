import { Employee } from "../../entities/Employee";

export interface EmployeeRepository {
  getEmployees(): Promise<Employee[]>;
  //   validateEmployee(employee: Employee): boolean;
}
