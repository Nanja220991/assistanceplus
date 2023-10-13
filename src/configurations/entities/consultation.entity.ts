import { UUID, UUIDV4 } from 'sequelize';
import { Column, DataType, PrimaryKey, Table, Model } from 'sequelize-typescript';

@Table
export class ConsultationEntity extends Model {

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
  date_consultation: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id_patient: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  motif: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  histo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  info_paraclinique: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  info_clinique: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  conduite: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: true
  })
  diagnostic: string;

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