import { CompanyState } from "./CompanyState";

export interface Company {
  id: number;
  name: string;
  createdAt: Date;
  status: CompanyState;
}
