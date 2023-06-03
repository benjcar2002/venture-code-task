<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Draggable Carousel Example</title>
        <link rel="stylesheet" href="../src/css/style.css">
    </head> 

    <body>
        <script src="../src/js/carousel.js"></script>

        <div class="container lg:mx-auto p-6">
            <h1 class="text-3xl mb-8 font-bold">Section Title</h1>
            <div class="w-[150%]">
                <ul style="outline: 2px dotted pink" class="flex gap-4">
                    <?php include('templates/product-card.php'); ?>
                </ul>
            </div>
        </div>
    </body>
</html>