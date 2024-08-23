/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HackathonExperienceService } from "../hackathonExperience.service";
import { HackathonExperienceCreateInput } from "./HackathonExperienceCreateInput";
import { HackathonExperience } from "./HackathonExperience";
import { HackathonExperienceFindManyArgs } from "./HackathonExperienceFindManyArgs";
import { HackathonExperienceWhereUniqueInput } from "./HackathonExperienceWhereUniqueInput";
import { HackathonExperienceUpdateInput } from "./HackathonExperienceUpdateInput";

export class HackathonExperienceControllerBase {
  constructor(protected readonly service: HackathonExperienceService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HackathonExperience })
  async createHackathonExperience(
    @common.Body() data: HackathonExperienceCreateInput
  ): Promise<HackathonExperience> {
    return await this.service.createHackathonExperience({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [HackathonExperience] })
  @ApiNestedQuery(HackathonExperienceFindManyArgs)
  async hackathonExperiences(
    @common.Req() request: Request
  ): Promise<HackathonExperience[]> {
    const args = plainToClass(HackathonExperienceFindManyArgs, request.query);
    return this.service.hackathonExperiences({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HackathonExperience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async hackathonExperience(
    @common.Param() params: HackathonExperienceWhereUniqueInput
  ): Promise<HackathonExperience | null> {
    const result = await this.service.hackathonExperience({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HackathonExperience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHackathonExperience(
    @common.Param() params: HackathonExperienceWhereUniqueInput,
    @common.Body() data: HackathonExperienceUpdateInput
  ): Promise<HackathonExperience | null> {
    try {
      return await this.service.updateHackathonExperience({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: HackathonExperience })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHackathonExperience(
    @common.Param() params: HackathonExperienceWhereUniqueInput
  ): Promise<HackathonExperience | null> {
    try {
      return await this.service.deleteHackathonExperience({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
