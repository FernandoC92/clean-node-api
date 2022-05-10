import { MissinParamError } from '../errors/missing-param-error'
import { badRequest } from '../herpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissinParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: {}
    }
  }
}
