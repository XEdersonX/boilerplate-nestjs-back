import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import { PlanningTemplatePlanning } from './planningTemplatePlanning.model';

@Entity()
export class Planning {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  templatePlanningId: number;

  @Column()
  name: string;

  /*  @ManyToOne(() => User)
  @JoinColumn({ name: 'provider_id' })
  provider: User; */

  @Column()
  schoolGradeId: number;

  @Column()
  brandId: number;

  @Column()
  schoolYearId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @Column({ nullable: true })
  createdBy: number;

  @Column({ nullable: true })
  updatedBy: number;

  @Column({ nullable: true })
  deletedBy: number;

  @OneToMany(
    () => PlanningTemplatePlanning,
    (PlanningTemplatePlanning) => PlanningTemplatePlanning.planning,
  )
  PlanningTemplatePlannings: PlanningTemplatePlanning[];
}
