# wp-customizer-resize
I rarely need to use the Wordpress customizer, but when I do I'm moderately enraged by how tiny it is. This is a simple jQuery plugin that adjusts the customizer window width.

### Usage

You could add this to your codebase if you wish, but I recommend implementing through a browser extension like Tampermonkey.
If you do choose to add this to your codebase, I have added `if($('#customize-controls')` as a conditional so it only runs if you are using the customizer.
