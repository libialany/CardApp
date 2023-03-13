export class CreateUserDTO {
  nombre: string;
  edad: number;
  apellidoM: string;
  apellidoP: string;
  cardId: string;
}
export class AssignCarToUserDTO {
  uuidCar?: string;
  uuidUser?: string;
}
export class UpdateUserDTO {
  nombre?: string;
  edad?: number;
  apellidoM?: string;
  apellidoP?: string;
}
