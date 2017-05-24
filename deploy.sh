if test "$#" -ne 1; then
   echo '[patch|minor|major]'
   exit 1;
fi 
npm run clean
npm run build
npm run compile

rm -rf npm_dist/antd-mobile-cyq/dist
rm -rf npm_dist/antd-mobile-cyq/lib
cp -R dist npm_dist/antd-mobile-cyq/
cp -R lib npm_dist/antd-mobile-cyq/

cd npm_dist/antd-mobile-cyq/

echo '-----------------------------'
echo 'updating the version number.'
echo 'npm publish'

npm version $1
npm publish

exit 1;
