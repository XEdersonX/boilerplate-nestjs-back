import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';

import { Planning } from './planning.model';

@Entity()
export class PlanningTemplatePlanning {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  planningId: number;

  @Column()
  planningTemplateId: number;

  @CreateDateColumn()
  createdAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ nullable: true })
  createdBy: number;

  @Column({ nullable: true })
  deletedBy: number;

  @ManyToOne(() => Planning, (planning) => planning.PlanningTemplatePlannings)
  planning: Planning;
}
