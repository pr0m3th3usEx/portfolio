import env from 'env-var';

const envConstants = {
  GITHUB_URL: env.get('NEXT_PUBLIC_GITHUB_URL').required().asUrlString(),
  LINKEDIN_URL: env.get('NEXT_PUBLIC_LINKED_URL').required().asUrlString(),
  MALT_URL: env.get('NEXT_PUBLIC_MALT_URL').required().asUrlString(),
  CALENDAR_URL: env.get('NEXT_PUBLIC_CALENDAR_URL').required().asUrlString(),
  RESUME_DOWNLOAD_URL: env.get('NEXT_PUBLIC_RESUME_URL').required().asUrlString(),
  EMAIL_PRO: env.get('NEXT_PUBLIC_EMAIL').required().asString(),
};

export default envConstants;
