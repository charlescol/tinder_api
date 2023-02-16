import {  TINDER_MATCHES_URL } from "./const";
import { TinderProfile } from "./profile";
import axios from 'axios';

export type TinderMatch = {
    seen : {match_seen : boolean;};
    id : string;
    _id : string;
    closed : boolean;
    common_friend_count : number;
    common_like_count : number;
    created_date : Date;
    dead : boolean;
    last_activity_date : Date;
    message_count : number;
    participants : string[];
    pending : boolean;
    is_super_like : boolean;
    is_boost_match : boolean;
    is_super_boost_match : boolean;
    is_primetime_boost_match : boolean;
    is_experiences_match : boolean;
    is_fast_match : boolean;
    is_preferences_match : boolean;
    is_matchmaker_match : boolean;
    is_opener : boolean;
    has_shown_initial_interest : boolean;
    person : TinderProfile;
    following : boolean;
    following_moments : boolean;
    readreceipt:  {enabled : boolean;};
    is_archived : boolean;
}

/**
 * This route fetches a specified number of matches for a given user
 *
 * @author charlescol
 * @date 15/02/2023
 * @param {string} token Api token
 * @param {number} [count=60] Number to fetch
 * @return {*}  {Promise<TinderMatch[]>}
 */
export async function fetchMatches(token : string, count=60) : Promise<TinderMatch[]> {
    const profile = await axios
    .get(`${TINDER_MATCHES_URL}?locale=fr&message=1&count=${count}`, {
      headers: { 'x-auth-token': token },
    })
    .then((response) => response.data.data.matches as TinderMatch[]); 
    return profile;
}