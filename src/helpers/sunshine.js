export const sunTimes = (lat, lng, tz) => {
  let d = new Date();
  let radians = Math.PI / 180.0;
  let degrees = 180.0 / Math.PI;

  let a = Math.floor((14 - (d.getMonth() + 1.0)) / 12)
  let y = d.getFullYear() + 4800 - a;
  let m = (d.getMonth() + 1) + 12 * a - 3;
  let j_day = d.getDate() + Math.floor((153 * m + 2)/5) + 365 * y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) - 32045;
  let n_star = j_day - 2451545.0009 - lng / 360.0;
  let n = Math.floor(n_star + 0.5);
  let solar_noon = 2451545.0009 - lng / 360.0 + n;
  let M = 356.0470 + 0.9856002585 * n;
  let C = 1.9148 * Math.sin( M * radians ) + 0.02 * Math.sin( 2 * M * radians ) + 0.0003 * Math.sin( 3 * M * radians );
  let L = ( M + 102.9372 + C + 180 ) % 360;
  let j_transit = solar_noon + 0.0053 * Math.sin( M * radians) - 0.0069 * Math.sin( 2 * L * radians );
  let D = Math.asin( Math.sin( L * radians ) * Math.sin( 23.45 * radians ) ) * degrees;
  let cos_omega = ( Math.sin(-0.83 * radians) - Math.sin( lat * radians ) * Math.sin( D * radians ) ) / ( Math.cos( lat * radians ) * Math.cos( D * radians ) );

  // sun never rises
  if( cos_omega > 1)
    return [null, -1];

  // sun never sets
  if( cos_omega < -1 )
    return [-1, null];

  // get Julian dates of sunrise/sunset
  let omega = Math.acos( cos_omega ) * degrees;
  let j_set = j_transit + omega / 360.0;
  let j_rise = j_transit - omega / 360.0;

  /*
  * get sunrise and sunset times in UTC
  * Check section "Finding Julian date given Julian day number and time of
  *  day" on wikipedia for where the extra "+ 12" comes from.
  */
  let utc_time_set = 24 * (j_set - j_day) + 12;
  let utc_time_rise = 24 * (j_rise - j_day) + 12;
  let tz_offset = tz === undefined ? -1 * d.getTimezoneOffset() / 60 : tz;
  let local_rise = (utc_time_rise + tz_offset) % 24;
  let local_set = (utc_time_set + tz_offset) % 24;
  return [local_rise, local_set];
}