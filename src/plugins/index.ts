import router from '../router/index'
import PrimeVue from 'primevue/config';

export function registerPlugins(app) {
  app
    .use(router)
    .use(PrimeVue,{unstyled: true})
}