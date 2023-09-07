import { BadRequestException, createParamDecorator, ExecutionContext, ParseUUIDPipe } from "@nestjs/common";
import { validate as uuidValidate } from "uuid";

export const ParamUuid = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => {
        const uuid = context.switchToHttp().getRequest().params.uuid;
        if(!uuidValidate(uuid)){
            throw new BadRequestException(
                "Validation failed (uuid is expected)"
            )
        }
        return uuid;
    },
);