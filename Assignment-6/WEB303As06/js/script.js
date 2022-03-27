
$(document). ready(function(e){
 
    e.preventDefault();

    $(".accordian-1").on('click','.accr-1-1', function (e) {
        e.preventDefault();
        $(this)
        .next('.acpr-1-1')
        .not('animated')
        .sideToggle();
    });

    
    $(".accordian-1").on('click','.accr-1-2', function (e) {
        e.preventDefault();
        $(this)
        .next('.acpr-1-2')
        .not('animated')
        .sideToggle();
    });

    $(".accordian-1").on('click','.accr-1-3', function (e) {
        e.preventDefault();
        $(this)
        .next('.acpr-1-3')
        .not('animated')
        .sideToggle();
    });

    $(".accordian-2").on('click','.accr-2-1', function (e) {
        e.preventDefault();
        $(this)
        .next('.acpr-2-1')
        .not('animated')
        .sideToggle();
    });
    $(".accordian-2").on('click','.accr-2-2', function (e) {
        e.preventDefault();
        $(this)
        .next('.acpr-2-2')
        .not('animated')
        .sideToggle();
    });
    $(".accordian-2").on('click','.accr-2-3', function (e) {
        e.preventDefault();
        $(this)
        .next('.acpr-2-3')
        .not('animated')
        .sideToggle();
    });
    $('.tab-list').each(function() { // Find lists of tabs
        var $this = $(this) // Store this list
        var $tab = $this.find('li.tab-control-1') // Get the active li
        var $link = $tab.find('a') // Get its link
        var $panel = $($link.attr('href')); // Get active panel
        $this.on('click', '.tab-contro-l', function(e) { // Click tab
            e.preventDefault(); // Prevent link
            var $link = $(this); // Store current link
            var id = this.hash; // Get clicked tab
            if (id && !$link.parent().is('.active')) { // If not active
                $panel.removeClass('active'); // Make panel 
                $tab.removeClass('active'); // tab inactive
                $panel = $(id).addClass('active'); // Make new panel and
                $tab = $link.parent().addClass('active'); // tab active 
            }
    });
    });
    $('.tab-list').each(function() { // Find lists of tabs
        var $this = $(this) // Store this list
        var $tab = $this.find('li.tab-control-2') // Get the active li
        var $link = $tab.find('a') // Get its link
        var $panel = $($link.attr('href')); // Get active panel
        $this.on('click', '.tab-control-2', function(e) { // Click tab
            e.preventDefault(); // Prevent link
            var $link = $(this); // Store current link
            var id = this.hash; // Get clicked tab
            if (id && !$link.parent().is('.active')) { // If not active
                $panel.removeClass('active'); // Make panel 
                $tab.removeClass('active'); // tab inactive
                $panel = $(id).addClass('active'); // Make new panel and
                $tab = $link.parent().addClass('active'); // tab active 
            }
    });
    });
    $('.tab-list').each(function() { // Find lists of tabs
        var $this = $(this) // Store this list
        var $tab = $this.find('li.tab-control-3') // Get the active li
        var $link = $tab.find('a') // Get its link
        var $panel = $($link.attr('href')); // Get active panel
        $this.on('click', '.tab-contro-3', function(e) { // Click tab
            e.preventDefault(); // Prevent link
            var $link = $(this); // Store current link
            var id = this.hash; // Get clicked tab
            if (id && !$link.parent().is('.active')) { // If not active
                $panel.removeClass('active'); // Make panel 
                $tab.removeClass('active'); // tab inactive
                $panel = $(id).addClass('active'); // Make new panel and
                $tab = $link.parent().addClass('active'); // tab active 
            }
    });
    });


})

