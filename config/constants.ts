import env from 'env-var';

const config = {
  githubUrl: env.get('NEXT_GITHUB_URL').required().asUrlString(),
  maltUrl: env.get('NEXT_MALT_URL').required().asUrlString(),
  linkedinUrl: env.get('NEXT_LINKEDIN_URL').required().asUrlString(),
  discordUrl: env.get('NEXT_DISCORD_URL').required().asUrlString(),
  calendarUrl: env.get('NEXT_CALENDAR_URL').required().asUrlString(),
  resumeUrl: env.get('NEXT_RESUME_URL').required().asUrlString(),
  email: env.get('NEXT_EMAIL').required().asString(),
};

console.log(config.githubUrl);
export default config;
