import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CreateUserDto, PatchUser, UpdateUser } from '../dto';
import { ParamUuid } from 'src/common/decorators/param-uuid.decorator';


@Controller('api/v1/user')
export class UserController {

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
        return {createUserDto}
    }

    @Put(":uuid")
    async updateUser(@ParamUuid() uuid: string, @Body() updateUser: UpdateUser){
        return {
            uuid,
            updateUser
        }
    }

    @Patch(":uuid")
    async patchUser(@ParamUuid() uuid: string, @Body() patchUser: PatchUser){
        return {
            uuid,
            patchUser,
        }
    }

    @Patch("inactivate/:uuid")
    async inactivateUser(@ParamUuid() uuid: string){
        return {
            uuid
        }
    }

    @Delete(":uuid")
    async removeUser(@ParamUuid() uuid: string){
        return uuid;
    }

    @Get()
    async getUsers(){
        return []
    }

    @Get(":uuid")
    async getUser(@ParamUuid() uuid: string){
        return uuid;
    }
}
