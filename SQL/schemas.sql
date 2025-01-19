CREATE TABLE public.user (
	id bigserial NOT NULL,
	"json" jsonb NULL,
	"owner" varchar NULL,
	creator varchar NULL,
	creation_date timestamp NULL,
	modifier varchar NULL,
	modify_date timestamp NULL,
);

