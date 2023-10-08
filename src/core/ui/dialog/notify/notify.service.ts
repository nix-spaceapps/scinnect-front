import { Injectable } from "@angular/core";
import colors from 'tailwindcss/colors'

import { Notyf, INotyfNotificationOptions } from 'notyf';
import { exclamation } from "./icons";
@Injectable()
export class NotifyService {

    private _notyf = new Notyf({
        duration: 3000,
        types: [
            {
                type: 'info',
                background: colors.slate[500],
                icon: false
            }
        ]
    });

    constructor() {}

    success(payload: string | Partial<INotyfNotificationOptions>) {
        this._notyf.success(payload);
    }

    info(payload: string | Partial<INotyfNotificationOptions>) {
        if(typeof payload == 'string') this._notyf.open({message: payload, type: 'info', icon: exclamation});
        else this._notyf.open({...payload, type: 'info'});
    }

    error(payload: string | Partial<INotyfNotificationOptions>) {
        this._notyf.error(payload);
    }

}