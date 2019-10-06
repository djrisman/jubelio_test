--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

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
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, product_name, price, image, sku, description) FROM stdin;
120	 Dragon Ball  Z	231132	http://image.elevenia.co.id/g/0/2/2/8/4/9/28022849_B_V1.jpeg	132132f	desv
125	Baju Magdalene	89000	http://image.elevenia.co.id/g/0/2/2/6/9/6/no_image_300.gif	MAGDALENE_BLACK	<p>dsadasdaas</p>\r\n<p>asdasd</p>\r\n<p>asdasdasd</p>\r\n<p>asd</p>\r\n<p>asdasdasdasdafgfghdfhthgfg</p>\r\n<p>ghghfgj</p>\r\n<p>gjj</p>\r\n<p>gf</p>\r\n<p>hfgh</p>
126	test el5	1000000	http://image.elevenia.co.id/g/9/2/2/8/7/4/25922874_B_V1.jpeg	1609397612	<p>test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4</p>
127	TORU Motomo Aluminium Case for iPhone 6 Plus - Dark Blue	200000	http://image.elevenia.co.id/g/0/2/2/8/4/1/28022841_B.jpeg	TORU01	<p>TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p><p>Features<br>High Quality Material<br>TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan.</p><p>Lightweight Design<br>Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p><p>Compatibility<br>TORU Motomo Aluminium Case cocok dan pas untuk iPhone 6+ Anda.</p>
128	test el6	1000000	http://image.elevenia.co.id/g/9/2/0/7/3/5/25920735_B.jpeg	tes-el6-Hit	<p>test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6</p>
129	Tas selempang Biru Dongker	30000	http://image.elevenia.co.id/g/0/2/6/5/3/1/26026531_B_V2.jpeg	1203578196	Tas Selempang Merk Dhavin\nMemiliki Bahan yang kuat dan tahan lama\nmemudahkan anda membawa barang-barang saat berpergian\nmemiliki bentuk yang simpel dan trendy.\n\nReady Stok Warna Navy Blue
130	Pakaian Kucing Dan Anjing HOOPET  Warna GREY	150000	http://image.elevenia.co.id/g/0/2/2/2/5/7/28022257_B.jpeg	HPET02	<p>BRAND HOOPETUNTUK ANJING DAN KUCING</p><p><br>GAYA YG BERBEDA<br>BAHAN YG LEMBUT<br> * Hangat Di Musim dingi</p><p>PERHATIAN!<br>Pada saat memesan harap buat catatan UKURAN / SIZE yg di pesan,<br>Apabila tidak mencatumkan UKURAN/SIZE Maka kami kirim ukuran secara acak dengan<br>stok yg tersedia</p><p><br>SIZE Leher(cm/inch) Dada(cm/inch) Panjang(cm/inch)</p><p>BESAR =M 30/11.8inc 35-40/13.8inc-15.8inc 28/11inc</p><p>MEDIUM = S 26/10.2inc 30-35/11.8inc-13.8inc 23/9.1inc</p><p>KECIL =XS 22/8.7inc 25-30/10inc-11.8inc 18/7.1inc</p>
131	Charm Body Fit Extra Maxi Wing 20pads  Test Only	79000	http://image.elevenia.co.id/g/0/2/2/2/3/1/28022231_B.jpeg	U81818181818	<p><strong>Deskripsi</strong></p>\n<p>Charm Body Fit Extra Maxi Wings. Dengan bantalan elastis yang kembali ke bentuk semula sehingga mencegah pembalut berkerut, dengan teknologi double block line untuk mencegah pembalut bocor, serta dilengkapi dengan permukaan yang lembut di kulit agar membe<br>\n</p>\n<p>Charm Body Fit Extra Maxi Wings. With an elastic pad back into shape so as to prevent the pads wrinkled, with double-block line technology to prevent leaking dressings, and equipped with a soft on the skin surface in order to provide comfort when worn.</p>\n<p><br></p>\n<p>Test Produk Only.</p>
132	Pakaian Anjing Dan Kucing HOOPET warna SILVER	150000	http://image.elevenia.co.id/g/0/2/2/7/9/6/28022796_B_V1.jpg	HPET03	<p>BAJU BRAND HOOPET UNTUK ANJING DAN KUCING</p><p><br>GAYA YG BERBEDA<br>BAHAN YG LEMBUT<br>* Hangat Di Musim dingi</p><p>PERHATIAN!<br>Pada saat memesan harap buat catatan UKURAN / SIZE yg di pesan,<br>Apabila tidak mencatumkan UKURAN/SIZE Maka kami kirim ukuran secara acak dengan<br>stok yg tersedia</p><p>SIZE Leher(cm/inch) Dada(cm/inch) Panjang(cm/inch)</p><p>BESAR =M 28/11inc 33-38/13inc-15.8inc 28/11inc</p><p>MEDIUM = S 25/9.8inc 28-33/11inc-13.8inc 23/9inc</p><p>KECIL =XS 22/8.7inc 23-28/9inc-11.8inc 18/7.1inc</p>
133	Baju Corak Carik Warna Warni	100000	http://image.elevenia.co.id/g/0/2/2/6/4/5/28022645_B_V1.jpg	BLACK	<p>Baju Corak Carik Warna Warni Bahan Katun Baju Corak Carik Warna Warni banyak warna Baju Corak Carik Warna Warni Baju Corak Carik Warna Warni</p>
136	Coleman Packable Grass	230000	http://image.elevenia.co.id/g/0/2/2/1/8/8/28022188_B_V1.jpeg	COL-PAC-(GR-KUN	<p>Tas Selempang Bahu yang dapat dilipat Ukuran : Normal 34x27x13cm Dilipat : sekitar 10x14x6cm<br>\nKapasitas : sekitar 13L<br>\nBerat : sekitar 128G<br>\nBahan : 70D tiga ripstop nilon&nbsp;</p>
139	test el6	1000000	http://image.elevenia.co.id/g/9/1/9/1/7/3/25919173_B.jpeg	tes-el6-Hit	<p>test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6</p>
141	Case Spigen Neo Hybrid Iphone 6 Plus - Red	200000	http://image.elevenia.co.id/g/9/8/2/8/6/7/25982867_B_V3.jpg	SPGN01	<p>SPG Neo Hybrid</p>\r\n<p>Terbuat dari bahan berkualitas</p>\r\n<p>tahan benturan dengan design modern</p>\r\n<p>terdapat pilihan banyak warna</p>\r\n<p>untuk Iphone 6 Plus dan Iphone 6s Plus</p>
134	NOOSY TPU Soft Case for iPhone 6 Plus - Transparants	100000	http://image.elevenia.co.id/g/0/2/2/2/3/8/28022238_B.jpeg	NOOSY02	<p>TPU soft case NOOSY untuk iPhone 6 Plus Anda terbuat dari bahan material yang lembut dan berkualitas untuk melindungi setiap sisi iPhone Anda dari benturan dan goresan.</p><p>Features<br>High Quality Material<br>Soft case ini terbuat dari bahan material metal yang lembut dan berkualitas, sehingga memberikan perlindungan ekstra untuk iPhone 6 Plus Anda dari goresan dan benturan.</p><p>Easy Access to All Buttons<br>Anda tetap mendapat akses ke setiap port dan button yang terdapat di device Anda dengan gampang.</p><p>Removable, Durable, Reusable and Washable<br>Tidak perlu kuatir soft case ini kotor saat dipakai beraktivitas karena Anda dapat mencuci case ini tanpa mengurangi kualitasnya.</p><p>Compatibility<br>Case ini cocok dan pas untuk iPhone 6 Plus Anda.</p>
137	Celana Dalam Sepeda Cycling Pants Bantalan Gel Empuk	99000	http://image.elevenia.co.id/g/6/8/2/7/3/1/26682731_B_V3.jpeg	CD001	<p>Celana Dalam Sepeda dengan Bantalan Gel Empuk Sejuk Nyaman Dipakai</p><p><br>DESKRIPSI PRODUK :</p><p><br>1. Tebal bantalan 2.1cm <br>2. Didesain khusus dengan Elastic Interface Technology yang mampu memaksimalkan<br>performa dan kenyamanan anda saat berkendara <br>3. Bantalan yang empuk berfungsi untuk Mengurangi gesekan yang terjadi saat<br>mengayuh sepeda sehingga mengurangi kemungkinan lecet pada kulit<br>4. Dibuat dengan bahan yang berpori sehingga tidak mudah basah oleh keringat</p><p></p><p><br>Cotton + Nylon Material</p><p>Terbuat dari bahan katun dan nylon yang lentur sehingga muat untuk banyak ukuran<br>badan.</p><p></p><p><br>Body Fit</p><p>Celana ini memiliki model body fit sehingga pergerakan Anda menjadi lebih<br>leluasa dan tidak terbeban sama sekali. Sangat cocok digunakan untuk bersepeda<br>baik indoor maupun outdoor.</p><p></p><p></p><p></p><p>Ready Ukuran XXL (Ukuran celana 36-40)</p>
142	Celana Dalam Sepeda Cycling Pants Bantalan Gel Empuk	150000	http://image.elevenia.co.id/g/2/6/9/1/2/5/26269125_B_V8.jpeg	CD001	<p>&nbsp;Celana Dalam Sepeda dengan Bantalan Gel Empuk Sejuk Nyaman Dipakai<br>\n</p>\n<p>DESKRIPSI PRODUK :<br>\n</p>\n<p>1. Tebal bantalan 2.1cm <br>\n2. Didesain khusus dengan Elastic Interface Technology yang mampu memaksimalkan performa dan kenyamanan anda saat berkendara <br>\n3. Bantalan yang empuk berfungsi untuk Mengurangi gesekan yang terjadi saat mengayuh sepeda sehingga mengurangi kemungkinan lecet pada kulit<br>\n4. Dibuat dengan bahan yang berpori sehingga tidak mudah basah oleh keringat &nbsp;</p>\n<p><br></p>\n<p>&nbsp;Cotton + Nylon Material</p>\n<p>Terbuat dari bahan katun dan nylon yang lentur sehingga muat untuk banyak ukuran badan.&nbsp;</p>\n<p><br></p>\n<p>Body Fit</p>\n<p>Celana ini memiliki model body fit sehingga pergerakan Anda menjadi lebih leluasa dan tidak terbeban sama sekali. Sangat cocok digunakan untuk bersepeda baik indoor maupun outdoor.</p>\n<p><br></p>\n<p><br></p>\n<p>Ready Ukuran XXL (Ukuran celana 36-40)</p>
143	test el5	1000000	http://image.elevenia.co.id/g/9/1/9/1/5/5/25919155_B_V76.jpeg	test el4	<p>test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4test el4</p>
144	TORU Motomo Aluminium Case for iPhone 6 Plus - Silver	200000	http://image.elevenia.co.id/g/0/2/2/8/4/9/28022849_B_V1.jpeg	TORU02	<p>TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p><p>Features<br>High Quality Material<br>TORU Motomo Aluminium Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan.</p><p>Lightweight Design<br>Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p><p>Compatibility<br>TORU Motomo Aluminium Case cocok dan pas untuk iPhone 6+ Anda.</p>
145	SGP Neo Hybrid Ex Plastic Case for iPhone 6 Plus - Magenta	200000	http://image.elevenia.co.id/g/0/2/2/8/9/6/28022896_B.jpeg	SPGN01	<p>Spigen Hard Case untuk iPhone 6 Plus ini terbuat dari bahan Polycarbonate yang<br>kokoh dan ringan. Case ini juga hadir dengan berbagai pilihan warna menarik.</p><p>Top Quality and Durable Polycarbonate Material<br>Dengan bahan Plastic yang kuat dan kokoh membuat Hard Case ini dapat mengabsorb<br>impact yang terjadi saat terjatuh atau terbentur.</p><p>Easy Fold Design<br>SGP Tough Armor dilengkapi dengan kickstand pada bagian belakang yang berfungsi<br>agar iPhone Anda dapat digunakan dalam posisi berdiri dengan stabil.</p><p>Perfectly Fit Your Cell Phone<br>Design yang super tipis dan ringan membuat iPhone 6 Plus Anda lebih nyaman saat<br>digunakan. Hard Case ini juga hadir dengan berbagai pilihan warna-warna menarik.</p><p>Shockproof Air Cushion<br>Case ini dilengkapi dengan sistem peredam jatuh sehingga iPhone Anda tidak akan<br>rusak saat terjatuh.</p><p>Warna Magenta</p>
146	SGP Neo Hybrid Ex Plastic Case for iPhone 6 Plus - Gold	200000	http://image.elevenia.co.id/g/0/2/2/8/6/5/28022865_B.jpeg	SPGN02	<p>Spigen Hard Case untuk iPhone 6 Plus ini terbuat dari bahan Polycarbonate yang<br>kokoh dan ringan. Case ini juga hadir dengan berbagai pilihan warna menarik.</p><p>Top Quality and Durable Polycarbonate Material<br>Dengan bahan Plastic yang kuat dan kokoh membuat Hard Case ini dapat mengabsorb<br>impact yang terjadi saat terjatuh atau terbentur.</p><p>Easy Fold Design<br>SGP Tough Armor dilengkapi dengan kickstand pada bagian belakang yang berfungsi<br>agar iPhone Anda dapat digunakan dalam posisi berdiri dengan stabil.</p><p>Perfectly Fit Your Cell Phone<br>Design yang super tipis dan ringan membuat iPhone 6 Plus Anda lebih nyaman saat<br>digunakan. Hard Case ini juga hadir dengan berbagai pilihan warna-warna menarik.</p><p>Shockproof Air Cushion<br>Case ini dilengkapi dengan sistem peredam jatuh sehingga iPhone Anda tidak akan<br>rusak saat terjatuh.</p><p>Warna Gold</p>
147	SPG Full Armor Case for iphone 6 plus	200000	http://image.elevenia.co.id/g/9/9/6/8/2/1/25996821_B_V5.jpeg	SPG04	<p>&nbsp;CASE SPG Full Armor Case terbuat dari bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra untuk iPhone 6+ Anda dari goresan dan benturan. Dengan design yang ramping dan ringan, Anda tetap mendapat akses ke setiap tombol dengan mudah.</p>\r\n<p>High Quality Material</p>\r\n<p>SPG Full Armor Case terbuat dari &nbsp;&nbsp;bahan material aluminium yang kokoh, sehingga memberikan perlindungan ekstra &nbsp;&nbsp;untuk iPhone 6+ Anda dari goresan dan benturan.</p>\r\n<p>Lightweight Design</p>\r\n<p>Dengan design yang ramping dan ringan, Anda &nbsp;&nbsp;tetap mendapat akses ke setiap tombol dengan mudah.</p>\r\n<p>Compatibility</p>\r\n<p>SPG Full Armor Case cocok dan pas &nbsp;&nbsp;untuk iPhone 6+ Anda.</p>
148	test el6	1000000	http://image.elevenia.co.id/g/9/2/0/7/3/6/25920736_B.jpeg	tes-el6-Hit	<p>test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6test el6</p>
135	Baju Kaos Polos Aneka Size	500000	http://image.elevenia.co.id/g/0/2/2/7/1/6/28022716_B_V1.jpeg	KAOS2	<p>&nbsp;StyleBasics Men's Round Neck Basic T-shirt merupakan kaos polos tanpa corak yang cocok dikenakan oleh pria. Kaos ini dirancang dengan model kerah bulat (round neck) yang nyaman digunakan untuk beraktivitas untuk suasana yang santai. Kaos ini terbuat dari bahan 30S dengan ketebalan yang tepat, sehingga memberikan kesejukkan saat Anda mengenakannya. Teknik jahitannya yang rapi juga akan menjaga kaos ini tetap awet dan tahan lama. &nbsp;</p>\n<p><strong>Detail</strong> - Model: Kaos - Warna: Merah - Gender: Pria - Material: Fabric 30S - Desain: Round neck - Ukuran: XXL&nbsp;</p>
138	kopi gayo	10000000	http://image.elevenia.co.id/g/0/2/2/6/5/3/28022653_B_V1.jpeg	kopigy1	<p>fdashfUFHYDHFYDHFYASHIJDISC sfbhsdbfsdfndkcmkmkjsaub hd</p>
140	Beli Casing HP iPhone 6 Plus 3 Gratis Casing 1	1000000	http://image.elevenia.co.id/g/0/1/5/3/0/1/28015301_B.jpeg	SPGN02 - CSG001	<p>&nbsp;<strong>Casing SGP Neo Hybrid Ex Plastic Case for iPhone 6 Plus</strong></p>
\.


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 148, true);


--
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

