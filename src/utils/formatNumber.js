import 'intl';
import 'intl/locale-data/jsonp/en';

export const formatterVnd = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',

}).format;