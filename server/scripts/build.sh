npm install
npm run build

rm -rf dist/Procfile
echo "web: npm start" >> dist/Procfile