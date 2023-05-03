import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/CustomerRegister"
import { Authorized } from "./Authorized"
import { TicketList } from "../components/serviceTickets/TicketList"
import { Ticket } from "../components/serviceTickets/Ticket"
import { TicketForm } from "../components/serviceTickets/TicketForm"
import { EmployeeRegister } from "../components/auth/EmployeeRegister"
import { StaffAuthorized } from "./StaffAuthorized"
import { CustomerList } from "../components/customers/CustomerList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { Employee } from "../components/employees/Employee"
import { EmployeeForm } from "../components/employees/EmployeeForm"

export const ApplicationViews = () => {
  return <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/register-employee" element={<EmployeeRegister />} />

    <Route element={<Authorized />}>
      <Route path="/" element={<TicketList />} />
      <Route exact path="/tickets/:ticketId" element={<Ticket />} />
      <Route path="/tickets/create" element={<TicketForm />} />
    </Route>

    <Route element={<StaffAuthorized />}>
      <Route path="/customers" element={<CustomerList />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees/:employeeId" element={<Employee />} />
      <Route path="/employees/create" element={<EmployeeForm />} />
    </Route>
  </Routes>
}
