import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('api/v1/user')
export class UserController {

    @Post()
    async createUser(@Body() data){
        return data;
    }

    @Put(":id")
    async updateUser(@Param() params, @Body() data){
        return {
            params,
            data
        }
    }

    @Patch(":id")
    async patchUser(@Param() params, @Body() data){
        return {
            data,
            params
        }
    }

    @Patch("inactivate/:id")
    async inactivateUser(@Param() params, @Body() data){
        return {
            data,
            params
        }
    }

    @Delete(":id")
    async removeUser(@Param() params){
        return params;
    }

    @Get()
    async getUsers(){
        return []
    }

    @Get(":id")
    async getUser(@Param() params){
        return params
    }
}
