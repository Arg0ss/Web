import styled from "styled-components";

export const Container = styled.section`
img{width: 100%}
  .main-container {
    width: 90vw;
    margin: 0 auto;
    padding: 40px 0;
    font-family: "Montserrat", sans-serif;
  }
  .main-container > h2 {
    text-align: center;
    padding: 10px 0;
    font-size: 32px;
    margin-bottom: 200px;
  }
  .main-container > p {
    font-weight: 300;
    padding: 10px 0;
    opacity: 0.7;
    text-align: center;
  }
  .category-head {
    margin: 30px 0;
  }
  .category-head ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .category-title {
    flex: 0 0 calc(16.6667% - 10px);
    display: flex;
    justify-content: center;
    background: #a8a8a8;
    padding: 12px;
    color: #fff;
    cursor: pointer;
    transition: all 0.4s ease;
    border-radius: 50px;
    font-family: "Montserrat", sans-serif;
  }
  .category-title:hover {
    opacity: 0.7;
  }
  .category-title li {
    padding: 0 10px;
  }
  .category-title span {
    color: #222;
  }
  .posts-main-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    padding-bottom: 40px;
  }
  .border {
    box-shadow: 0px 8px 22px -12px rgba(0, 0, 0, 0.64);
    border-radius: 10px;
    height: fit-content;
  }
  .post-img {
    position: relative;
  }
  .category-name {
    position: absolute;
    top: 20px;
    left: 20px;
    text-transform: uppercase;
    font-size: 13px;
    color: #fff;
    padding: 4px 10px;
    border-radius: 50px;
  }
  .cripto .category-name {
    background: #00a7ea;
  }
  .block .category-name {
    background: #f03250;
  }
  .fin .category-name {
    background: #f0544f;
  }
  .inv .category-name {
    background: #2c2a4a;
  }
  .gr .category-name {
    background: #a1e44d;
  }

  .post-content {
    padding: 25px;
  }
  .post-content-top {
    background: #1f104f;
    color: #fff;
    padding: 5px 0 5px 15px;
    border-radius: 40px;
  }
  .post-content-top span {
    padding-right: 20px;
  }
  .post-content-top .fa-comment,
  .post-content-top .fa-calendar {
    padding-right: 5px;
  }
  .post-content h2 {
    font-size: 22px;
    padding: 12px 0;
    font-weight: 400;
  }
  .post-content p {
    opacity: 0.7;
    font-size: 15px;
    line-height: 1.8;
  }
  .read-btn {
    border: none;
    padding: 8px 15px;
    display: block;
    margin: 5px auto;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid #292929;
    background: transparent;
    margin-bottom: 40px;
    border-radius: 20px;
    width: 100px;
  }

  .read-btn:hover {
    background: #f6f6f6;
  }

  @media (max-width: 1170px) {
    .posts-main-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 768px) {
    .posts-main-container {
      grid-template-columns: 1fr;
    }
  }

  .active {
    background: #f0544f;
  }
  .imagemparte {
    border-radius: 10px 10px 0px 0px;
  }
  .fotter {
    padding: 40px 0;
    background-color: #170a45;
  }
  .fotter .social {
    text-align: center;
    padding-bottom: 25px;
  }
  .fotter .social a {
    font-size: 24px;
    color: inherit;
    border: 1px solid #ccc;
    width: 40px;
    height: 40px;
    line-height: 38px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    margin: 0 8px;
    color: white;
    opacity: 0.75;
  }
  .fotter .social a:hover {
    opacity: 0.9;
  }
  .fotter ul {
    margin-top: 0;
    padding: 0;
    list-style: none;
    line-height: 1.6;
    margin-bottom: 0;
    text-align: center;
    color: white;
  }
  .fotter ul li a {
    color: inherit;
    text-decoration: none;
    opacity: 0.9;
  }
  .fotter ul li {
    display: inline-block;
    padding: 0 15px;
  }
  .fotter ul li a:hover {
    opacity: 1;
    text-decoration: underline;
  }
  .fotter .copiright {
    margin-top: 15px;
    text-align: center;
    color: white;
  }
  .underline {
    text-align: center;
    opacity: 0.5;
    margin-bottom: 20px;
  }

  :root {
    --background-gradient: linear-gradient(30deg, #f39c12 30%, #f1c40f);
    --gray: #34495e;
    --darkgray: #2c3e50;
  }

  select {
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    flex: 1;
    padding: 0 1em;
    color: #fff;
    background-color: var(--darkgray);
    background-image: none;
    cursor: pointer;
  }
  select::-ms-expand {
    display: none;
  }

  .filter-rows {
    display: flex;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .filter-container {
    margin-top: 104px;
  }

  section {
    padding: 100px 0;
  }
  .max-width {
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
  }
  .about,
  .services,
  .skills,
  .teams,
  .contact,
  footer {
    font-family: "Poppins", sans-serif;
  }
  .about .about-content,
  .services .serv-content,
  .skills .skills-content,
  .contact .contact-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  section .title {
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: "Ubuntu", sans-serif;
  }
  section .title::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
  }
  section .title::after {
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: blue;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
  }

  .navbar {
    position: fixed;
    width: 100%;
    z-index: 999;
    padding: 30px 0;
    font-family: "Ubuntu", sans-serif;
    transition: all 0.3s ease;
    background: #1f104f;
  }
  .navbar.sticky {
    padding: 15px 0;
    background: #1f104f;
    opacity: 0.98;
  }
  .navbar .max-width {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logoimagem {
    width: 50px;
  }
  .navbar .menu li {
    list-style: none;
    display: inline-block;
    font-family: "Montserrat", sans-serif;
  }
  .navbar .menu li a {
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-left: 25px;
    transition: color 0.3s ease;
  }
  .navbar .menu li a:hover {
    color: blue;
  }
  .navbar.sticky .menu li a:hover {
    color: #fff;
  }

  .menuclasse {
    color: #fff;
    font-size: 23px;
    cursor: pointer;
    display: none;
    text-decoration: none;
  }
  .scroll-up-btn {
    position: fixed;
    height: 45px;
    width: 42px;
    background: #170a45;
    right: 30px;
    bottom: 10px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    z-index: 9999;
    font-size: 30px;
    border-radius: 6px;
    border-bottom-width: 2px;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }
  .scroll-up-btn.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
  }
  .scroll-up-btn:hover {
    filter: brightness(90%);
  }

  .home {
    display: flex;
    background: url("https://media.discordapp.net/attachments/937208450331590657/937481347658813440/city.png?width=785&height=589")
      no-repeat center;
    height: 100vh;
    color: #fff;
    min-height: 500px;
    background-size: cover;
    background-attachment: fixed;
    font-family: "Ubuntu", sans-serif;
  }
  .home .max-width {
    width: 100%;
  }
  .home .max-width .row {
    margin-right: 0;
  }
  .home .home-content .text-1 {
    font-size: 27px;
    margin-left: 33px;
  }
  .home .home-content .text-2 {
    font-size: 75px;
    font-weight: 600;
  }
  .home .home-content .text-3 {
    font-size: 40px;
    margin: 5px 0;
  }
  .home .home-content .text-3 span {
    color: #1f104f;
    font-weight: 500;
  }
  .home .home-content a {
    display: inline-block;
    background: #1f104f;
    color: #fff;
    font-size: 25px;
    padding: 12px 36px;
    margin-top: 20px;
    font-weight: 400;
    border-radius: 6px;
    transition: all 0.3s ease;
    margin-left: 50px;
  }
  .home .home-content a:hover {
    color: blue;
    background: none;
  }
  .home-content {
    margin-left: 430px;
    text-transform: uppercase;
  }
  .imagemlogo {
    width: 150px;
    margin-left: 755px;
    margin-top: 30px;
  }
  .selectx {
    font-family: "Montserrat", sans-serif;
    background: #1f104f;
  }
  .border {
    font-family: "Montserrat", sans-serif;
  }
  .lista {
    font-family: "Montserrat", sans-serif;
  }
  .titulo1 {
    font-family: "Montserrat", sans-serif;
  }
`;
