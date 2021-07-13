import { IsNotEmpty } from 'class-validator';

export class PlanningDto {
  @IsNotEmpty()
  schoolGradeId: number;

  @IsNotEmpty()
  brandId: number;

  @IsNotEmpty()
  schoolYearId: number;

  @IsNotEmpty()
  name: string;
}
