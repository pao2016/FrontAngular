import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export const calendarES = {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo',
    'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  today: 'Hoy',
  clear: 'Borrar'
};

export const getTomorrowDate = () => {
  const today = moment(new Date());
  today.add(2, 'days');
  return new Date(today.format('YYYY-MM-DD'));
};





export const exportPDF = (columns: any, data: any, fileName: string) => {
  var doc = new jsPDF();
  (doc as any).autoTable(columns,
    data);
    doc.save(`${fileName}.pdf`);
  };

export const sumArray = (array) => {
  return array.length > 1
    ? array
      .map(item => item)
      .reduce((a, b) => a + b, 0)
    : array[0] ? array[0] : 0;
};

export const flatten = (arr) => {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
};

export const arrayWithoutDuplicateObjects = (array) => {
  const stringify = new Set(array.map(JSON.stringify));
  // @ts-ignore
  return Array.from(stringify).map(JSON.parse).map(JSON.parse);
};

export const getFormErrors = (form: any) => {
  Object.keys(form.controls).forEach((key) => {
    const controlErrors = form.get(key).errors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach((keyError) => {
        console.log(`${key} => ${keyError}  = ${controlErrors[keyError]}`);
      });
    }
  });
};

export const noWhitespaceValidator = (control: FormControl) => {
  const isWhitespace = (control.value || '').trim().length === 0;
  return !isWhitespace ? null : { whitespace: true };
};
