export class Task {

  id: number;
  name: string;
  description: string;
  pending: boolean;
  dueDate: Date;
  employeeEmail: string;
  managerEmail: string;
  constructor(
    id: number,
    name: string,
    description: string,
    pending: boolean,
    dueDate: Date,
    employeeEmail: string,
    managerEmail: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.pending = pending;
    this.dueDate = dueDate;
    this.employeeEmail = employeeEmail;
    this.managerEmail = managerEmail;
  }

  public getNiceDueDate(): Date {
    return new Date(this.dueDate); // que ??????????????
  }
}
