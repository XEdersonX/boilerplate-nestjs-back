import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1624479473228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // CREATE TABLES
    await queryRunner.query(`CREATE TABLE planning (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplatePlanningId int NULL, 
      schoolGradeId int NOT NULL, 
      brandId int NOT NULL, 
      schoolYearId int NOT NULL, 
      name varchar(255) NOT NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplate (
      id int NOT NULL AUTO_INCREMENT, 
      chartId int NOT NULL, 
      schoolYearId int NOT NULL, 
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplatePlanning (
      id int NOT NULL AUTO_INCREMENT, 
      planningId int NOT NULL, 
      planningTemplateId int NOT NULL, 
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateDiscipline (
      id int NOT NULL AUTO_INCREMENT, 
      groupId int NOT NULL, 
      themeId int NOT NULL, 
      planningTemplateId int NOT NULL,
      name varchar(255) NOT NULL,
      shortname varchar(255) NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningDiscipline (
      id int NOT NULL AUTO_INCREMENT, 
      groupId int NOT NULL, 
      themeId int NOT NULL, 
      planningId int NOT NULL,
      name varchar(255) NOT NULL,
      shortname varchar(255) NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningClassRoom (
      id int NOT NULL AUTO_INCREMENT, 
      planningId int NOT NULL, 
      classRoomId int NOT NULL, 
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateGrade (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplateId int NOT NULL, 
      gradeId int NOT NULL, 
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateInstrument (
      id int NOT NULL AUTO_INCREMENT, 
      instrumentId int NOT NULL, 
      planningTemplateId int NOT NULL, 
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateInstrumentRole (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplateInstrumentId int NOT NULL, 
      role varchar(255) NOT NULL, 
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateChapter (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplateId int NOT NULL, 
      startDate datetime(6) NOT NULL, 
      endDate datetime(6) NOT NULL,
      name varchar(255) NOT NULL,
      minDate datetime(6) NULL, 
      maxDate datetime(6) NULL,
      number int NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateLesson (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplateChapterId int NOT NULL, 
      planningTemplateDisciplineId int NOT NULL, 
      description varchar(255) NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateDisciplinePlanning (
      id int NOT NULL AUTO_INCREMENT,  
      planningTemplateDisciplineId int NOT NULL, 
      planningTemplatePlanningId int NOT NULL,
      planningDisciplineId int NOT NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL,  
      deletedBy int NULL, 
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateLessonTheme (
      id int NOT NULL AUTO_INCREMENT,  
      themeId int NOT NULL, 
      videoId int NULL,
      planningTemplateLessonId int NOT NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL,  
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningLesson (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplateChapterId int NOT NULL, 
      planningTemplateDisciplinePlanningId int NOT NULL,
      planningTemplateLessonId int NOT NULL, 
      planningTemplatePlanningId int NULL,
      planningId int NOT NULL,
      startDate datetime(6) NOT NULL, 
      endDate datetime(6) NOT NULL,
      showVideo boolean NOT NULL default 0,
      invalid boolean NOT NULL default 0,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL,  
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateChapterRole (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplateChapterId int NOT NULL, 
      role varchar(255) NOT NULL, 
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      deletedBy int NULL,  
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateApplication (
      id int NOT NULL AUTO_INCREMENT, 
      planningTemplateChapterId int NULL, 
      planningTemplateInstrumentId int NOT NULL, 
      instrumentApplicationId int NOT NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL,   
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningTemplateQuestionGroup (
      id int NOT NULL AUTO_INCREMENT,  
      planningTemplateInstrumentId int NOT NULL, 
      questionGroupId int NOT NULL,
      planningTemplateDisciplineId int NOT NULL,
      planningTemplateApplicationId int NOT NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL,   
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningQuestionGroup (
      id int NOT NULL AUTO_INCREMENT,  
      planningTemplateQuestionGroupId int NOT NULL, 
      planningTemplateDisciplinePlanningId int NOT NULL,
      planningApplicationId int NOT NULL,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL,   
    PRIMARY KEY (id));`);

    await queryRunner.query(`CREATE TABLE planningApplication (
      id int NOT NULL AUTO_INCREMENT,  
      planningTemplatePlanningId int NOT NULL, 
      planningTemplateApplicationId int NOT NULL,
      planningId int NOT NULL,
      startDate datetime(6) NOT NULL, 
      endDate datetime(6) NOT NULL,
      invalid boolean NOT NULL default 0,
      createdAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), 
      updatedAt datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
      deletedAt datetime(6) NULL, 
      createdBy int NULL, 
      updatedBy int NULL, 
      deletedBy int NULL,   
    PRIMARY KEY (id));`);

    // CREATE FK
    await queryRunner.query(`ALTER TABLE planning 
    ADD CONSTRAINT FK_0116f607faf971c99de248f8f44 
    FOREIGN KEY (planningTemplatePlanningId) 
    REFERENCES planningTemplatePlanning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplatePlanning 
    ADD CONSTRAINT FK_0116f607faf971c99de248f8f92 
    FOREIGN KEY (planningId) 
    REFERENCES planning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplatePlanning 
    ADD CONSTRAINT FK_0116f607faf971c99de248f8f22 
    FOREIGN KEY (planningTemplateId) 
    REFERENCES planningTemplate(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDiscipline
    ADD CONSTRAINT FK_0116f607faf971c99de248f8f01 
    FOREIGN KEY (planningTemplateId) 
    REFERENCES planningTemplate(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningDiscipline 
    ADD CONSTRAINT FK_0116f607faf971c99de248f8f28 
    FOREIGN KEY (planningId) 
    REFERENCES planning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningClassRoom 
    ADD CONSTRAINT FK_0116f607faf971c99de248f8f48 
    FOREIGN KEY (planningId) 
    REFERENCES planning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateGrade 
    ADD CONSTRAINT FK_0116f607faf971c99de248f8f66 
    FOREIGN KEY (planningTemplateId) 
    REFERENCES planningTemplate(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateInstrument
    ADD CONSTRAINT FK_0116f607faf971c99de248f2f06 
    FOREIGN KEY (planningTemplateId) 
    REFERENCES planningTemplate(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateInstrumentRole
    ADD CONSTRAINT FK_0116f607faf971c91de448f2f04 
    FOREIGN KEY (planningTemplateInstrumentId) 
    REFERENCES planningTemplateInstrument(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateChapter
    ADD CONSTRAINT FK_0116f607faf971c91de148f2f14 
    FOREIGN KEY (planningTemplateId) 
    REFERENCES planningTemplate(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateLesson
    ADD CONSTRAINT FK_0116f607faf971c91de146f2f54 
    FOREIGN KEY (planningTemplateChapterId) 
    REFERENCES planningTemplateChapter(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateLesson
    ADD CONSTRAINT FK_0116f607faf971c91de111f2f51 
    FOREIGN KEY (planningTemplateDisciplineId) 
    REFERENCES planningTemplateDiscipline(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDisciplinePlanning
    ADD CONSTRAINT FK_0116f607faf971c91de100f0f90 
    FOREIGN KEY (planningTemplateDisciplineId) 
    REFERENCES planningTemplateDiscipline(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDisciplinePlanning
    ADD CONSTRAINT FK_0116f607faf971c93de144f0f40 
    FOREIGN KEY (planningTemplatePlanningId) 
    REFERENCES planningTemplatePlanning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDisciplinePlanning
    ADD CONSTRAINT FK_0116f607faf971c95de224f0f20 
    FOREIGN KEY (planningDisciplineId) 
    REFERENCES planningDiscipline(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateLessonTheme
    ADD CONSTRAINT FK_0116f607faf070c99de224f9f23 
    FOREIGN KEY (planningTemplateLessonId) 
    REFERENCES planningTemplateLesson(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningLesson
    ADD CONSTRAINT FK_0886f607faf070c99de001f5f20 
    FOREIGN KEY (planningTemplateChapterId) 
    REFERENCES planningTemplateChapter(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningLesson
    ADD CONSTRAINT FK_0886f607faf070c99de551f5f25 
    FOREIGN KEY (planningTemplateDisciplinePlanningId) 
    REFERENCES planningTemplateDisciplinePlanning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningLesson
    ADD CONSTRAINT FK_4800f607faf770c79de057f5f21 
    FOREIGN KEY (planningTemplateLessonId) 
    REFERENCES planningTemplateLesson(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningLesson
    ADD CONSTRAINT FK_6630f707faf770c78de057f5f01 
    FOREIGN KEY (planningTemplatePlanningId) 
    REFERENCES planningTemplatePlanning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningLesson
    ADD CONSTRAINT FK_6630f707faf370c33de057f4f03 
    FOREIGN KEY (planningId) 
    REFERENCES planning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateChapterRole
    ADD CONSTRAINT FK_6150f707faf370c16de057f4f66 
    FOREIGN KEY (planningTemplateChapterId) 
    REFERENCES planningTemplateChapter(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateApplication
    ADD CONSTRAINT FK_6850f708faf370c18de057f4f88 
    FOREIGN KEY (planningTemplateChapterId) 
    REFERENCES planningTemplateChapter(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateApplication
    ADD CONSTRAINT FK_5850f708faf370c58de057f4f58 
    FOREIGN KEY (planningTemplateInstrumentId) 
    REFERENCES planningTemplateInstrument(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateQuestionGroup
    ADD CONSTRAINT FK_5850f228faf370c28de057f4f11 
    FOREIGN KEY (planningTemplateInstrumentId) 
    REFERENCES planningTemplateInstrument(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateQuestionGroup
    ADD CONSTRAINT FK_5850f228faf870c28de088f4f81 
    FOREIGN KEY (planningTemplateDisciplineId) 
    REFERENCES planningTemplateDiscipline(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningTemplateQuestionGroup
    ADD CONSTRAINT FK_5150f668faf870c28de033f4f67 
    FOREIGN KEY (planningTemplateApplicationId) 
    REFERENCES planningTemplateApplication(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningQuestionGroup
    ADD CONSTRAINT FK_5440f668faf470c28de033f1f60 
    FOREIGN KEY (planningTemplateQuestionGroupId) 
    REFERENCES planningTemplateQuestionGroup(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningQuestionGroup
    ADD CONSTRAINT FK_5333f668faf870c99de033f4f69 
    FOREIGN KEY (planningTemplateDisciplinePlanningId) 
    REFERENCES planningTemplateDisciplinePlanning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningQuestionGroup
    ADD CONSTRAINT FK_5333f668faf822c99de022f4f12 
    FOREIGN KEY (planningApplicationId) 
    REFERENCES planningApplication(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningApplication
    ADD CONSTRAINT FK_3333f668faf832c33de022f4f32 
    FOREIGN KEY (planningTemplatePlanningId) 
    REFERENCES planningTemplatePlanning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningApplication
    ADD CONSTRAINT FK_3333f668faf832c33de022f4f34 
    FOREIGN KEY (planningTemplateApplicationId) 
    REFERENCES planningTemplateApplication(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);

    await queryRunner.query(`ALTER TABLE planningApplication
    ADD CONSTRAINT FK_3333f668faf832c33de022f4f36 
    FOREIGN KEY (planningId) 
    REFERENCES planning(id) 
  ON DELETE NO ACTION ON UPDATE NO ACTION;`);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    // DROP FKS
    await queryRunner.query(`ALTER TABLE planning 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f8f44;`);

    await queryRunner.query(`ALTER TABLE planningTemplatePlanning 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f8f92;`);

    await queryRunner.query(`ALTER TABLE planningTemplatePlanning 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f8f22;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDiscipline 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f8f01;`);

    await queryRunner.query(`ALTER TABLE planningDiscipline 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f8f28;`);

    await queryRunner.query(`ALTER TABLE planningClassRoom 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f8f48;`);

    await queryRunner.query(`ALTER TABLE planningTemplateGrade 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f8f66;`);

    await queryRunner.query(`ALTER TABLE planningTemplateInstrument 
    DROP FOREIGN KEY FK_0116f607faf971c99de248f2f06;`);

    await queryRunner.query(`ALTER TABLE planningTemplateInstrumentRole 
    DROP FOREIGN KEY FK_0116f607faf971c91de448f2f04;`);

    await queryRunner.query(`ALTER TABLE planningTemplateChapter 
    DROP FOREIGN KEY FK_0116f607faf971c91de148f2f14;`);

    await queryRunner.query(`ALTER TABLE planningTemplateLesson 
    DROP FOREIGN KEY FK_0116f607faf971c91de146f2f54;`);

    await queryRunner.query(`ALTER TABLE planningTemplateLesson 
    DROP FOREIGN KEY FK_0116f607faf971c91de111f2f51;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDisciplinePlanning 
    DROP FOREIGN KEY FK_0116f607faf971c91de100f0f90;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDisciplinePlanning 
    DROP FOREIGN KEY FK_0116f607faf971c93de144f0f40;`);

    await queryRunner.query(`ALTER TABLE planningTemplateDisciplinePlanning 
    DROP FOREIGN KEY FK_0116f607faf971c95de224f0f20;`);

    await queryRunner.query(`ALTER TABLE planningTemplateLessonTheme 
    DROP FOREIGN KEY FK_0116f607faf070c99de224f9f23;`);

    await queryRunner.query(`ALTER TABLE planningLesson 
    DROP FOREIGN KEY FK_0886f607faf070c99de001f5f20;`);

    await queryRunner.query(`ALTER TABLE planningLesson 
    DROP FOREIGN KEY FK_4800f607faf770c79de057f5f21;`);

    await queryRunner.query(`ALTER TABLE planningLesson 
    DROP FOREIGN KEY FK_6630f707faf770c78de057f5f01;`);

    await queryRunner.query(`ALTER TABLE planningLesson 
    DROP FOREIGN KEY FK_6630f707faf370c33de057f4f03;`);

    await queryRunner.query(`ALTER TABLE planningLesson 
    DROP FOREIGN KEY FK_0886f607faf070c99de551f5f25;`);

    await queryRunner.query(`ALTER TABLE planningTemplateChapterRole 
    DROP FOREIGN KEY FK_6150f707faf370c16de057f4f66;`);

    await queryRunner.query(`ALTER TABLE planningTemplateApplication 
    DROP FOREIGN KEY FK_6850f708faf370c18de057f4f88;`);

    await queryRunner.query(`ALTER TABLE planningTemplateApplication 
    DROP FOREIGN KEY FK_5850f708faf370c58de057f4f58;`);

    await queryRunner.query(`ALTER TABLE planningTemplateQuestionGroup 
    DROP FOREIGN KEY FK_5850f228faf370c28de057f4f11;`);

    await queryRunner.query(`ALTER TABLE planningTemplateQuestionGroup 
    DROP FOREIGN KEY FK_5850f228faf870c28de088f4f81;`);

    await queryRunner.query(`ALTER TABLE planningTemplateQuestionGroup 
    DROP FOREIGN KEY FK_5150f668faf870c28de033f4f67;`);

    await queryRunner.query(`ALTER TABLE planningQuestionGroup 
    DROP FOREIGN KEY FK_5440f668faf470c28de033f1f60;`);

    await queryRunner.query(`ALTER TABLE planningQuestionGroup 
    DROP FOREIGN KEY FK_5333f668faf870c99de033f4f69;`);

    await queryRunner.query(`ALTER TABLE planningQuestionGroup 
    DROP FOREIGN KEY FK_5333f668faf822c99de022f4f12;`);

    await queryRunner.query(`ALTER TABLE planningApplication 
    DROP FOREIGN KEY FK_3333f668faf832c33de022f4f32;`);

    await queryRunner.query(`ALTER TABLE planningApplication 
    DROP FOREIGN KEY FK_3333f668faf832c33de022f4f34;`);

    await queryRunner.query(`ALTER TABLE planningApplication 
    DROP FOREIGN KEY FK_3333f668faf832c33de022f4f36;`);

    // DROP TABLES
    await queryRunner.dropTable('planning');

    await queryRunner.dropTable('planningTemplate');

    await queryRunner.dropTable('planningTemplatePlanning');

    await queryRunner.dropTable('planningTemplateDiscipline');

    await queryRunner.dropTable('planningDiscipline');

    await queryRunner.dropTable('planningClassRoom');

    await queryRunner.dropTable('planningTemplateGrade');

    await queryRunner.dropTable('planningTemplateInstrument');

    await queryRunner.dropTable('planningTemplateInstrumentRole');

    await queryRunner.dropTable('planningTemplateChapter');

    await queryRunner.dropTable('planningTemplateLesson');

    await queryRunner.dropTable('planningTemplateDisciplinePlanning');

    await queryRunner.dropTable('planningTemplateLessonTheme');

    await queryRunner.dropTable('planningLesson');

    await queryRunner.dropTable('planningTemplateChapterRole');

    await queryRunner.dropTable('planningTemplateApplication');

    await queryRunner.dropTable('planningTemplateQuestionGroup');

    await queryRunner.dropTable('planningQuestionGroup');

    await queryRunner.dropTable('planningApplication');
  }
}
