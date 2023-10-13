import { UUID, UUIDV4 } from 'sequelize';
import { Column, DataType, PrimaryKey, Table, Model } from 'sequelize-typescript';

@Table
export class AppointmentEntity extends Model {

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
  date: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  heure_debut: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  motif: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  docteur: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lien: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: true
  })
  patientId: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'EN COURS'
  })
  statut: string;

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