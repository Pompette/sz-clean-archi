import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FakeEmployee } from "../../../adapters/repositories/fakeData/FakeEmployee";
import { GetEmployeeUseCase } from "../../../domain/useCases/GetEmployeesUseCase";
import {
  EmployeeViewModel,
  EmployeePresenterVM,
} from "../../../adapters/vm/EmployeesViewModel";
import { Employee } from "../../../domain/entities/Employee";

function App() {
  const [employees, setEmployees] = useState<Employee[]>();
  const employeeRepository = new FakeEmployee();
  const getEmployeesUseCase = new GetEmployeeUseCase(employeeRepository);
  const employeesViewModel = new EmployeeViewModel(
    { employees: [] },
    getEmployeesUseCase
  );

  useEffect(() => {
    employeesViewModel.subscribeVM((newVm: EmployeePresenterVM) => {
      setEmployees(newVm.employees);
    });
    employeesViewModel.fetchEmployee();
  }, []);

  return (
    <div className="App">
      {employees?.map((e) => (
        <div key={e.id}>
          {e.firstname} {e.lastname}
        </div>
      ))}
    </div>
  );
}

export default App;
