./node_modules/sass/sass.js text-media.scss text-media.css
./node_modules/sass/sass.js demo/demo.scss demo/demo.css
./node_modules/clean-css-cli/bin/cleancss -o text-media.min.css text-media.css
gzip-size --raw text-media.min.css > text-media.min.css.size
./node_modules/terser/bin/terser -o text-media.min.js --compress --mangle -- text-media.js
gzip-size --raw text-media.min.js > text-media.min.js.size
