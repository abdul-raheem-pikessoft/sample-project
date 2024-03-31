import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('first')
  async function1() {
    try {
      return {
        message: await this.userService.function1(),
        status: HttpStatus.OK,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('second')
  async function2() {
    try {
      return {
        message: await this.userService.function2(),
        status: HttpStatus.OK,
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
