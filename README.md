
# Tinder API Client in TypeScript

This package provides an easy and convenient way to interact with the Tinder API using TypeScript. It includes the following four routes:

## `fetchMatches(token : string, count=60) : Promise<TinderMatch[]>`

This route fetches a specified number of matches (default is 60) for a given user. It returns an array of `TinderMatch` objects.

## `fetchProfile(token : string) : Promise<TinderProfile>`
This route fetches the profile for a given user. It returns a `TinderProfile` object.

## `fetchMessages(token: string, matchId: string): Promise<TinderMessage>`
This route fetches all messages for a specified match using a given token. It returns an array of `TinderMessage` objects.
## `sendMessage(token: string, matchId: string, message: string): Promise<TinderMessage>`
This route sends a message to a specified match. It returns a `TinderMessage` object.

## Full example

```typescript
import { fetchMatches, sendMessage, fetchMessages, fetchProfile } from 'tinder-api-client';

const token = 'your-token-here';

// Fetch matches
fetchMatches(token)
  .then((matches) => {
    console.log(`Fetched ${matches.length} matches:`);
    console.log(matches);

    // Send a message to the first match
    if (matches.length > 0) {
      const firstMatchId = matches[0].id;
      sendMessage(token, firstMatchId, 'Hello, how are you?')
        .then((sentMessage) => {
          console.log(`Sent message:`);
          console.log(sentMessage);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  })
  .catch((error) => {
    console.error(error);
  });

// Fetch messages for a specific match
const matchId = 'your-match-id-here';
fetchMessages(token, matchId)
  .then((messages) => {
    console.log(`Fetched ${messages.length} messages for match ${matchId}:`);
    console.log(messages);
  })
  .catch((error) => {
    console.error(error);
  });

// Fetch profile
fetchProfile(token)
  .then((profile) => {
    console.log(`Fetched profile:`);
    console.log(profile);
  })
  .catch((error) => {
    console.error(error);
  });

```
