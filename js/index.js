$(document).ready(function() {
    // URL de la API
    var apiUrl = 'https://api.escuelajs.co/api/v1/categories';

    // Obtener datos de la API
    $.get(apiUrl, function(data) {
        // Iterar sobre cada categoría
        data.forEach(function(category) {
            // Crear el elemento de categoría
            var categoryCard = `
                <div class="col-md-4 mb-4">
                    <div class="card  bg-info text-white">
                        <img src="${category.image}" class="card-img-top" alt="${category.name}">
                        <div class="card-body">
                            <h5 class="card-title">${category.name}</h5>
                        </div>
                    </div>
                </div>
            `;

            // Agregar el elemento de categoría al contenedor
            $('#categoryList').append(categoryCard);
        });
    });
});
