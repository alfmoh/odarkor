import { IMyDate } from 'mydatepicker/dist';
import { IMyDpOptions } from "mydatepicker";

export class TimeOptions {
    currentTime = new Date()
    public defaultDate = { date: { year: 1000, month: 1, day: 1 } }

    public birthDateOptions: IMyDpOptions = {
        editableDateField: false,
        openSelectorOnInputClick: true,
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