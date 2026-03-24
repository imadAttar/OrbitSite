# Deploy

Build, commit, and push OrbitSite in one command.

## Steps

1. Run `npm run build` — abort if it fails
2. Run `git status` to check for changes
3. If there are changes:
   - Stage all modified files (not node_modules/dist)
   - Create a commit with a descriptive message following conventions
   - Push to origin main
4. Report: build status, commit hash, deploy URL

Deploy URL: https://imadattar.github.io/OrbitSite/
