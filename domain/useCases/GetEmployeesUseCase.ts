import { EmployeeRepository } from "../ports/repositories/EmployeeRepository";
import { GetEmployeePresentation } from "../ports/presenters/GetEmployeePresentation";

export class GetEmployeeUseCase {
  constructor(private employeeRepository: EmployeeRepository) {}

  async execute(presenter: GetEmployeePresentation) {
    const employees = await this.employeeRepository.getEmployees();
    presenter.displayEmployees(employees);
  }
}
