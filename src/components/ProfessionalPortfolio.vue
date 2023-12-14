<template>
    <div id="container">
      <h1>Portfolio</h1>
      <ul>
        <li v-for="(item, index) in portfolioItems" :key="index">
          {{ item.name }} - {{ item.type }}
        </li>
      </ul>
    </div>
    <div id="depth">
  <h2>Node Basics</h2>
  <p>Node basics was about using node, and how it would be beneficial to use in creating websites. While learning about Node, I thought it was a very good thing to use in creating a website</p>
  <h2>IT Website</h2>
  <p>In college, we were required to create a website to use for the college to showcase their IT program, and what we have learned. I was in charge of making the information about the three different paths a person can take at CCC. Below is a picture of the part of the website I worked on. </p>
  <img id="IT" src="../assets/itwebsite.png" alt="It website">
  <h2>Java Stocks</h2>
  <p>For one of my final projects in a class, I was told to create a Java program that allows someone to add stocks, and that someone could load the assets of their own into it.</p>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        portfolioItems: [
          { name: 'Tile Estimator', type: 'C#' },
          { name: 'Car Class', type: 'C#' },
          { name: 'Node Basics', type: 'JS' },
          { name: 'IT Website', type: 'HTML, CSS, Bootstrap' },
          { name: 'Stocks', type: 'Java' },

        ],
      };
    },
   
  };
  </script>
    

