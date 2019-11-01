

export default {
  PORT_CORE: parseInt(process.env.PORT || '3000', 10),
  SITE_URI: process.env.SITE_URI,

  DEV_MODE: process.env.NODE_ENV !== 'production',

  COOKIE_SECRET: process.env.COOKIE_SECRET || '123',
}
