import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mamorasoft.youbuy',
  appName: 'YouBuy Shopies',
  webDir: 'www',
  server: {
    url: 'http://youbuy-shopies.mamorasoft.com/',
    cleartext: true // Allowed because it's http
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
