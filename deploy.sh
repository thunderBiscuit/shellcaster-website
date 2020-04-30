# deploy to github pages

gatsby build --prefix-paths

cd public

git init .
git add -A
git commit -m "deploy"

git push -f https://github.com/thunderBiscuit/shellcaster-website.git master:gh-pages
