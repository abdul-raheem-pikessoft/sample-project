import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, response: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent') || '';
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      const resp = {
        request: `${method} ${originalUrl} ${ip} ${userAgent}`,
        body: req.body,
        response: {
          status: statusCode,
          responseContentLength: contentLength,
        },
      };
      Logger.log(resp);
    });
    next();
  }
}
