import { Injectable } from '@angular/core';
import { AppConsts } from '@shared/AppConsts';

@Injectable()
export class ConfigurationService {

    public ApiUrl = 'api/';
    public ServerWithApiUrl = AppConsts.remoteServiceBaseUrl + this.ApiUrl;

    constructor() {
     }

}
