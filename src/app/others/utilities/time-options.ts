import { IMyDpOptions } from "mydatepicker";

export class TimeOptions {
    currentTime = new Date()

    public birthDateOptions: IMyDpOptions = {
        editableDateField: false,
        openSelectorOnInputClick: true,
        dateFormat: 'dd.mm.yyyy',
        showTodayBtn: false,
        disableSince: {
            year: this.currentTime.getFullYear() - 14,
            month: this.currentTime.getMonth() + 1,
            day: this.currentTime.getDay()
        }
    };

    public deathDateOptions: IMyDpOptions = {
        editableDateField: false,
        openSelectorOnInputClick: true,
        maxYear: this.currentTime.getFullYear()
    }
}