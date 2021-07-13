import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsNotEmpty, ValidateNested } from 'class-validator';

export class PlanningTemplateDisciplinePlanningsDto {
  @IsNotEmpty()
  planningTemplateDisciplineId: number;

  @IsNotEmpty()
  planningTemplatePlanningId: number;
}

export class PlanningDisciplineDto {
  @IsNotEmpty()
  themeId: number;

  @IsNotEmpty()
  groupId: number;

  @IsNotEmpty()
  planningId: number;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PlanningTemplateDisciplinePlanningsDto)
  planningTemplateDisciplinePlannings: PlanningTemplateDisciplinePlanningsDto[];
}

export class ParamsListPlanningDisciplineByPlanningIdDto {
  @IsNotEmpty()
  planningId: number;
}
