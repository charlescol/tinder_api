export type TinderPhoto = {
    id: string;
    type: string;
    created_at: Date;
    updated_at: Date;
    crop_info: {
        user: TinderAlgo;
        algo: TinderAlgo;
        processed_by_bullseye: boolean;
        user_customized: boolean;
        faces:
        {
            algo: TinderAlgo;
            bounding_box_percentage: number
        }[]
    };
    url: string,
    processedFiles: TinderFile[];
    fileName: string,
    extension: string,
    fbId: string,
    rank: number,
    phash: {
        version: string,
        value: number
    },
    dhash: {
        version: string,
        value: number
    },
    score?: number;
    win_count?: number;
    media_type?: string;
};

export type TinderFile = {
    url: string;
    height: number;
    width: number;
}

export type TinderAlgo = {
    width_pct: number;
    x_offset_pct: number;
    height_pct: number;
    y_offset_pct: number;
}

export type TinderPos = {
    at: number;
    lat: number;
    lon: number;
}

export type TinderJob = {
    title: {
        displayed: boolean;
        name: string;
    }
}