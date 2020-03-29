```
touch README.md
mkdir .vscode
cat <<EOF > .vscode/settings.json
{
  "files.exclude": {
    "node_modules": true
  },
  "search.exclude": {
    "yarn.lock": true,
    "android": true,
    "ios": true
  },
  "editor.gotoLocation.multipleDefinitions": "goto",
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  }
}
EOF
```