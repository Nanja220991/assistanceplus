import { UUID, UUIDV4 } from 'sequelize';
import { Column, DataType, PrimaryKey, Table, Model } from 'sequelize-typescript';

@Table
export class PatientEntity extends Model {

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
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nom: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  prenom: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birthday: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  adress: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  contact: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true
  })
  statut: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  userCreate: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  userUpdate: string;

}