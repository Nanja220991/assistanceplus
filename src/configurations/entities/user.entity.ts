import { UUID, UUIDV4 } from 'sequelize';
import { Column, DataType, PrimaryKey, Table, Model } from 'sequelize-typescript';

@Table
export class UserEntity extends Model {

  @PrimaryKey
  @Column({
    type: UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'ADMIN'
  })
  role: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  statut: boolean;
}