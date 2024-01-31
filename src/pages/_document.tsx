import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: "0" }}>
        <Main />
        <NextScript />
      </body>
      {typeof window !== undefined && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function (f, b) {
                if (!b.__SV) {
                    var e, g, i, h;
                    window.mixpanel = b;
                    b._i = [];
                    b.init = function (e, f, c) {
                        function g(a, d) {
                            var b = d.split('.');
                            2 == b.length && ((a = a[b[0]]), (d = b[1]));
                            a[d] = function () {
                                a.push([d].concat(Array.prototype.slice.call(arguments, 0)));
                            };
                        }
                        var a = b;
                        'undefined' !== typeof c ? (a = b[c] = []) : (c = 'mixpanel');
                        a.people = a.people || [];
                        a.toString = function (a) {
                            var d = 'mixpanel';
                            'mixpanel' !== c && (d += '.' + c);
                            a || (d += ' (stub)');
                            return d;
                        };
                        a.people.toString = function () {
                            return a.toString(1) + '.people (stub)';
                        };
                        i = 'disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(' ');
                        for (h = 0; h < i.length; h++) g(a, i[h]);
                        var j = 'set set_once union unset remove delete'.split(' ');
                        a.get_group = function () {
                            function b(c) {
                                d[c] = function () {
                                    call2_args = arguments;
                                    call2 = [c].concat(Array.prototype.slice.call(call2_args, 0));
                                    a.push([e, call2]);
                                };
                            }
                            for (var d = {}, e = ['get_group'].concat(Array.prototype.slice.call(arguments, 0)), c = 0; c < j.length; c++) b(j[c]);
                            return d;
                        };
                        b._i.push([e, f, c]);
                    };
                    b.__SV = 1.2;
                    e = f.createElement('script');
                    e.type = 'text/javascript';
                    e.async = !0;
                    e.src = 'undefined' !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : 'file:' === f.location.protocol && '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//) ? 'https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js' : '//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js';
                    g = f.getElementsByTagName('script')[0];
                    g.parentNode.insertBefore(e, g);
                }
            })(document, window.mixpanel || []);
        
            `,
          }}
        />
      )}

      <Link
        rel="preconnect"
        href="https://charitism-campaigns.s3.ap-south-1.amazonaws.com/"
      />
      {/* <Script async src="https://tally.so/widgets/embed.js"></Script> */}

      {/* <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8= sha256-T+aPohYXbm0fRYDpJLr+zJ9RmYTswGsahAoIsNiMld4=" crossorigin="anonymous"></script> */}
      <Script
        defer
        src="https://code.jquery.com/jquery-3.7.0.min.js"
        integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g="
        crossOrigin="anonymous"
      ></Script>
      {/* <Script async src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></Script> */}
      <Script
        defer
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossOrigin="anonymous"
      ></Script>
      <Script
        defer
        src="https://kit.fontawesome.com/20c5629a29.js"
        crossOrigin="anonymous"
      ></Script>
      <Script
        defer
        src="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
        crossOrigin="anonymous"
      ></Script>

      {/* <script src="https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY>&callback=initMap&libraries=&v=weekly" async></script> */}
    </Html>
  );
}
