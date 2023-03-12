export class CreateUserDTO {
  nombre: string;
  edad: number;
  apellidoM: string;
  apellidoP: string;
}
export class UpdateUserDTO {
  nombre?: string;
  edad?: number;
  apellidoM?: string;
  apellidoP: string;
}
