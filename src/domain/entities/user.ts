interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export default class UserModel implements IUser {
  private _id: number;
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  private _password: string;
  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }

  constructor(
    _id: number,
    _firstName: string,
    _lastName: string,
    _email: string,
    _password: string
  ) {
    this._id = _id;
    this._firstName = _firstName;
    this._lastName = _lastName;
    this._email = _email;
    this._password = _password;
  }
}
