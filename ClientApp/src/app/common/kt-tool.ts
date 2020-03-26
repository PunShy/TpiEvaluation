export class KtTool {
  public static registEvent() {
    KTOffcanvasPanel().init();
  }

  public static datepickerInit(selector: string, optionObj: any) {
    $.fn.datepicker.defaults.zIndexOffset = 10;
    $.fn.datepicker.dates['en'] = {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      daysMin: ['日', '一', '二', '三', '四', '五', '六'],
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      today: 'Today',
      clear: 'Clear',
      format: 'mm/dd/yyyy',
      titleFormat: 'MM yyyy', /* Leverages same syntax as 'format' */
      weekStart: 0
    };

    $(selector).datepicker(optionObj);
  }
}




export interface ITreeItem{
  text: string,
  icon?: string,
  children?: ITreeItem[];
  state?: ITreeItemOptions;
}
export interface ITreeItemOptions{
  selected?: boolean;
  opened?: boolean;
  disabled?: boolean;
}
