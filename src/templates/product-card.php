<?php while( $i <= 8 ) : // simply increase the number to add more product cards ?>
    <li>
        <a href="#"  class="product-link group">
            <div class="relative" style="max-height: 485px; max-width: 396px;">
                <img class="duration-300 group-hover:scale-105" src="images/Placeholder Image.png">
                <span class="hidden duration-300 group-hover:block hover:translate-x-1 hover:bg-slate-200 absolute bottom-2 right-2 p-4 rounded-full bg-white"><?php include('svg/arrow.svg') ?></span>
            </div>
            <h3 class="my-2 text-lg duration-300 group-hover:translate-y-3 group-hover:text-xl">Title</h3>
        </a>
    </li>

    <?php $i++ ?>
<?php endwhile; ?>