<?php $is_internal_page = "yes"; include_once("header.php"); ?>
<script>
(function() {
  "use strict";
  // Removes the class and the preceding whitespace from the element
  function removeClass(elementID, className){
    var element = document.getElementById(elementID),
        classNames = document.getElementById(elementID).className;
    if (classNames.indexOf(className) !== -1){
      className = " " + className;
      return element.className = element.className.replace(className, '');
    }
  }
  removeClass('topbar', 'expanded');
})();
</script>
<section id="page" class="pure-g">
    <div class="pure-u-1 pure-u-lg-12-24 pure-u-xl-12-24"><?php echo $page['content']; ?></div>
    <div class="pure-u-1 pure-u-lg-2-24 pure-u-xl-2-24"></div>
    <div class="pure-u-1 pure-u-lg-10-24 pure-u-xl-8-24"><?php include_once("contact-form.php"); ?></div>
</section>
<?php include_once("footer.php"); ?>