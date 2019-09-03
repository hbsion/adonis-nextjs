'use strict'
const Throttle = use('Throttle')
const Persona = use('Persona')
const CustomException = use('App/Exceptions/CustomException')

class Authentication {
  async Login({ request, auth, response }) {
    const { email, password } = request.all()
    Throttle.resource(request.all(), 13, 300)
    if (!Throttle.attempt()) {
      throw new CustomException('Attempt request reached')
    }
    try {
      const token = await auth.attempt(email, password)
      return token
    } catch {
      throw new CustomException('Wrong email or password')
    }
  }
  async Register({ request, auth, response }) {
    const payload = request.only([
      'username',
      'email',
      'password',
      'password_confirmation',
    ])
    Throttle.resource(request.all(), 5, 300)
    if (!Throttle.attempt()) {
      throw new CustomException('Attempt request reached')
    }
    try {
      return Persona.register(payload)
    } catch {
      throw new CustomException('Please fill the blank data')
    }
  }
}

module.exports = Authentication