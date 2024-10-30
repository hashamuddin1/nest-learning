import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';

@Injectable()
export class BookGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const token = request.headers.authorization;
    return token === 'Nest12345';
  }
}
