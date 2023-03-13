export class CreateCarDTO {
  name: string;
  model: string;
  color: string;
  description: string;
  userUuid: string;
}
export class UpdateCarDTO {
  name?: string;
  model?: string;
  color?: string;
  description: string;
}
export class AssignOwnerDTO {
  ownerId: string;
}
