# Scenic
Scenic is an image viewer for beautiful and elegant images. Scenic supports themes as most of the work requires CSS.

## How do I use it? (Or Quick Start)

Include the Scenic theme stylesheet you want to use in the <head> section of your page.

    <link rel="stylesheet" type="text/css" href="css/scenic.default.css" media="screen">

Include jQuery (if not using it already) and the scenic.packed.js file in the <head> section of your page.

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/scenic.packed.js"></script>

Your images should contain an A element (and an IMG element if you want to display a thumbnail). All A elements should have a REL attribute so Scenic knows how to group your images.

    <a href="/images/largephoto.jpg" rel="vacation" class="scenic"><img src="/images/thumbphoto.jpg" alt=""></a>
    <a href="/images/largephoto2.jpg" rel="vacation" class="scenic"><img src="/images/thumbphoto2.jpg" alt=""></a>
    <a href="/images/largephoto3.jpg" rel="vacation" class="scenic"><img src="/images/thumbphoto3.jpg" alt=""></a>

Finally, before the </body> tag, set up Scenic to set up listeners for your photos.

    <script type="text/javascript">
        $(function() {
            $('.scenic').scenic();
        });
    </script>

(Optional) If you have a different theme besides the default, initialize Scenic with the theme property.

    <script type="text/javascript">
        $(function() {
            $('.scenic').scenic({
                'theme': 'mytheme'
            });
        });
    </script>

You're done. Watch magic before your eyes (if you did everything correctly).

## Shortcuts

* Navigating your images or photos are simple. Either click the previous or next preview thumbnails or use your keyboard's left and right arrow keys.
* Closing can be triggered by clicking the active photo or pressing the Esc key.

## Custom Themes

We welcome you to make your own custom theme for Scenic. Included is the basic skeleton of the Scenic structure. It includes minimal properties and should only be overridden if your theme absolutely requires.
The structure of Scenic is as follows for reference:

    <div id="scenic">
        <ul>
            <li class="previous">
                <div>
                    <span>
                        <img>
                    </span>
                </div>
            </li>
            <li class="active">
                <div>
                    <span>
                        <img>
                    </span>
                </div>
            </li>
            <li class="next">
                <div>
                    <span>
                        <img>
                    </span>
                </div>
            </li>
            <li>
                <div>
                    <span>
                        <img>
                    </span>
                </div>
            </li>
        </ul>
    </div>

I highly recommend using SASS (SCSS specifically) for creating your themes. Import the scenic.scss file as the first line in your SCSS theme file. This will reduce the need of an additional request.

If you're not interested in using SCSS, you can import the skeleton and then your theme file:

    <link rel="stylesheet" type="text/css" href="css/scenic.css" media="screen">
    <link rel="stylesheet" type="text/css" href="css/scenic.yourtheme.css" media="screen">

## Need Help?

Need help or was something not covered? You can contact me with one of the following options:

* Twitter - [@tempelmeyer](http://twitter.com/tempelmeyer)
* Email - [drewtemp@gmail.com](mailto:drewtemp@gmail.com?subject=Need help with Scenic)

