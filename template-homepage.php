<?php wp_enqueue_script('react_js'); ?>
<?php
/**
 * The template for displaying the homepage.
 *
 * This page template will display any functions hooked into the `homepage` action.
 * By default this includes a variety of product displays and the page content itself. To change the order or toggle these components
 * use the Homepage Control plugin.
 * https://wordpress.org/plugins/homepage-control/
 *
 * Template name: Homepage
 *
 * @package storefront
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
      <section class="storefront-product-section storefront-recent-products">
        <h2 class="section-title">
          Video <a href="/video-gallery">Reel <i class="fa fa-play"></i></a>
        </h2>
        <?php echo do_shortcode("[ypt playlist_id=PLL8uwUXN31AClybLy9mcE8hOYfLy-iKLi]"); ?>
        <div class="homepage-cta">
          <a href="/video-gallery" class="button see-more">
            <h4>See More <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
          </a>
        </div>
      </section>
			<?php
			/**
			 * Functions hooked in to homepage action
			 *
			 * @hooked storefront_homepage_content      - 10
			 * @hooked storefront_product_categories    - 20
			 * @hooked storefront_recent_products       - 30
			 * @hooked storefront_featured_products     - 40
			 * @hooked storefront_popular_products      - 50
			 * @hooked storefront_on_sale_products      - 60
			 * @hooked storefront_best_selling_products - 70
			 */
			do_action( 'homepage' ); ?>
      <div class="homepage-cta">
        <a href="/store" class="button">
          <h4>Shop Now <i class="fa fa-arrow-right" aria-hidden="true"></i></h4>
        </a>
      </div>
		</main><!-- #main -->
	</div><!-- #primary -->
<?php
get_footer();
