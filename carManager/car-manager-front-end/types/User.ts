export class User {
  uuid!: string;
  nombre?: string;
  apellidoP?: string;
  apellidoM?: string;
  edad?: number;
}
export class SaveUser {
  nombre!: string;
  apellidoP!: string;
  apellidoM!: string;
  edad!: number;
}
export interface userProps {
  user: User;
}
