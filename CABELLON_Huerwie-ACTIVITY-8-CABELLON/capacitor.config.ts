import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'pwaAct',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;