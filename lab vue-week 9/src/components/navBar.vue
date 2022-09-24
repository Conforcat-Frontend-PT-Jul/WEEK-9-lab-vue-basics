
<template>

    <nav>
        <ul>
            <li>
                <a href="#Home">Home</a>
            </li>
            <li>
                <a href="/project-page.html">Project</a>
            </li>
            <li>
                <a href="#services">Services</a>
            </li>
        </ul>
    </nav>

  </template>

<style scoped>
    nav{
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    margin: 10px;
    align-items: center;
    }

    nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    nav ul li a{
    text-decoration: none;
    color: #072AC8;
    padding: 10px 30px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 10px;
    }

    nav ul li a:hover{
    text-decoration: none;
    color: #072AC8;
    border: 1px solid #A2D6F9;
    /*color: var(--hospital-green);*/
    height: 30px;
    }
</style>


        