CREATE TABLE public."user" (
    id BIGSERIAL PRIMARY KEY,
    "json" JSONB NULL,
    "owner" VARCHAR NULL,
    creator VARCHAR NULL,
    creation_date TIMESTAMP NULL,
    modifier VARCHAR NULL,
    modify_date TIMESTAMP NULL
);
