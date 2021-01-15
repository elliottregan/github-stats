# Github Language Stats
View which programming languages a user works with, sorted by greatest number of bytes.

## Dependencies
- Node 14, or Docker

## Run

### With Docker
If you have Docker installed locally, simply run
```
make get_user_stats username="[GITHUB_USERNAME]"
```
The output of this command can be found in `/dist/[GITUB_USERNAME].txt

**Example:** `make get_user_stats username="mefyl"`

### With Node
If you have Node 14 installed, you can install required dependencies and generate the output with
```
npm install
npm run get-stats [GITHUB_USERNAME]
```

**Example:** `npm run get-stats mefyl`

## Github API Rate Limiting
Github limits the number of unauthenticated API calls, and you _may_ hit this limit with very active users. To increase your rate limit, you will need to create an OAuth Token in your Github Account settings for use in this project:

1. Create a new OAuth Token on this page: https://github.com/settings/tokens (no special permissions are required)
2. Duplicate `.env.example` (found in the root of this project) and rename as `.env`
3. Paste your OAuth Token in place of `GITHUB_OAUTH_TOKEN`
