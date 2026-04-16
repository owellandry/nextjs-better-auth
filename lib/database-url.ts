const BUILD_TIME_DATABASE_URL =
  "postgresql://postgres:postgres@localhost:5432/app";

type DatabaseUrlOptions = {
  allowBuildFallback?: boolean;
};

export function getDatabaseUrl(options: DatabaseUrlOptions = {}) {
  const databaseUrl = process.env.DATABASE_URL;

  if (databaseUrl) {
    return databaseUrl;
  }

  if (options.allowBuildFallback) {
    return BUILD_TIME_DATABASE_URL;
  }

  throw new Error(
    "Missing required environment variable: DATABASE_URL. Add it to your .env file before starting the app."
  );
}
