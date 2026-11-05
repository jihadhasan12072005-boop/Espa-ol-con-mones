/* Photo registry. file = optimised photo in img/photos (Wikimedia Commons, credited);
 * fb = local fallback in img/fallback, shown if the photo is missing.          */
(function (ECM) {
  'use strict';
  ECM.photos = {
    _default: { fb: 'madrid' },
    granvia: { fb: 'madrid' }, palacioreal: { fb: 'madrid' }, plazamayor: { fb: 'madrid' },
    sevilla: { fb: 'madrid' }, toledo: { fb: 'madrid' }, salamanca: { fb: 'madrid' },
    congreso: { fb: 'madrid' }, cafe: { fb: 'cafe' }, metro: { fb: 'metro' }, mercado: { fb: 'shop' },
    street: { fb: 'madrid' }, retiro: { fb: 'madrid' }, pharmacy: { fb: 'pharmacy' }, bank: { fb: 'madrid' },
    tienda: { fb: 'shop' }, airport: { fb: 'airport' }
  };
})(window.ECM);
