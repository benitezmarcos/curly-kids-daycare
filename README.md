# curly-kids-daycare




@charset "utf-8";
/* CSS Document */

* {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

:focus {
    outline: 0 none;
}

a:focus {
    outline: 0 none;
}

a img {
    border: none;
}

/* TAP HIGHLIGHT MOBILE */

img, a, input, textarea, select {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
}

/* FOR IOS */

input, textarea, select {
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-appearance: none
}

input[type="checkbox"] {
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-appearance: checkbox !important;
}

input[type="radio"] {
    -webkit-border-radius: 0;
    border-radius: 0;
    -webkit-appearance: radio !important;
}

/* SELECTION COLOR */

::-moz-selection {
    background-color: #000;
    color: #fff;
}

::selection {
    background-color: #000;
    color: #fff;
}

/* PLACEHOLDER OPACITY */

input[type="text"]::-webkit-input-placeholder {
    opacity: 1;
    color: #000
}

input[type="text"]::-moz-placeholder {
    opacity: 1;
    color: #000
}

input[type="text"]::-ms-input-placeholder {
    opacity: 1;
    color: #000
}

input[type="email"]::-webkit-input-placeholder {
    opacity: 1;
    color: #000
}

input[type="email"]::-moz-placeholder {
    opacity: 1;
    color: #000
}

input[type="email"]::-ms-input-placeholder {
    opacity: 1;
    color: #000
}

input[type="password"]::-webkit-input-placeholder {
    opacity: 1;
    color: #000
}

input[type="password"]::-moz-placeholder {
    opacity: 1;
    color: #000
}

input[type="password"]::-ms-input-placeholder {
    opacity: 1;
    color: #000
}

textarea::-webkit-input-placeholder {
    opacity: 1;
    color: #000
}

textarea::-moz-placeholder {
    opacity: 1;
    color: #000
}

textarea::-ms-input-placeholder {
    opacity: 1;
    color: #000
}

/*font-family: 'Open Sans', sans-serif;*/

@font-face {
    font-family: 'MasterOfBreak';
    src: url('../fonts/MasterOfBreak.woff') format('woff');
}

@font-face {
    font-family: 'VAGRoundedBT';
    src: url('../fonts/VAGRoundedBT.woff') format('woff');
}

/* CSS ANIMATIONS */

body, .headerPart .nav li a, .headerPart .logo, .headerPart .address, .headerPart .address li a, .bannerPart a.next, .bannerPart a.prev, .sliderLstTxt .btn, .hmSection1 .hmPart .block .btn, .hmSection2 .aboutPart .btn, .footer .quickLinks ul li a, .headerPart, headerPart .logo img, .footer .loginDetails li .btn1, .footer .loginDetails li .btn2, .headerPart .nav ul ul li a, .headerPart .nav ul ul li, .footer .inquiry, .social ul li a {
    transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
}

html {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
}

body {
    background: #fff;
    font: 400 14px/20px 'PT Sans', sans-serif;
    color: #777;
    overflow-x: hidden;
}

.clear_me {
    font-size: 0;
    line-height: 0;
    clear: both
}

.container {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    float: none;
}

.slicknav_menu {
    display: none;
}

.headerPart {
    width: 100%;
    height: auto;
    float: left;
    background: #edc647;
    position: relative;
    box-shadow: #777 0 0 5px;
    position: relative;
    z-index: 99
}

.headerPart .logo {
    width: 25%;
    height: auto;
    background: #edc647;
    display: block;
    text-align: center;
    padding: 49px 0;
    float: left;
}

.headerPart .address {
    width: 75%;
    height: auto;
    background: #fff;
    float: left;
    padding: 26px 28px;
}

.headerPart .address li {
    float: left;
    margin-right: 165px;
    font: 400 14px/19px 'Open Sans', sans-serif;
    color: #3f3f3f;
    padding-left: 60px;
}

.headerPart .address li a {
    font: 400 14px/19px 'Open Sans', sans-serif;
    color: #3f3f3f;
}

.headerPart .address li a:hover {
    font-weight: bold;
}

.headerPart .address li:last-child {
    margin-right: 0;
}

.headerPart .nav {
    width: 75%;
    height: 88px;
    background: #398790;
    float: left;
}

.headerPart .nav .container {
    display: none;
}

.headerPart .nav li {
    float: left;
    margin-right: 1px;
    position: relative;
}

.headerPart .nav li:last-child {
    margin-right: 0;
}

.headerPart .nav li a {
    font: 18px/22px 'VAGRoundedBT', sans-serif;
    color: #fff;
    display: block;
    text-align: center;
    padding: 33px 21px;
}

.headerPart .nav li a:hover, .headerPart .nav li a.active {
    background: #e8485b;
}

.headerPart .nav ul ul {
    visibility: hidden;
    opacity: 0;
    transform: translateY(20px);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    z-index: -1;
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
    position: absolute;
    left: 0;
    top: 100%;
    background: #398790;
    width: 270px;
    z-index: 999;
    padding: 5px 0 0 0;
}

.headerPart .nav ul li:hover ul {
    visibility: visible;
    opacity: 1;
    z-index: 999;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transition-delay: 0s, 0s, 0.3s;
}

.headerPart .nav ul ul li {
    float: left;
    position: relative;
    width: 100%;
    padding: 0;
    text-align: left
}

.headerPart .nav ul ul li a {
    font: 18px/22px 'VAGRoundedBT', sans-serif;
    color: #fff;
    display: block;
    padding: 10px 20px;
    border-left: none;
    text-transform: capitalize;
    text-align: left;
}

.headerPart .nav ul ul li a:hover {
    color: #fff;
    background: #e8485b;
}

body.fixed .headerPart {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    box-shadow: #777 0 0 5px;
}

body.fixed .logo {
    padding: 20px 0;
}

body.fixed .address {
    padding: 15px 28px;
}

body.fixed .nav {
    height: auto;
}

body.fixed .nav li a {
    padding: 16px 20px;
}

body.fixed .bannerPart {
    margin-top: 123px
}

.bannerPart {
    width: 100%;
    float: left;
    height: auto;
    background: #aeb3b6;
    position: relative;
}

.sliderLst {
    float: left;
    width: 100%;
    height: 587px;
    background-size: cover;
}

.sliderLstTxt {
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
    padding: 0 0 0;
    margin: 0;
    font: normal 30px/70px 'MasterOfBreak', sans-serif;
    color: #fff;
    text-shadow: #111 0 0 5px;
}

.sliderLstTxt .btn {
    width: 184px;
    height: 48px;
    text-align: center;
    display: inline-block;
    font: 400 23px/23px 'VAGRoundedBT', sans-serif;
    color: #fff;
    background: #e8485b;
    padding: 12px 0;
    margin: 40px 40px 0 0;
    border-radius: 3px;
    box-shadow: #555 2px 2px 3px;
    text-shadow: none;
}

.sliderLstTxt .btn:hover {
    background: #edc647!important;
}

.bannerPart a.next, .bannerPart a.prev {
    width: 50px;
    height: 60px;
    display: block;
    font-size: 0;
    position: absolute;
    top: 45%;
    margin-top: 0px;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
}

.sliderLstTxt h1 {
    font-weight: normal;
}

.bannerPart.innerPageBnr {
    float: left;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}

.bannerPart a.next {
    right: 0;
    border-radius: 5px 0 0 5px;
}

.bannerPart a.prev {
    left: 0;
    border-radius: 0 5px 5px 0;
}

.bannerPart a.next:before, .bannerPart a.prev:before {
    color: #fff;
    font-size: 40px;
    line-height: 60px;
    text-align: center;
    font-family: 'FontAwesome';
    position: absolute;
    display: block;
    background: none;
    width: 100%;
    height: 100%;
}

.bannerPart a.next:before {
    content: '\f105';
}

.bannerPart a.prev:before {
    content: '\f104';
}

.bannerPart a.next:hover {
    width: 70px
}

.bannerPart a.prev:hover {
    width: 70px
}

.bannerPart ul.rslides_tabs {
    position: absolute;
    left: 0;
    bottom: 40px;
    width: 100%;
    text-align: center;
    z-index: 99;
}

.bannerPart ul.rslides_tabs li {
    float: none;
    display: inline;
    margin: 0 15px;
}

.bannerPart ul.rslides_tabs li a {
    display: inline-block;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    text-indent: -9999px;
}

.bannerPart ul.rslides_tabs li.rslides_here a {
    background: #f4465d;
    width: 16px;
    height: 16px;
}

.hmSection1 {
    width: 100%;
    float: left;
    height: 795px;
    background: url(../images/hmSection1Bg.jpg) center center no-repeat;
    background-size: cover;
    position: relative
}

.hmSection1 .social {
    width: 100%;
    float: left;
    height: auto;
    position: relative;
    margin: 0 auto;
    text-align: center;
}

.hmSection1 .social ul {
    width: 720px;
    height: auto;
    text-align: center;
    margin: 0 auto;
}

.hmSection1 .social ul li {
    float: left;
    color: #fff;
    border-radius: 50%;
    margin: 30px 20px;
}

.hmSection1 .social ul li a {
    color: #fff;
    width: 56px;
    height: 56px;
    display: block;
    font-size: 30px;
    line-height: 56px;
}

.hmSection1 .hmPart {
    width: 100%;
    float: left;
    height: 427px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: 0;
}

.hmSection1 .hmPart .block {
    width: 25%;
    height: auto;
    position: relative;
    float: left;
    padding: 0 15px;
    text-align: center;
    margin-top: -74px;
}

.hmSection1 .hmPart .block h1 {
    font: 400 23px/26px 'VAGRoundedBT', sans-serif;
    color: #3b4446;
    padding: 20px 0;
}

.hmSection1 .hmPart .block p {
    font: 400 20px/22px 'Open Sans', sans-serif;
    color: #3b4346;
    padding: 10px 0;
}

.hmSection1 .hmPart .block .btn {
    width: 154px;
    height: 48px;
    text-align: center;
    display: inline-block;
    font: 400 20px/22px 'VAGRoundedBT', sans-serif;
    color: #fff;
    background: #e8485b;
    padding: 12px 0;
    margin: 10px 0;
    border-radius: 3px;
}

.hmSection1 .hmPart .block .btn:hover {
    background: #398790!important;
}

.hmSection2 {
    width: 100%;
    float: left;
    height: auto;
    background: #fff;
    position: relative;
    padding: 70px 0;
}

.hmSection2 .aboutPart {
    width: 683px;
    float: left;
    height: auto;
    background: #fff;
    position: relative;
    padding: 0 15px;
}

.hmSection2 .aboutPart h3 {
    font: 45px/36px 'MasterOfBreak', sans-serif;
    color: #39878f;
    padding: 10px 0;
}

.hmSection2 .aboutPart p {
    font: 21px/28px 'Open Sans', sans-serif;
    color: #353535;
    padding: 10px 0;
    margin-top: 20px;
}

.hmSection2 .aboutPart .btn {
    width: 145px;
    height: 45px;
    text-align: center;
    display: inline-block;
    font: 700 18px/20px 'Open Sans', sans-serif;
    color: #fff;
    background: #70c582;
    padding: 12px 0;
    margin: 25px 0;
    border-radius: 3px;
}

.hmSection2 .aboutPart .btn:hover {
    background: #398790;
}

.hmSection2 .newsPart {
    width: 487px;
    float: left;
    height: auto;
    background: #fff;
    position: relative;
    padding-left: 60px;
}

.hmSection2 .newsPart h3 {
    font: 45px/36px 'MasterOfBreak', sans-serif;
    color: #e7475b;
    padding: 10px 0;
}

.hmSection2 .newsPart .newsBlock {
    width: 100%;
    float: left;
    height: auto;
    background: #fff;
    position: relative;
    margin: 30px 0;
}

.hmSection2 .newsPart .date {
    width: 76px;
    height: 72px;
    float: left;
    background: #fff;
    position: relative;
    font: 700 22px/24px 'Open Sans', sans-serif;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 11px 0;
}

.hmSection2 .newsPart .content {
    padding: 0px 20px 0 100px;
    width: 410px;
    height: 148px;
}

.hmSection2 .newsPart .content h2 {
    font: 600 18px/20px 'Open Sans', sans-serif;
    color: #39878f;
}

.hmSection2 .newsPart .content p {
    font: 16px/24px 'Open Sans', sans-serif;
    color: #353535;
    padding: 5px 0;
}

.photoGallery {
    width: 100%;
    float: left;
    height: auto;
    background: #fff;
    position: relative;
    padding: 10px 0;
    text-align: center;
}

.photoGallery h3 {
    font: 600 45px/48px 'MasterOfBreak', cursive, sans-serif;
    color: #39878f;
}

.photoGallery .gallery2 {
    margin-top: 44px;
}

.photoGallery .sliderBlock {
    width: 33.333%;
    height: auto;
    background-size: cover;
}

.photoGallery .sliderBlock img {
    width: 100%;
    height: auto
}

.certifications {
    width: 100%;
    float: left;
    height: auto;
    background: #fff;
    position: relative;
    padding: 70px 0;
    text-align: center;
}

.certifications h3 {
    font: 45px/48px 'MasterOfBreak', cursive, sans-serif;
    color: #e7475b;
}

.certifications ul li {
    float: left;
    margin: 50px 80px 0 80px;
    height: 195px;
}

.certifications ul li:last-child {
    margin-right: 0;
}

.map {
    width: 100%;
    float: left;
    height: auto;
    background: #fff;
    position: relative;
}

.map .contactMap {
    width: 100%;
    height: 672px;
}

.map .contactSec {
    position: absolute;
    left: 0;
    top: 45px;
    width: 100%;
}

.map .contactSec div.contactSecInr {
    background: #fff;
    padding: 30px 45px;
    float: left;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 5px;
}

.map .contactSec h3 {
    font: 45px/48px 'MasterOfBreak', cursive, sans-serif;
    color: #e7475b;
    text-align: center;
}

.map .contactSec section {
    float: left;
    width: 50%;
    padding-left: 100px;
    margin: 25px 0 0 0;
    background-repeat: no-repeat;
    background-position: left top;
}

.map .contactSec section p {
    color: #607883;
    font-size: 24px;
    line-height: 36px;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
}

.map .contactSec section p span {
    color: #17475b;
}

.map .contactSec section p a {
    color: #607883;
    text-decoration: none;
}

.map .contactSec section p a:hover {
    color: #e7475b;
}

.footer {
    width: 100%;
    float: left;
    height: 396px;
    background: url(../images/footBg.jpg) no-repeat;
    background-size: cover;
    position: relative;
    padding: 50px 0;
}

.footer .quickLinks {
    width: 258px;
    float: left;
    height: auto;
    padding: 30px 15px;
}

.footer .quickLinks h3 {
    font: 24px/28px 'VAGRoundedBT', sans-serif;
    color: #fefeff;
    padding-bottom: 29px;
}

.footer .quickLinks ul li a {
    font: 16px/32px 'Open Sans', sans-serif;
    color: #fff;
}

.footer .quickLinks ul li a:hover {
    color: #000;
}

.footer .loginDetails {
    width: 487px;
    float: left;
    height: auto;
    padding: 30px 50px;
}

.footer .loginDetails ul li {
    float: left;
    margin-right: 19px;
}

.footer .loginDetails li .btn1 {
    width: 118px;
    height: 36px;
    display: block;
    text-align: center;
    background: #e8485b url(../images/staff.png) no-repeat 9%;
    font: 600 14px/38px 'Open Sans', sans-serif;
    padding-left: 25px;
    color: #fff;
    border-radius: 3px;
    margin-bottom: 25px;
}

.footer .loginDetails li .btn2 {
    width: 138px;
    height: 36px;
    display: block;
    text-align: center;
    background: #edc647 url(../images/parent.png) no-repeat 9%;
    font: 600 14px/38px 'Open Sans', sans-serif;
    padding-left: 25px;
    color: #fff;
    border-radius: 3px;
    margin-bottom: 25px;
}

.footer .loginDetails li .btn1:hover {
    background: #398790 url(../images/staff.png) no-repeat 9%;
}

.footer .loginDetails li .btn2:hover {
    background: #398790 url(../images/parent.png) no-repeat 9%;
}

.footer .inquiry {
    width: 390px;
    height: 308px;
    float: left;
    margin: 0 15px;
    background: url(../images/inquiry.png) no-repeat;
}

.footer .inquiry:hover {
    -webkit-filter: grayscale(0.5);
    filter: grayscale(0.5);
}

.copyright {
    width: 100%;
    float: left;
    height: 59px;
    background: #fff;
    position: relative;
    font: 18px/24px 'Open Sans', sans-serif;
    padding: 18px 0;
}

.bodyContent {
    float: left;
    width: 100%;
    padding: 75px 15px;
    background: #fff;
}

.bodyContent h1 {
    font: 50px/56px 'VAGRoundedBT', sans-serif;
    color: #F2484B;
    padding-bottom: 29px;
}

.bodyContent h2 {
    font: 700 24px/28px 'Open Sans', sans-serif;
    color: #398790;
    padding: 10px 0;
}

.bodyContent h3 {
    font: 700 20px/24px 'Open Sans', sans-serif;
    color: #000;
    padding: 10px 0;
}

.bodyContent .picSet1 {
    border: 5px solid #FFD800;
}

.bodyContent p {
    font: 16px/24px 'Open Sans', sans-serif;
    color: #353535;
    padding: 15px 0;
}

.bodyContent p strong, .bodyContent p b {
    font-weight: 700;
}

.bodyContent img {
    float: left;
    margin: 0 25px 30px;
    max-width: 100%;
    height: auto
}

.bodyContent p a {
    color: #ff214b
}

.bodyContent p a:hover {
    color: #111
}

.bodyContent ul {
    padding: 10px 0 15px 0;
    margin: 0;
}

.bodyContent ul li {
    font: 400 16px/24px 'Open Sans', sans-serif;
    color: #555;
    padding: 0 0 0 20px;
    margin: 5px 0;
    position: relative;
    display: table
}

.bodyContent ul li:before {
    position: absolute;
    left: 0;
    top: 8px;
    background: #398790;
    width: 8px;
    height: 8px;
    content: '';
}

.bodyContent ol {
    padding: 10px 0 15px 0;
    margin: 0;
    list-style: none;
    counter-reset: my-awesome-counter;
}

.bodyContent ol li {
    font: 400 16px/24px 'Open Sans', sans-serif;
    color: #555;
    padding: 0 0 0 20px;
    margin: 5px 0;
    position: relative;
    counter-increment: my-awesome-counter;
}

.bodyContent ol li:before {
    position: absolute;
    left: 0;
    top: 0;
    content: counter(my-awesome-counter) ". ";
    color: #000;
}

.contactAddress {
    float: left;
    width: 50%;
    padding: 15px 0;
    position: relative;
}

.contactFormPart {
    float: left;
    width: 50%;
    padding: 15px 0;
    position: relative;
}

ul.contactFrm {
    float: left;
    width: 100%;
    padding: 15px 0;
}

ul.contactFrm li {
    float: left;
    width: 100%;
    padding: 0 0 10px;
    margin: 0;
    background: none!important;
}

ul.contactFrm li:before {
    display: none;
}

ul.contactFrm li span {
    float: left;
    width: 43%;
    padding: 0 2.5% 0 0;
    font: normal 16px/30px 'Open Sans', Arial, Helvetica, sans-serif;
    color: #333;
    text-align: right;
}

ul.contactFrm li input[type="text"] {
    width: 285px;
    height: 35px;
    padding: 3px 5px;
    border: 1px solid #ccc;
    background: #fff;
    font: normal 16px/24px 'open_sansregular', Arial, Helvetica, sans-serif;
    color: #333;
    border-radius: 3px
}

ul.contactFrm li select {
    width: 285px;
    height: auto;
    padding: 5px;
    border: 1px solid #ccc;
    background: #fff;
    font: normal 18px/24px 'Open Sans', Arial, Helvetica, sans-serif;
    color: #333;
    border-radius: 3px
}

ul.contactFrm li textarea {
    width: 285px;
    height: 100px;
    padding: 5px 5px;
    border: 1px solid #ccc;
    background: #fff;
    font: normal 16px/24px 'Open Sans', Arial, Helvetica, sans-serif;
    color: #333;
    border-radius: 3px
}

ul.contactFrm li input[type="submit"] {
    background: #FF224C;
    padding: 10px 18px;
    border: none;
    cursor: pointer;
    font: normal 16px/24px 'Open Sans', Arial, Helvetica, sans-serif;
    color: #fff;
}

ul.contactFrm li input[type="submit"]:hover {
    background: #0C3F9B;
}

.footer .social {
    width: 100%;
    float: left;
    height: auto;
    position: relative;
    margin: 0 auto;
    text-align: center;
}

.footer .social ul {
    width: 100%;
    height: auto;
    text-align: center;
    margin: 0 auto;
}

.footer .social ul li {
    float: left;
    color: #fff;
    border-radius: 50%;
    margin: 10px 5px !important;
}

.footer .social ul li a {
    color: #fff;
    width: 36px;
    height: 36px;
    display: block;
    font-size: 20px;
    line-height: 36px;
}

.social ul li a:hover {
    background: #398790 !important;
    color: #fff;
    border-radius: 50%;
}

.footer .social ul li a:hover {
    background: #000 !important;
    color: #fff;
    border-radius: 50%;
}

@media screen and (max-width: 1350px) {
    .headerPart .logo {
        width: 100%;
        padding: 15px 0;
    }
    .headerPart .address {
        width: 100%;
        padding: 20px 25px;
    }
    .headerPart .address li {
        margin: 0;
        width: 33.33%;
        text-align: center;
        background-position: 25%!important;
    }
    .headerPart .nav {
        width: 100%;
        height: auto;
        padding-left: 155px;
    }
    .headerPart .nav li {
        float: left;
        margin-right: 1px;
    }
    .headerPart .nav li:last-child {
        margin-right: 0;
    }
    .headerPart .nav li a {
        font: 18px/22px 'VAGRoundedBT', sans-serif;
        color: #fff;
        display: block;
        text-align: center;
        padding: 33px 21px;
    }
    .headerPart .nav li a:hover {
        background: #e8485b;
    }
    body.fixed .logo {
        padding: 10px 0;
    }
}

@media screen and (max-width: 1200px) {
    .headerPart .address {
        display: none;
    }
    .js #menu {
        display: none;
    }
    .js .slicknav_menu {
        display: block;
    }
    .slicknav_menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 99999;
    }
    .headerPart .logo {
        width: 100%;
        padding: 25px 0;
        margin-top: 60px;
    }
    .headerPart .logo img {
        width: 150px;
    }
    body.fixed .headerPart .logo img {
        width: 100px;
    }
    body.fixed .headerPart .logo {
        padding: 0;
    }
    .sliderLst {
        float: left;
        width: 100%;
        height: 500px;
        background-size: cover;
    }
    .sliderLstTxt {
        text-align: center;
    }
    .sliderLstTxt .btn {
        margin: 40px 15px 0 0;
    }
    .hmSection1 {
        height: auto;
    }
    .hmSection1 .hmPart {
        margin-top: 230px;
        position: relative;
        height: auto;
    }
    .hmSection1 .hmPart .block {
        width: 25%;
        height: auto;
        position: relative;
        float: left;
        padding: 0 15px;
        text-align: center;
        margin: 25px 0;
    }
}

@media screen and (max-width: 1170px) {
    .hmSection1 {
        height: auto;
    }
    .hmSection1 .hmPart {
        margin-top: 0;
    }
    .hmSection1 .hmPart .block {
        width: 50%;
    }
    .hmSection2 {
        padding: 35px 0;
    }
    .hmSection2 .aboutPart {
        width: 100%;
        text-align: center;
    }
    .hmSection2 .newsPart {
        width: 100%;
        text-align: center;
        padding: 0;
        margin-top: 25px;
    }
    .hmSection2 .newsPart h3 {
        font: 45px/36px 'MasterOfBreak', sans-serif;
        color: #e7475b;
        padding: 10px 0;
    }
    .hmSection2 .newsPart .newsBlock {
        width: 50%;
        text-align: left;
        margin: 30px 0!important;
    }
    .hmSection2 .newsPart .content {
        padding: 0px 20px 0 100px;
        width: 100%;
        height: 148px;
    }
    .hmSection2 .newsPart .content h2 {
        font: 600 18px/20px 'Open Sans', sans-serif;
        color: #39878f;
    }
    .hmSection2 .newsPart .content p {
        font: 16px/20px 'Open Sans', sans-serif;
        color: #353535;
        padding: 5px 0;
    }
    .certifications {
        padding: 20px 0;
    }
    .certifications ul li {
        float: none;
        margin: 25px 0;
        height: 195px;
    }
    .certifications ul li:last-child {
        margin-right: 0;
    }
    .map .contactMap {
        width: 100%;
        height: 300px;
    }
    .footer {
        height: auto;
        padding: 25px 0;
        text-align: center;
    }
    .footer .quickLinks {
        width: 100%;
        padding: 0;
    }
    .footer .loginDetails {
        width: 100%;
        padding: 0;
    }
    .footer .loginDetails ul li {
        float: none;
        display: inline-block;
        margin: 25px 25px;
    }
    .footer .inquiry {
        float: none;
        margin: 25px 0;
        display: inline-block;
        background-size: contain;
    }
    .copyright {
        text-align: center;
    }
}

@media screen and (max-width: 1170px) {}

@media screen and (max-width: 991px) {
    .bodyContent {
        padding: 45px 15px;
        text-align: center
    }
    .bodyContent h1 {
        font: 40px/55px 'VAGRoundedBT', sans-serif;
        color: #F2484B;
        padding-bottom: 29px;
    }
    .bodyContent h2 {
        font: 24px/28px 'Open Sans', sans-serif;
        color: #F2484B;
        padding: 10px 0;
    }
    .bodyContent .picSet1 {
        border: 5px solid #FFD800;
    }
    .bodyContent p {
        font: 16px/20px 'Open Sans', sans-serif;
        color: #353535;
        padding: 15px 0;
    }
    .bodyContent img {
        float: none;
        margin: 0 auto;
    }
    .map {
        height: 600px;
        position: relative;
    }
    .map .contactMap {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .map .contactSec section {
        float: left;
        width: 100%;
        padding: 50px 0 0 0;
        margin: 15px 0;
        background-repeat: no-repeat;
        background-position: center top;
        background-size: 45px 45px;
    }
    .map .contactSec section p {
        color: #607883;
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        font-family: 'Open Sans', sans-serif;
        text-align: center;
    }
    .map .contactSec div.contactSecInr {
        max-width: 300px;
        float: none;
        clear: both;
        margin: 0 auto;
    }
    .bannerPart.innerPageBnr {
        height: 300px;
    }
    .sliderLst {
        height: 300px;
        background-size: cover;
        background-position: right center;
    }
    .sliderLstTxt {
        font-size: 14px;
        line-height: 30px;
    }
    .bannerPart ul.rslides_tabs {
        display: none;
    }
    .sliderLstTxt .btn {
        margin: 10px;
        font-size: 15px;
        width: 110px;
    }
    .sliderLstTxt {
        top: auto;
        bottom: 10%;
    }
}

@media screen and (max-width: 767px) {
    /*.sliderLst{ height:300px; background-size:cover; background-position:right center; }
.sliderLstTxt{top: 10%; font-size: 20px; }
.sliderLstTxt .btn{ margin: 0;}*/
    .hmSection1 .social ul {
        width: 100%
    }
    .hmSection1 .social ul li {
        float: none;
        display: inline-block;
        margin: 25px;
    }
    .hmSection1 .hmPart .block {
        width: 100%;
    }
    .hmSection2 {
        padding: 35px 0;
    }
    .hmSection2 .aboutPart {
        width: 100%;
        text-align: center;
    }
    .hmSection2 .newsPart {
        width: 100%;
        text-align: center;
        padding: 0;
        margin-top: 25px;
    }
    .hmSection2 .newsPart h3 {
        font: 45px/36px 'MasterOfBreak', sans-serif;
        color: #e7475b;
        padding: 10px 0;
    }
    .hmSection2 .newsPart .newsBlock {
        width: 100%;
        text-align: left;
        margin: 15px 15px !important;
    }
    .hmSection2 .newsPart .content {
        padding: 0 25px 0 100px;
        height: auto;
    }
    .certifications img {
        width: 200px;
    }
    .certifications ul li {
        float: none;
        margin: 25px 0;
        height: auto;
    }
    .footer .inquiry {
        width: 100%;
    }
    .contactAddress {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    .contactFormPart {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
    ul.contactFrm li span {
        width: 100%;
        text-align: left;
    }
    .footer .loginDetails li .btn1 {
        margin: 15px 0;
    }
    .footer .loginDetails li .btn2 {
        margin: 15px 0;
    }
    .footer .inquiry {
        float: none;
        margin: 0 auto;
        display: inline-block;
        background-size: contain;
        width: 320px;
        height: 233px;
    }
    .map .contactSec {
        display: none;
    }
    .hmSection1 .social ul li {
        margin: 10px;
    }
    .hmSection1 .hmPart {
        margin-top: 20px;
    }
    .hmSection1 .social ul li a {
        width: 36px;
        height: 36px;
        font-size: 18px;
        line-height: 36px;
    }
    .photoGallery .sliderBlock {
        width: 50%;
        height: auto;
        background-size: cover;
    }
    .certifications h3 {
        font: 30px/38px 'MasterOfBreak', cursive, sans-serif;
    }
}

@media screen and (max-width: 480px) {
    .footer .loginDetails ul li {
        margin: 0;
    }
    .photoGallery .sliderBlock {
        width: 100%;
        height: auto;
        background-size: cover;
    }
}

@media screen and (max-width: 400px) {
    .footer .inquiry {
        margin-top: 0;
    }
    .fb {
        transform: scale(0.77);
        -webkit-transform: scale(0.77);
        transform-origin: 0 0;
        -webkit-transform-origin: 0 0;
        display: block;
        margin-left: 15px;
    }
}