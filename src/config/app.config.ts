type AppConfig = {
  initialLatitude: number;
  initialLongitude: number;
};

const appConfig: AppConfig = {
  initialLatitude: import.meta.env.VITE_INITIAL_LATITUDE,
  initialLongitude: import.meta.env.VITE_INITIAL_LONGITUDE,
};

export { appConfig };
