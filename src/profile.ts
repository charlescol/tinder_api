import axios from 'axios';
import { TINDER_BASE_URL, TINDER_PROFILE_URL } from "./const";
import { TinderGender } from "./common/enum";
import { TinderJob, TinderPhoto, TinderPos } from "./common/type";

export type TinderProfile = {
  id : string;
  bio : string;
  age_filter_max : number;
  age_filter_min : number;
  birth_date : Date;
  create_date: Date;
  distance_filter : number;
  email : string;
  full_name : string;
  gender : TinderGender;
  gender_filter : TinderGender,
  interested_in : TinderGender[];
  jobs : TinderJob[];
  latest_update_date : Date;
  name : string;
  photo_optimizer_enabled : boolean;
  ping_time : Date;
  pos : TinderPos;
  pos_major : TinderPos;
  promoted_out_of_date : boolean;
  show_gender_on_profile : boolean;
  photos : TinderPhoto[];
};

export async function fetchProfile(token : string) : Promise<TinderProfile> {
    const profile = await axios
    .get(TINDER_PROFILE_URL, {
      headers: { 'x-auth-token': token },
    })
    .then((response) => response.data as TinderProfile); 
    return profile;
}