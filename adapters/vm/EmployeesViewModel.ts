import { Employee } from "../../domain/entities/Employee";
import { GetEmployeePresentation } from "../../domain/ports/presenters/GetEmployeePresentation";
import { GetEmployeeUseCase } from "../../domain/useCases/GetEmployeesUseCase";

export type Subscriber<T> = (vm: T) => void;

export class EmployeePresenterVM {
  employees: Employee[] | undefined;
}

export class EmployeeViewModel implements GetEmployeePresentation {
  protected subscriber: Subscriber<T> | undefined;
  constructor(
    public vm: EmployeePresenterVM,
    private readonly getEmployeeUseCase: GetEmployeeUseCase
  ) {}

  notifyVM() {
    this.subscriber?.call(this.subscriber, this.vm);
  }

  subscribeVM(subscriber: Subscriber<T>) {
    this.subscriber = subscriber;
    this.subscriber(this.vm);
  }

  displayEmployees(employees: Employee[]): void {
    this.vm.employees = employees;
    this.notifyVM();
  }

  fetchEmployee() {
    this.getEmployeeUseCase.execute(this);
  }
}
