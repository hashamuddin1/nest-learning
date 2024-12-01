import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class CreateEmployeeDto {
  @IsInt()
  id: number;
  @IsString()
  @IsNotEmpty({ message: 'Full Name is required' })
  fullName: string;
  @IsString()
  @IsNotEmpty({ message: 'Email Address is required' })
  emailAddress: string;
  @IsString()
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
