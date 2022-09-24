<template>
<footer>
    <ul>
        <li>
            <a href="/">Team</a>
        </li>
                    
        <li>
            <a href="#services">Services</a>
        </li>
                        
        <li>
            <a href="/">About Us</a>
        </li>
                        
        <li>
            <a href="/">Press</a>
        </li>
                       
        <li>
            <a href="/project-page.html">Projects</a>
        </li>            
        
        <li>
            <a href="/">Privacy Policy</a>
        </li>    
    </ul>             
</footer>
</template>

<style scoped>

    footer{
    width: 100%;
    }

    ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-auto-rows: 60px;
    }

    ul li a {
    line-height: 35px;
    height: 210px;
    color: #6B708D;
    }

    ul li a:hover {
    color: #072AC8;
    text-decoration: underline;
    }

</style>