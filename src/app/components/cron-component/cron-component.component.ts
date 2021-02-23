import { Component, Output,EventEmitter } from '@angular/core';
import { CronOptions } from 'ngx-cron-editor';

@Component({
  selector: 'app-cron-component',
  templateUrl: './cron-component.component.html',
  styleUrls: ['./cron-component.component.css']
})

export class CronComponentComponent {

  @Output() newItemEvent= new EventEmitter<string>();
  public cronExpression = '0 0/1 * 1/1 * ? *';
 
  public cronOptions: CronOptions = {
    formInputClass: 'form-control cron-editor-input',
    formSelectClass: 'form-control cron-editor-select',
    formRadioClass: 'cron-editor-radio',
    formCheckboxClass: 'cron-editor-checkbox',

    defaultTime: '',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: true,
    hideAdvancedTab: true,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,

    use24HourTime: true,
    hideSeconds: false,
    cronFlavor: 'quartz' // standard or quartz
  };

  onChange(){
   this.newItemEvent.emit(this.cronExpression);
  }
}
