<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">

            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               
                    <li class="nav-item">
                        <router-link to="/translator" class="nav-link">Traductor</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/image" class="nav-link">Imágenes</router-link>
                    </li>
                    
                    <li class="nav-item">
                        <router-link to="/resumir" class="nav-link">Resumir</router-link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "MenuDepartamentos"
}
</script>