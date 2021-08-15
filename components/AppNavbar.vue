<template>
<header>
    <nav>
        <ul>
            <li>
                <nuxt-link exact to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="resume">Resume</nuxt-link>
            </li>
            <li>
                <nuxt-link to="portfolio">Portfolio</nuxt-link>
            </li>
            <li>
                <nuxt-link to="blog">Blog</nuxt-link>
            </li>
            <li>
                <nuxt-link to="contacts">Contacts</nuxt-link>
            </li>
        </ul>
    </nav>
</header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 100;
    text-align: right;
    background: #fff;
}

ul {
    display: flex;
    list-style: none;
    justify-content: right;
    margin: 0;
}

li {
    list-style: none;
}

a{
    font-size: 18px;
    font-weight: 500;
    margin-left: 50px;
    text-align: right;
    margin-bottom: 0;
    color: #363636;
    text-decoration: none;
    opacity: 1;
    outline: none;
}

li a.nuxt-link-active {
    color: #f26b38;
} 

a:visited {
    color: black;
    text-decoration: none;
}

li a:hover {
    color: #f26b38;
}

nav {
    padding: 30px 65px;
}

</style>