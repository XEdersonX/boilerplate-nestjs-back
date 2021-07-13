import { IsNumberString } from 'class-validator';

export class ParamsListPlanningTemplateDto {
  @IsNumberString()
  schoolYearId: number;

  @IsNumberString()
  gradeId: number;
}
