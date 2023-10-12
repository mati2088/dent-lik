import { actorCalled } from '@serenity-js/core';
import { chromium ,Browser} from 'playwright';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Navigate } from '@serenity-js/web';
import { esperar } from '../Utils/Esperas';

export class BrowserConfiguration {
      private baseUrl: string='https://prevenga-159.qa.dentalink.cl';
      private browser: Browser | null = null;
              
    constructor(){}

    async iniciar() {
        const browser = await chromium.launch();
        const actor = actorCalled('Usuario');
        actor.whoCan(BrowseTheWebWithPlaywright.using(browser));
        actor.attemptsTo(Navigate.to(this.baseUrl));
        return actor;
    }

    async cerrar() {if (this.browser) {await this.browser.close();}}
}
