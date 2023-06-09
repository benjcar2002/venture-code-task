<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Draggable Carousel Example</title>
        <link rel="stylesheet" href="../src/css/tailwind-styles.css">
        <link rel="stylesheet" href="../src/css/carousel.css">
        <!-- jQuery CDN -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    </head> 

    <body id="content">
        <div class="container mx-auto p-6">
            <h1 class="text-3xl mb-6 font-bold">Section Title</h1>
            <div class="carousel-wrapper"></div>
            <ul class="carousel-slider">
                <?php include('templates/product-card.php'); ?>
            </ul>
        </div>

        <script src="../src/js/carousel.js"></script>
    </body>
</html>