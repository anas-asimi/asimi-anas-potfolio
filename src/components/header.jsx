import React, { useEffect } from "react";
import * as Unicons from '@iconscout/react-unicons';

function switch_theme() {
  const html_element = document.querySelector("html");
  const lightButton = document.querySelector(".tools__theme-light");
  const darkButton = document.querySelector(".tools__theme-dark");

  lightButton.classList.remove('theme-active')
  darkButton.classList.remove('theme-active')

  if (html_element.getAttribute("data-theme") === "light") {
    html_element.setAttribute("data-theme", "dark")
    lightButton.classList.add('theme-active')
  }
  else {
    html_element.setAttribute("data-theme", "light");
    darkButton.classList.add('theme-active')
  }
}
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

export default function header() {
  useEffect(() => {
    // scroll effect
    const brandName = document.querySelector(".brand-name");
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        brandName.classList.add('scrolled')
      } else {
        brandName.classList.remove('scrolled')
      }
    });
    // slider width
    const navElement = document.querySelector("nav");
    let elementWidth = navElement.offsetWidth
    const sliderElement = document.querySelector(".slider");
    sliderElement.style.setProperty('--full-width', elementWidth);

    // slider movement
    const navItems = document.querySelectorAll('.nav__item')
    navItems.forEach((element, index) => {
      element.addEventListener('click', () => {
        sliderElement.style.setProperty('--slider-position', index + 1);
        navItems.forEach((ele) => {
          ele.classList.remove('nav__item-active')
        })
        element.classList.add('nav__item-active')
      })
    })
  }, [])
  return (
    <header>
      <div className="brand">
        <span className="curly-bracket">{"{"}</span>
        <span className="brand-name">
          A<span className="brand-name__sub">nas&nbsp;</span>A
          <span className="brand-name__sub">simi</span>
        </span>
        <span className="curly-bracket">{"}"}</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#" onClick={scrollToTop} className="nav__item nav__item-active hoverable">Home</a></li>
          <li><a href="#about" className="nav__item hoverable">About</a></li>
          <li><a href="#skills" className="nav__item hoverable">Skills</a></li>
          <li><a href="#projects" className="nav__item hoverable">Projects</a></li>
          <li><a href="#contact" className="nav__item hoverable">Contact</a></li>
        </ul>
        <div className="slider"></div>
      </nav>
      <div className="tools">
        <button className="tools__theme-light hoverable" onClick={switch_theme}><Unicons.UilSun /></button>
        <button className="tools__theme-dark hoverable theme-active" onClick={switch_theme}><Unicons.UilMoon /></button>
        <button className="tools__language hoverable" onClick={() => { alert('will be supported soon.') }}>Arabic</button>
      </div>
    </header>
  );
}
