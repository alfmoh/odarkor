import { IMyDate } from 'mydatepicker/dist';
import { IMyDpOptions } from "mydatepicker";

export class TimeOptions {
    currentTime = new Date()
    public defaultDate = { date: { year: 1000, month: 1, day: 1 } }

    public birthDateOptions: IMyDpOptions = {
        editableDateField: true,
        openSelectorOnInputClick: true,
        showTodayBtn: false,
        dateFormat: 'dd/mm/yyyy',
        disableSince: {
            year: this.currentTime.getFullYear() - 14,
            month: this.currentTime.getMonth() + 1,
            day: this.currentTime.getDay()
        }
    };

    public deathDateOptions: IMyDpOptions = {
        editableDateField: true,
        dateFormat: 'dd/mm/yyyy',
        openSelectorOnInputClick: true,
        maxYear: this.currentTime.getFullYear()
    }
}