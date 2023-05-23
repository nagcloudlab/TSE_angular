import { InjectionToken } from "@angular/core";


export interface IAppConfig {
    API_URL: string
}

export const APP_CONFIG = new InjectionToken<IAppConfig>('APP_CONFIG');
export const AppConfig: IAppConfig = {
    API_URL: 'http://localhost:3000'
}



