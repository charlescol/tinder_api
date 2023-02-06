import { fetchMatches } from "./matches";
import { fetchMessages, sendMessage } from "./messages";
import { fetchProfile } from "./profile";

// fetchProfile('971c5d67-0766-45b9-a1ef-a6ef26194280').then(r => console.log(r));

// fetchMatches('971c5d67-0766-45b9-a1ef-a6ef26194280').then(r => console.log(r));

sendMessage('da169b04-11e9-4f8b-b57e-7683fb2adf1f', '61edd2771808090100ef4cdf6259b057a0dead01002300dd', 'test8').then(r => console.log(r));