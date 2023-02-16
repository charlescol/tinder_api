import { TINDER_MATCHES_URL, TINDER_SEND_MESSAGE_URL } from "./const";
import axios from 'axios';

export type TinderMessage = {
    _id: string;
    match_id: string;
    sent_date: Date;
    message: string;
    to: string;
    from: string;
    created_date: Date;
    timestamp: number;
    matchId: string;
}

/**
 * This route fetches all messages for a specified match using a given token
 *
 * @author charlescol
 * @date 15/02/2023
 * @param {string} token Api token
 * @param {string} matchId match for who fetch messages
 * @return {*}  {Promise<TinderMessage[]>}
 */
export async function fetchMessages(token: string, matchId: string): Promise<TinderMessage[]> {
    const profile = await axios
        .get(`${TINDER_MATCHES_URL}/${matchId}/messages?locale=fr&count=100`, {
            headers: { 'x-auth-token': token },
        })
        .then((response) => response.data.data.messages as TinderMessage[]);
    return profile;
}

/**
 *
 *
 * @author charlescol
 * @date 15/02/2023
 * @param {string} token Api token
 * @param {string} matchId match for who send messages
 * @param {string} message message content
 * @return {*}  {Promise<TinderMessage>}
 */
export async function sendMessage(token: string, matchId: string, message: string): Promise<TinderMessage> {
    return axios
        .post(`${TINDER_SEND_MESSAGE_URL}/${matchId}?local=fr`,
            { 
                message 
            },
            {
                headers: {
                    'x-auth-token': token,
                    'Content-Type': 'application/json'
                }
            })
        .then((response) => response.data as TinderMessage);
}