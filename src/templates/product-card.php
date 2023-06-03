<?php while( $i <= 8 ) : ?>
    <li class="inline-block" style="outline: 2px dotted blue">
        <a>
            <div class="h-[485px] w-[396px] relative">
                <img style="outline: 2px dotted green" class="" src="images/Placeholder Image.png">
                <span class="absolute bottom-4 right-4 p-4 rounded-full bg-white"><?php include('svg/arrow.svg') ?></span>
            </div>
            <h3 class="my-2 text-lg">Title</h3>
        </a>
    </li>

    <?php $i++ ?>
<?php endwhile; ?>