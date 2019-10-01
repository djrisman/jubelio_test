--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

-- Started on 2019-10-01 12:39:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 197 (class 1259 OID 16410)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    product_name character varying(150),
    price integer,
    image character varying(200),
    sku character varying(150),
    description text
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 16408)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO postgres;

--
-- TOC entry 2817 (class 0 OID 0)
-- Dependencies: 196
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 2686 (class 2604 OID 16413)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 2811 (class 0 OID 16410)
-- Dependencies: 197
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product (id, product_name, price, image, sku, description) VALUES (62, ' test el5', 1000000, 'http://image.elevenia.co.id/g/9/2/2/8/7/4/25922874_B_V1.jpeg', ' 1609397612', ' test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4');
INSERT INTO public.product (id, product_name, price, image, sku, description) VALUES (63, 'Baju Magdalene', 89000, 'http://image.elevenia.co.id/g/0/2/2/6/9/6/no_image_300.gif', 'MAGDALENE_BLACK', ' &amp;ltp&amp;gtno brand &amp;lt/p&amp;gt');
INSERT INTO public.product (id, product_name, price, image, sku, description) VALUES (64, ' TORU Motomo Aluminium Case for iPhone 6 Plus - Silver', 200000, 'http://image.elevenia.co.id/g/0/2/2/8/4/9/28022849_B_V1.jpeg', 'TORU02', ' &amp;ltp&amp;gtBACK COVER&amp;nbsp;&amp;lt/p&amp;gt');
INSERT INTO public.product (id, product_name, price, image, sku, description) VALUES (65, ' test el6', 1000000, 'http://image.elevenia.co.id/g/9/1/9/1/7/3/25919173_B.jpeg', ' tes-el6-Hit', 'test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6');
INSERT INTO public.product (id, product_name, price, image, sku, description) VALUES (66, 'Pakaian Kucing Dan Anjing HOOPET  Warna GREY', 150000, 'http://image.elevenia.co.id/g/0/2/2/2/5/7/28022257_B.jpeg', 'HPET02', ' BRAND HOOPETUNTUK ANJING DAN KUCING&lt;/p&gt;&lt;p&gt;&lt;br&gt;GAYA YG BERBEDA&lt;br&gt;BAHAN YG LEMBUT&lt');


--
-- TOC entry 2818 (class 0 OID 0)
-- Dependencies: 196
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 66, true);


--
-- TOC entry 2688 (class 2606 OID 16418)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


-- Completed on 2019-10-01 12:39:59

--
-- PostgreSQL database dump complete
--

