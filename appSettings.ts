// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import 'dotenv/config'

if (
  !process.env.CLIENT_ID ||
  !process.env.CLIENT_SECRET ||
  !process.env.TENANT_ID
) {
  throw new Error(
    'Missing required environment variables CLIENT_ID, CLIENT_SECRET or TENANT_ID, check .env file',
  )
}

const settings: AppSettings = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  tenantId: process.env.TENANT_ID,
  authTenant: 'common',
  graphUserScopes: ['user.read', 'mail.read', 'mail.send'],
}

export interface AppSettings {
  clientId: string
  clientSecret: string
  tenantId: string
  authTenant: string
  graphUserScopes: string[]
}

export default settings
