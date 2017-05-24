rm -rf _site
npm run site
cd ./_site
touch CNAME
echo "mobile-design.cyqapp.com" > CNAME
git init
git add .
git commit -m 'Update doc'
git push --force "https://github.com/can-yin-quan/antd-mobile-cyq.git" master:gh-pages