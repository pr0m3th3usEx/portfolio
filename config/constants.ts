import { from } from 'env-var';

const publicEnv = {
  NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
  NEXT_PUBLIC_MALT_URL: process.env.NEXT_PUBLIC_MALT_URL,
  NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  NEXT_PUBLIC_DISCORD_URL: process.env.NEXT_PUBLIC_DISCORD_URL,
  NEXT_PUBLIC_CALENDAR_URL: process.env.NEXT_PUBLIC_CALENDAR_URL,
  NEXT_PUBLIC_RESUME_URL: process.env.NEXT_PUBLIC_RESUME_URL,
  NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
  NEXT_PUBLIC_CITY: process.env.NEXT_PUBLIC_CITY,
  NEXT_PUBLIC_CITY_TZ: process.env.NEXT_PUBLIC_CITY_TZ,
};

const env = from(publicEnv, {});

export const config = {
  githubUrl: env.get('NEXT_PUBLIC_GITHUB_URL').required().asUrlString(),
  maltUrl: env.get('NEXT_PUBLIC_MALT_URL').required().asUrlString(),
  linkedinUrl: env.get('NEXT_PUBLIC_LINKEDIN_URL').required().asUrlString(),
  discordUrl: env.get('NEXT_PUBLIC_DISCORD_URL').required().asUrlString(),
  calendarUrl: env.get('NEXT_PUBLIC_CALENDAR_URL').required().asUrlString(),
  resumeUrl: env.get('NEXT_PUBLIC_RESUME_URL').required().asUrlString(),
  email: env.get('NEXT_PUBLIC_EMAIL').required().asString(),
  location: {
    city: env.get('NEXT_PUBLIC_CITY').required().default('Paris').asString(),
    timezone: env
      .get('NEXT_PUBLIC_CITY_TZ')
      .required()
      .default('Europe/Paris')
      .asString(),
  },
  schedule: {
    availableForWork: true,
    availableTime: {
      from: '09:00',
      to: '21:00',
    },
  },
};
