import { MissinParamError } from '../errors/missing-param-error'
import { badRequest } from '../herpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissinParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissinParamError('email'))
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
