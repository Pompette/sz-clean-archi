import { Employee } from "../../entities/Employee";

export interface GetEmployeePresentation {
  displayEmployees(employee: Employee[]): void;
}
