array=( head header footer )
for i in "${array[@]}"
do
  ~/github/stationx/stationxapp.github.io/node_modules/handlebars/bin/handlebars \
  handlebars/${i}_hk.handlebars \
  -f templates/${i}_hk.precompiled.js

  ~/github/stationx/stationxapp.github.io/node_modules/handlebars/bin/handlebars \
  handlebars/${i}_cn.handlebars \
  -f templates/${i}_cn.precompiled.js

  ~/github/stationx/stationxapp.github.io/node_modules/handlebars/bin/handlebars \
  handlebars/${i}_en.handlebars \
  -f templates/${i}_en.precompiled.js
done

~/github/stationx/stationxapp.github.io/node_modules/uglify-js/bin/uglifyjs \
templates/head_hk.precompiled.js \
templates/head_cn.precompiled.js \
templates/head_en.precompiled.js \
templates/header_hk.precompiled.js \
templates/header_cn.precompiled.js \
templates/header_en.precompiled.js \
templates/footer_hk.precompiled.js \
templates/footer_cn.precompiled.js \
templates/footer_en.precompiled.js \
-o assets/js/app.min.js -c -m

