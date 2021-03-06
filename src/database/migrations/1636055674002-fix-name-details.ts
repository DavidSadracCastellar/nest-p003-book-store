import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetails1636055674002 implements MigrationInterface {
    name = 'fixNameDetails1636055674002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "firstname" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "updated_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "firstname" SET NOT NULL`);
    }

}
