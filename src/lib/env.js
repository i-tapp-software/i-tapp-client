export function env(variable, defaultValue) {
  const variables = {
    app_env: process.env.NEXT_PUBLIC_APP_ENV,
    app_name: process.env.NEXT_PUBLIC_APP_NAME,
    app_domain: process.env.NEXT_PUBLIC_APP_DOMAIN,
    site_url: process.env.NEXT_PUBLIC_APP_SITE_URL,
  };

  return variables[variable] ?? defaultValue;
}

