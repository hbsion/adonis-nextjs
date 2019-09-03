'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Site Key
  |--------------------------------------------------------------------------
  |
  | The key for form
  |
  */
  siteKey: '6Lehp7IUAAAAAIJ4vsvbO0jnHbgUqBZ-7ZcdIueP', // Env.get('RECAPTCHA_SITE_KEY'),

  /*
  |--------------------------------------------------------------------------
  | Secret Key
  |--------------------------------------------------------------------------
  |
  | The shared key between your site and reCAPTCHA
  | * Don`t tell it to anyone
  |
  */
  secretKey: '6Lehp7IUAAAAALY66ME0yyYdn_7g-DqBfVQ3pmj6', // Env.get('RECAPTCHA_SECRET_KEY'),

  /*
  |--------------------------------------------------------------------------
  | SSL (default: true)
  |--------------------------------------------------------------------------
  |
  | Optional
  |
  | Disable if you don't want to access the Google API via a secure connection
  |
  */
  ssl: false,

  /*
   |--------------------------------------------------------------------------
   | Client
   |--------------------------------------------------------------------------
   |
   | Enable if you need use recaptcha in Views
   |
   */
  client: false,
}
