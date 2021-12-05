import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
